import fs from 'fs';
import path from 'path';

// This script imports your metadata and writes a sitemap.xml to the dist/ folder.
// Run after `vite build` (e.g. via a postbuild npm script).

const ROUTE_PATHS = [
  '/',
  '/about',
  '/3d',
  '/composition',
  '/dwelling',
  '/photography',
  '/printmaking'
];

const cwd = process.cwd();
const metadataPath = path.join(cwd, 'src', 'data', 'metadata.js');

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

function buildUrlSet(site) {
  return ROUTE_PATHS.map((routePath) => routeToUrl(site.url, routePath));
}

function sitemapXml(urls) {
  const now = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    )
    .join('\n')}\n</urlset>`;
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

run();
