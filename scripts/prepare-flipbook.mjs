import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { createCanvas } from '@napi-rs/canvas';
import sharp from 'sharp';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const POINTS_PER_INCH = 72;
const DEFAULT_TRIM_INSET = 21;
const DEFAULT_SCALE = 2.5;

function parseEdgeFixes(value = '') {
  return value.split(',').filter(Boolean).map((fix) => {
    const [page, edge, points] = fix.split(':');
    const parsed = { page: Number(page), edge, points: Number(points) };

    if (!Number.isInteger(parsed.page) || parsed.page < 1 || !['top', 'right', 'bottom', 'left'].includes(edge) || parsed.points <= 0) {
      throw new Error(`Invalid edge fix "${fix}". Use page:edge:points, for example 4:right:12.`);
    }

    return parsed;
  });
}

function readArguments() {
  const values = process.argv.slice(2);
  const options = {};

  for (let index = 0; index < values.length; index += 2) {
    options[values[index].replace(/^--/, '')] = values[index + 1];
  }

  const required = ['cover', 'content', 'back', 'output'];
  const missing = required.filter((name) => !options[name]);

  if (missing.length > 0) {
    throw new Error(`Missing required options: ${missing.map((name) => `--${name}`).join(', ')}`);
  }

  return {
    sources: [options.cover, options.content, options.back],
    outputDirectory: options.output,
    trimInset: Number(options['trim-inset'] ?? DEFAULT_TRIM_INSET),
    scale: Number(options.scale ?? DEFAULT_SCALE),
    innerTrim: Number(options['inner-trim'] ?? 0),
    edgeFixes: parseEdgeFixes(options['edge-fixes']),
  };
}

async function renderPdf(source, startIndex, settings, sourceIndex) {
  const data = new Uint8Array(await fs.readFile(source));
  const document = await getDocument({ data }).promise;
  const pages = [];

  for (let pageIndex = 1; pageIndex <= document.numPages; pageIndex += 1) {
    const page = await document.getPage(pageIndex);
    const viewport = page.getViewport({ scale: settings.scale });
    const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
    const context = canvas.getContext('2d');

    await page.render({ canvas, canvasContext: context, viewport }).promise;

    const trimPixels = Math.round(settings.trimInset * settings.scale);
    const baseWidth = canvas.width - trimPixels * 2;
    const height = canvas.height - trimPixels * 2;
    const bindingPixels = sourceIndex === 1
      ? Math.min(Math.round(settings.innerTrim * settings.scale), trimPixels)
      : 0;
    const width = baseWidth - bindingPixels;

    if (width <= 0 || height <= 0) {
      throw new Error(`Trim inset is too large for ${source}, page ${pageIndex}`);
    }

    const outputIndex = startIndex + pages.length;
    const fileName = `page-${String(outputIndex).padStart(3, '0')}.avif`;
    const outputPath = path.join(settings.outputDirectory, fileName);
    let cropLeft = trimPixels;

    if (sourceIndex === 1 && bindingPixels > 0) {
      const edge = outputIndex % 2 === 0 ? 'right' : 'left';
      cropLeft += edge === 'left' ? bindingPixels : 0;
    }

    let pageImage = sharp(canvas.toBuffer('image/png'))
      .extract({ left: cropLeft, top: trimPixels, width, height });

    const pageFixes = settings.edgeFixes.filter(({ page: fixedPage }) => fixedPage === outputIndex);

    for (const fix of pageFixes) {
      const pixels = Math.round(fix.points * settings.scale);
      const horizontal = fix.edge === 'left' || fix.edge === 'right';

      if (pixels >= (horizontal ? width : height)) {
        throw new Error(`Edge fix is too large for output page ${outputIndex}`);
      }

      pageImage = pageImage
        .extract({
          left: fix.edge === 'left' ? pixels : 0,
          top: fix.edge === 'top' ? pixels : 0,
          width: width - (horizontal ? pixels : 0),
          height: height - (horizontal ? 0 : pixels),
        })
        .extend({ [fix.edge]: pixels, extendWith: 'copy' });
    }

    await pageImage
      .avif({ quality: 72, effort: 5 })
      .toFile(outputPath);

    pages.push({ file: fileName, width, height });
    process.stdout.write(`Rendered ${path.basename(source)} page ${pageIndex}/${document.numPages}\n`);
    page.cleanup();
  }

  await document.destroy();
  return pages;
}

async function main() {
  const settings = readArguments();
  await fs.rm(settings.outputDirectory, { recursive: true, force: true });
  await fs.mkdir(settings.outputDirectory, { recursive: true });

  const pages = [];
  for (const [sourceIndex, source] of settings.sources.entries()) {
    pages.push(...await renderPdf(source, pages.length + 1, settings, sourceIndex));
  }

  const manifest = {
    pageCount: pages.length,
    trimInsetPoints: settings.trimInset,
    pages,
  };

  await fs.writeFile(
    path.join(settings.outputDirectory, 'manifest.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );

  process.stdout.write(`Prepared ${pages.length} pages in ${settings.outputDirectory}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
