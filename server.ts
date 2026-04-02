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

  let vite: any;
  if (process.env.NODE_ENV !== "production") {
    // Development mode with Vite
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom", // Use custom to handle HTML serving manually
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: serve static assets
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
  }

  // Catch-all route to serve index.html
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      if (process.env.NODE_ENV !== "production" && vite) {
        // In development, read the root index.html and let Vite transform it (inject scripts, etc.)
        let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } else {
        // In production, serve the built index.html from dist/
        res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
      }
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
