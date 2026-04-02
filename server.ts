import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Simple health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom' // Manual handling is more predictable in this environment
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  // Catch-all route for SPA fallback with Express 5 compatibility
  app.get('*all', async (req, res, next) => {
    const url = req.originalUrl;

    // Skip if the request looks like a static asset
    if (url.includes('.') && !url.endsWith('.html')) {
      return next();
    }

    try {
      // Read index.html
      let template = fs.readFileSync(
        path.resolve(process.cwd(), 'index.html'),
        'utf-8',
      );

      // Apply Vite HTML transforms
      template = await vite.transformIndexHtml(url, template);

      // Serve the transformed HTML
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
