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

  // Create Vite server in middleware mode 
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom' // Manual HTML handling is more robust for routing
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  // Catch-all route for SPA fallback
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    // Skip if the request looks like a file (has an extension)
    // This allows Vite's middleware to handle static assets
    if (url.includes('.') && !url.endsWith('.html')) {
      return next();
    }

    try {
      // Always serve the root index.html for any other route
      let template = fs.readFileSync(
        path.resolve(process.cwd(), 'index.html'),
        'utf-8',
      );

      // Apply Vite HTML transforms (injects scripts, HMR, etc.)
      template = await vite.transformIndexHtml(url, template);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace
      if (vite) vite.ssrFixStacktrace(e as Error);
      console.error('SPA Fallback Error:', e);
      next(e);
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
