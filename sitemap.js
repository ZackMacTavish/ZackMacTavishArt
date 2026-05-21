import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// This script imports your metadata and writes a sitemap.xml to the dist/ folder.
// Run after `vite build` (e.g. via a postbuild npm script).

export const ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/3d', changefreq: 'monthly', priority: '0.8' },
  { path: '/composition', changefreq: 'monthly', priority: '0.8' },
  { path: '/dwelling', changefreq: 'monthly', priority: '0.8' },
  { path: '/photography', changefreq: 'monthly', priority: '0.8' },
  { path: '/printmaking', changefreq: 'monthly', priority: '0.8' }
];

// Map each route to a stable image URL (relative to siteUrl). The build step
// later replaces these with per-route og:image if a matching file exists in
// public/og/{slug}.{ext}; otherwise the default is used.
const ROUTE_IMAGE_DEFAULTS = {
  '/': '/og-default.png',
  '/about': '/og-default.png',
  '/3d': '/og-default.png',
  '/composition': '/og-default.png',
  '/dwelling': '/og-default.png',
  '/photography': '/og-default.png',
  '/printmaking': '/og-default.png',
};

const ROUTE_IMAGE_TITLES = {
  '/': 'Zack MacTavish Art & Design',
  '/about': 'About Zack MacTavish',
  '/3d': '3D & Graffiti — Zack MacTavish',
  '/composition': 'Composition — Zack MacTavish',
  '/dwelling': 'Dwelling — Zack MacTavish',
  '/photography': 'Photography — Zack MacTavish',
  '/printmaking': 'Printmaking — Zack MacTavish',
};

const cwd = process.cwd();
const metadataPath = path.join(cwd, 'src', 'data', 'metadata.js');
const publicOgDir = path.join(cwd, 'public', 'og');

async function loadMetadata() {
  // Use dynamic import so this works with ESM package.json (your project uses type: module)
  const fileUrl = `file://${metadataPath}`;
  const mod = await import(fileUrl);
  // Try named exports first then default
  const site = mod.site || (mod.default && mod.default.site);
  const projects = mod.projects || (mod.default && mod.default.projects);
  return { site, projects };
}

function routeToUrl(siteUrl, routePath) {
  const baseUrl = siteUrl.replace(/\/$/, '');
  if (routePath === '/') return `${baseUrl}/`;
  return `${baseUrl}${routePath}`;
}

// Resolve a route-specific og:image. If public/og/{slug}.{jpg|png|webp} exists
// at the project root, use that; otherwise fall back to the global default.
function resolveRouteImage(siteUrl, routePath) {
  const slug = routePath === '/' ? 'home' : routePath.replace(/^\//, '');
  const candidates = ['jpg', 'jpeg', 'png', 'webp'];
  for (const ext of candidates) {
    const filename = `${slug}.${ext}`;
    const fullPath = path.join(publicOgDir, filename);
    if (fs.existsSync(fullPath)) {
      const baseUrl = siteUrl.replace(/\/$/, '');
      return `${baseUrl}/og/${filename}`;
    }
  }
  const baseUrl = siteUrl.replace(/\/$/, '');
  return `${baseUrl}${ROUTE_IMAGE_DEFAULTS[routePath] || '/og-default.png'}`;
}

function buildUrlSet(site) {
  return ROUTES.map(({ path: routePath, changefreq, priority }) => ({
    loc: routeToUrl(site.url, routePath),
    changefreq,
    priority,
    image: {
      loc: resolveRouteImage(site.url, routePath),
      title: ROUTE_IMAGE_TITLES[routePath] || 'Zack MacTavish Art & Design',
    },
  }));
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function sitemapXml(urls) {
  const now = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls
  .map(({ loc, changefreq, priority, image }) => {
    const imageBlock = image
      ? `\n    <image:image>\n      <image:loc>${escapeXml(image.loc)}</image:loc>\n      <image:title>${escapeXml(image.title)}</image:title>\n    </image:image>`
      : '';
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>${imageBlock}\n  </url>`;
  })
  .join('\n')}
</urlset>`;
}

async function run() {
  try {
    const { site } = await loadMetadata();
    if (!site || !site.url) {
      console.error('site.url not found in metadata.js. Aborting sitemap generation.');
      process.exit(1);
    }
    const urls = buildUrlSet(site);
    const xml = sitemapXml(urls);
    const outDir = path.join(cwd, 'dist');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'sitemap.xml');
    fs.writeFileSync(outPath, xml, 'utf8');
    console.log(`Sitemap written to ${outPath} (${urls.length} URLs)`);
  } catch (err) {
    console.error('Error generating sitemap:', err);
    process.exit(1);
  }
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isDirectRun) {
  run();
}
