import fs from 'fs';
import path from 'path';
import { ROUTES } from '../sitemap.js';

const cwd = process.cwd();
const distDir = path.join(cwd, 'dist');
const indexPath = path.join(distDir, 'index.html');

const ROUTE_METADATA = {
  '/': {
    title: 'Zack MacTavish Art & Design',
    description: 'Portfolio home showcasing painting, printmaking, photography, collage, design, and 3D works by Zack MacTavish.',
  },
  '/about': {
    title: 'About | Zack MacTavish Art & Design',
    description: 'About Zack MacTavish, a Philadelphia-based artist and product designer working across fine art, design, and visual storytelling.',
  },
  '/3d': {
    title: '3D & Graffiti | Zack MacTavish Art & Design',
    description: 'Graffiti roots, Rhino 3D renders, murals, and large-scale visual experiments spanning Chicago, Brooklyn, Denver, and beyond.',
  },
  '/composition': {
    title: 'Composition | Zack MacTavish Art & Design',
    description: "Composition is Zack MacTavish's first solo show, using the composition notebook as a metaphor for self-reflection through paintings, photographs, collages, rugs, and a self-published book made from 2019 to 2021.",
  },
  '/dwelling': {
    title: 'Dwelling | Zack MacTavish Art & Design',
    description: 'Dwelling is a series of quilts, collages, and mixed media works exploring houses, memories, and storytelling.',
  },
  '/photography': {
    title: 'Photography | Zack MacTavish Art & Design',
    description: 'A selection of film photographs and polaroids from Hawaii, New York, Portland, and other places observed through travel and daily life.',
  },
  '/printmaking': {
    title: 'Printmaking | Zack MacTavish Art & Design',
    description: 'Screen printing and mixed media works, including collaborations with Olivia Zita Smith and CMYK experiments.',
  },
};

const AUTHOR = {
  '@type': 'Person',
  name: 'Zack MacTavish',
  alternateName: ['Zachary MacTavish', 'Zack MacTavish Art', 'Zachary MacTavish Art'],
  sameAs: [
    'https://dribbble.com/Zmactavish',
    'https://www.instagram.com/zackmichaelmactavish',
    'https://www.linkedin.com/in/zacharymactavish/',
    'https://github.com/ZackMacTavish',
    'https://medium.com/@zmactavish',
  ],
};

function buildJsonLd(routePath, url) {
  if (routePath === '/') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zack MacTavish Art & Design',
      url,
      author: AUTHOR,
    };
  }

  if (routePath === '/about') {
    return {
      '@context': 'https://schema.org',
      ...AUTHOR,
      url,
    };
  }

  const names = {
    '/3d': '3D & Graffiti Series',
    '/composition': 'Composition Series',
    '/dwelling': 'Dwelling Series',
    '/photography': 'Photography Series',
    '/printmaking': 'Printmaking Series',
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: names[routePath] || 'Zack MacTavish Art & Design',
    url,
    author: AUTHOR,
  };
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceOrInsert(html, pattern, replacement) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace('</head>', `    ${replacement}\n  </head>`);
}

function replaceOrInsertJsonLd(html, jsonLdObject) {
  const jsonLd = JSON.stringify(jsonLdObject);
  const script = `<script type="application/ld+json">${jsonLd}</script>`;

  if (/<script type="application\/ld\+json">[\s\S]*?<\/script>/.test(html)) {
    return html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, script);
  }

  return html.replace('</head>', `    ${script}\n  </head>`);
}

function applyRouteMetadata(html, siteUrl, routePath) {
  const metadata = ROUTE_METADATA[routePath] || ROUTE_METADATA['/'];
  const url = routePath === '/' ? `${siteUrl.replace(/\/$/, '')}/` : `${siteUrl.replace(/\/$/, '')}${routePath}`;
  const title = escapeHtml(metadata.title);
  const description = escapeHtml(metadata.description);
  const canonical = escapeHtml(url);
  const jsonLd = buildJsonLd(routePath, url);

  let nextHtml = replaceOrInsert(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  nextHtml = replaceOrInsert(nextHtml, /<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`);
  nextHtml = replaceOrInsert(nextHtml, /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`);
  nextHtml = replaceOrInsert(nextHtml, /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`);
  nextHtml = replaceOrInsert(nextHtml, /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`);
  nextHtml = replaceOrInsert(nextHtml, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`);
  nextHtml = replaceOrInsert(nextHtml, /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`);
  nextHtml = replaceOrInsert(nextHtml, /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${description}" />`);
  nextHtml = replaceOrInsertJsonLd(nextHtml, jsonLd);

  return nextHtml;
}

function createRoutePages() {
  if (!fs.existsSync(indexPath)) {
    throw new Error(`Build output not found at ${indexPath}`);
  }

  const html = fs.readFileSync(indexPath, 'utf8');
  const siteUrl = 'https://zackmactavish.com';

  fs.writeFileSync(indexPath, applyRouteMetadata(html, siteUrl, '/'), 'utf8');

  ROUTES.filter(({ path: routePath }) => routePath !== '/').forEach(({ path: routePath }) => {
    const routeDir = path.join(distDir, routePath.replace(/^\//, ''));
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), applyRouteMetadata(html, siteUrl, routePath), 'utf8');
  });

  console.log(`Route entry pages written for ${ROUTES.length - 1} paths`);
}

createRoutePages();