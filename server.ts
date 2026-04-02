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

  if (process.env.NODE_ENV !== "production") {
    // Development mode with Vite
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    
    app.use(vite.middlewares);

    // Universal fallback middleware (no path string, avoids Express 5 wildcard issues)
    app.use(async (req, res, next) => {
      if (req.method !== 'GET') return next();
      
      // Let static assets fall through to 404
      if (req.path.includes('.') && !req.path.endsWith('.html')) {
        return next();
      }

      try {
        let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production mode
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // Universal fallback middleware for production
    app.use((req, res, next) => {
      if (req.method !== 'GET') return next();
      
      // Let static assets fall through to 404
      if (req.path.includes('.') && !req.path.endsWith('.html')) {
        return next();
      }
      
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
