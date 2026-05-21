#!/usr/bin/env node
/**
 * Generate per-route social-sharing (Open Graph / Twitter) images.
 *
 * Each output is exactly 1200×630, encoded as a high-quality progressive JPEG
 * (mozjpeg) so it satisfies the spec / size limits for every major platform:
 *   - Facebook / Meta     1200×630, < 8 MB, JPG or PNG
 *   - LinkedIn            1200×627, < 5 MB, JPG or PNG
 *   - X / Twitter         1200×628 (summary_large_image), < 5 MB
 *   - Microsoft Teams     uses Open Graph; same 1200×630 works
 *   - Slack / Discord     Open Graph; same 1200×630 works
 *   - iMessage / WhatsApp Open Graph; same 1200×630 works
 *
 * Source images live in src/assets/ ; outputs are written to public/og/ where
 * they ship as static, hashed-deploy-stable URLs (https://zackmactavish.com/og/{slug}.jpg).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src', 'assets');
const OUT = path.join(ROOT, 'public', 'og');

// Per-route source image + alt text. The alt is what surfaces in social
// previews and assistive tech.
const ROUTES = [
  {
    slug: 'home',
    source: 'Composition-BackCover-Pt.2-01.jpg',
    alt: 'Zack MacTavish — multidisciplinary artist portfolio cover image.',
  },
  {
    slug: 'about',
    source: 'Me.jpeg',
    alt: 'Portrait of artist Zack MacTavish.',
    // Portraits look better with the subject biased toward the top.
    position: 'top',
  },
  {
    slug: '3d',
    source: 'House—Mash.jpg',
    alt: '3D rendered house composition from Zack MacTavish — 3D & Graffiti work.',
  },
  {
    slug: 'composition',
    source: 'Composition-BackCover-Pt.2-01.jpg',
    alt: 'Back cover composition piece from Zack MacTavish — Composition series.',
  },
  {
    slug: 'dwelling',
    source: 'CapeHouseLg.jpg',
    alt: 'Cape house painting from Zack MacTavish — Dwelling series.',
  },
  {
    slug: 'photography',
    source: 'Aquarium.jpg',
    alt: 'Aquarium photograph by Zack MacTavish — Photography series.',
  },
  {
    slug: 'printmaking',
    source: '52.jpg',
    alt: 'Print from Zack MacTavish — Printmaking series.',
  },
];

const TARGET_WIDTH = 1200;
const TARGET_HEIGHT = 630;
// Quality 82 keeps every output well under 300KB while staying visually clean.
const JPEG_OPTIONS = {
  quality: 82,
  mozjpeg: true,
  chromaSubsampling: '4:4:4',
  progressive: true,
};

function ensureOutDir() {
  fs.mkdirSync(OUT, { recursive: true });
}

async function renderRoute(route) {
  const inputPath = path.join(SRC, route.source);
  if (!fs.existsSync(inputPath)) {
    console.warn(`[og] SKIP ${route.slug}: missing source ${route.source}`);
    return null;
  }
  const outputPath = path.join(OUT, `${route.slug}.jpg`);
  await sharp(inputPath)
    .resize(TARGET_WIDTH, TARGET_HEIGHT, {
      fit: 'cover',
      position: route.position || 'attention',
    })
    .jpeg(JPEG_OPTIONS)
    .toFile(outputPath);
  const size = fs.statSync(outputPath).size;
  console.log(
    `[og] ${route.slug.padEnd(12)} -> ${path.relative(ROOT, outputPath)}  ${(size / 1024).toFixed(1)} KB`,
  );
  return { slug: route.slug, alt: route.alt, bytes: size };
}

async function run() {
  ensureOutDir();
  const results = [];
  for (const route of ROUTES) {
    const result = await renderRoute(route);
    if (result) results.push(result);
  }

  // Persist a manifest with alt text so the prerender step can read it back.
  const manifest = Object.fromEntries(
    results.map((r) => [r.slug, { file: `${r.slug}.jpg`, alt: ROUTES.find((x) => x.slug === r.slug).alt }]),
  );
  fs.writeFileSync(path.join(OUT, 'og-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`[og] wrote ${path.relative(ROOT, path.join(OUT, 'og-manifest.json'))}`);
}

run().catch((err) => {
  console.error('[og] failed:', err);
  process.exit(1);
});
