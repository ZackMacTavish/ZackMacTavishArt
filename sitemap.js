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
  return ROUTES.map(({ path: routePath, changefreq, priority }) => ({
    loc: routeToUrl(site.url, routePath),
    changefreq,
    priority,
  }));
}

function sitemapXml(urls) {
  const now = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      ({ loc, changefreq, priority }) =>
        `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
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

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isDirectRun) {
  run();
}
