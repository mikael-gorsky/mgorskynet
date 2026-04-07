/**
 * Post-build pre-rendering script.
 *
 * Spins up a local static server on the dist/ directory, visits every route
 * with Puppeteer, waits for React to finish rendering, and writes the fully
 * rendered HTML back to dist/ so crawlers get real content without executing JS.
 */

import { createServer } from 'http';
import { readFile, mkdir, writeFile } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4173;

const ROUTES = [
  '/',
  '/bio',
  '/teaching/leaders-and-students',
  '/teaching/agentic-coding',
  '/teaching/change-management',
  '/probono/ai-for-seniors',
  '/probono/judging-startups',
  '/probono/acvc-group',
  '/research/academic',
  '/theaipravda',
  '/aichronicles',
  '/aichronicles/digest',
  '/aichronicles/rolodex',
  '/aichronicles/book',
  '/terms',
];

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
  '.woff2': 'font/woff2',
};

/* ---------- tiny static server ---------- */

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url);

      try {
        const data = await readFile(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
      } catch {
        // SPA fallback — serve index.html for any route
        try {
          const data = await readFile(join(DIST, 'index.html'));
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        } catch {
          res.writeHead(404);
          res.end('Not found');
        }
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

/* ---------- pre-render ---------- */

async function prerender() {
  console.log('Pre-rendering: starting local server...');
  const server = await startServer();

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    for (const route of ROUTES) {
      const url = `http://localhost:${PORT}${route}`;
      const page = await browser.newPage();

      // Block external requests (fonts, analytics) for speed
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const reqUrl = req.url();
        if (
          reqUrl.startsWith('http://localhost') ||
          reqUrl.startsWith('data:')
        ) {
          req.continue();
        } else {
          req.abort();
        }
      });

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });

      // Wait a bit for any remaining React renders
      await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));

      const html = await page.content();
      await page.close();

      // Determine output path
      const outDir = route === '/'
        ? DIST
        : join(DIST, route);
      const outFile = route === '/'
        ? join(DIST, 'index.html')
        : join(outDir, 'index.html');

      await mkdir(outDir, { recursive: true });
      await writeFile(outFile, html, 'utf-8');

      console.log(`  ✓ ${route}`);
    }
  } finally {
    if (browser) await browser.close();
    server.close();
  }

  console.log(`Pre-rendered ${ROUTES.length} routes.`);
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  // Don't fail the build — the SPA still works without pre-rendering
  process.exit(0);
});
