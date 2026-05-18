import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const args = process.argv.slice(2);

if (!args.length) {
  console.error('Usage: npm run optimize-images -- <file> [file...]');
  process.exit(1);
}

const outputDir = path.resolve('src/assets/optimized');
const maxWidth = 2200;
const webpQuality = 80;
const avifQuality = 60;
const effort = 5;

const formatKb = (bytes) => `${(bytes / 1024).toFixed(2)} KB`;

await fs.mkdir(outputDir, { recursive: true });

for (const inputArg of args) {
  const inputPath = path.resolve(inputArg);
  const parsed = path.parse(inputPath);
  const outputWebp = path.join(outputDir, `${parsed.name}.webp`);
  const outputAvif = path.join(outputDir, `${parsed.name}.avif`);

  const sourceBuffer = await fs.readFile(inputPath);
  const sourceStats = await fs.stat(inputPath);
  const metadata = await sharp(sourceBuffer).metadata();

  const pipeline = sharp(sourceBuffer);
  if (metadata.width && metadata.width > maxWidth) {
    pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  await pipeline
    .clone()
    .webp({ quality: webpQuality, effort })
    .toFile(outputWebp);

  await pipeline
    .clone()
    .avif({ quality: avifQuality, effort })
    .toFile(outputAvif);

  const [webpStats, avifStats] = await Promise.all([
    fs.stat(outputWebp),
    fs.stat(outputAvif),
  ]);

  console.log([
    `${path.relative(process.cwd(), inputPath)}: ${formatKb(sourceStats.size)}`,
    `  -> ${path.relative(process.cwd(), outputWebp)}: ${formatKb(webpStats.size)}`,
    `  -> ${path.relative(process.cwd(), outputAvif)}: ${formatKb(avifStats.size)}`,
  ].join('\n'));
}