import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable GZIP compression
  app.use(compression());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    
    // Set caching headers for static assets
    app.use(express.static(distPath, {
      maxAge: '1y',
      immutable: true,
      extensions: ['html'],
      setHeaders: (res, path) => {
        if (path.endsWith('.html')) {
          res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        }
      }
    }));

    // Custom route for pre-rendered blog posts
    app.get('/blog/:slug', (req, res, next) => {
      const slug = req.params.slug;
      console.log(`[Blog Route] Requested slug: ${slug}`);
      
      const htmlPathA = path.join(distPath, 'blog', `${slug}.html`);
      const htmlPathB = path.join(distPath, 'blog', slug, 'index.html');
      
      const existsA = fs.existsSync(htmlPathA);
      const existsB = fs.existsSync(htmlPathB);
      
      console.log(`[Blog Route] Checking Path A: ${htmlPathA} (Exists: ${existsA})`);
      console.log(`[Blog Route] Checking Path B: ${htmlPathB} (Exists: ${existsB})`);
      
      if (existsA) {
        console.log(`[Blog Route] Serving Path A`);
        res.sendFile(htmlPathA);
      } else if (existsB) {
        console.log(`[Blog Route] Serving Path B`);
        res.sendFile(htmlPathB);
      } else {
        console.log(`[Blog Route] No pre-rendered file found, falling back to SPA`);
        next();
      }
    });

    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

