/**
 * Prerender Script for NDC CONSEILS
 * Generates static HTML files for SEO crawlers
 * Run after `npm run build`: node scripts/prerender.js
 */

const fs = require('fs');
const path = require('path');

const DIST = path.resolve(__dirname, '..', 'dist');
const TEMPLATE = path.join(DIST, 'index.html');

const routes = [
  '/',
  '/services',
  '/services/conseil-fiscal',
  '/services/conseil-juridique',
  '/services/assistance-comptable',
  '/services/management',
  '/services/securisation-fonciere',
  '/services/gestion-projets',
  '/services/etude-dossier',
  '/about',
  '/gallery',
  '/contact',
  '/clients',
  '/news',
];

async function prerender() {
  if (!fs.existsSync(TEMPLATE)) {
    console.error('Build dist/index.html first: npm run build');
    process.exit(1);
  }

  const html = fs.readFileSync(TEMPLATE, 'utf-8');

  for (const route of routes) {
    const dir = path.join(DIST, route === '/' ? '' : route);
    fs.mkdirSync(dir, { recursive: true });

    const target = route === '/'
      ? path.join(DIST, 'index.html')
      : path.join(dir, 'index.html');

    // Inject canonical for each route
    const canonical = `https://ndcconseils.com${route === '/' ? '' : route}`;
    const rendered = html
      .replace('<!-- app-html -->', `<noscript>This page requires JavaScript. Visit <a href="${canonical}">${canonical}</a></noscript>`)
      .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`);

    fs.writeFileSync(target, rendered, 'utf-8');
    console.log(`Pre-rendered: ${route} -> ${target}`);
  }

  console.log(`\nDone! ${routes.length} pages pre-rendered.`);
}

prerender().catch(console.error);
