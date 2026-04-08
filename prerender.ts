import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from './data/blogPosts.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.resolve(__dirname, 'dist/index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

function generateBlogPostHtml(post: any, lang = 'it') {
  const content = post.translations[lang] || post.translations['en'];
  
  // Replace title
  let html = template.replace(
    /<title>.*?<\/title>/,
    `<title>${content.title} | Luggage Deposit Rome</title>`
  );

  // Replace description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${content.excerpt}" />`
  );

  // Add Open Graph tags
  const ogTags = `
    <meta property="og:title" content="${content.title} | Luggage Deposit Rome" />
    <meta property="og:description" content="${content.excerpt}" />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="${post.image}" />
  `;
  html = html.replace('</head>', `${ogTags}\n</head>`);

  // Create the article HTML (basic structure for SEO)
  const articleHtml = `
    <div class="min-h-screen bg-gray-50 pt-24 pb-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article class="bg-white rounded-2xl shadow-sm overflow-hidden">
          <img src="${post.image}" alt="${content.title}" class="w-full h-[400px] object-cover" />
          <div class="p-8 sm:p-12">
            <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">${content.title}</h1>
            <div class="prose prose-lg prose-green max-w-none">
              ${content.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  `;

  // Replace the pre-rendered homepage shell with the article HTML
  html = html.replace(/<div id="root">[\s\S]*?<\/div>\s*<script/, `<div id="root">${articleHtml}</div>\n    <script`);

  return html;
}

// Generate for each post
for (const post of blogPosts) {
  // We'll pre-render the Italian version as default since the site is primarily Italian,
  // or we can just use Italian as it's the first translation.
  const html = generateBlogPostHtml(post, 'it');
  
  // Save to dist/blog/slug.html
  const dir = path.resolve(__dirname, `dist/blog`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.resolve(dir, `${post.slug}.html`), html);
  console.log(`Pre-rendered /blog/${post.slug}`);
}

// Also pre-render the /blog list page
const blogListHtml = template
  .replace(/<title>.*?<\/title>/, `<title>Blog | Luggage Deposit Rome</title>`)
  .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="Consigli di viaggio e guide per visitare Roma senza bagagli." />`)
  .replace(/<div id="root">[\s\S]*?<\/div>\s*<script/, `<div id="root"><div class="pt-24 pb-12"><div class="max-w-7xl mx-auto px-4"><h1 class="text-4xl font-bold mb-8">Blog</h1></div></div></div>\n    <script`);

const blogDir = path.resolve(__dirname, `dist/blog`);
fs.mkdirSync(blogDir, { recursive: true });
fs.writeFileSync(path.resolve(blogDir, 'index.html'), blogListHtml);
console.log(`Pre-rendered /blog`);

console.log('Prerendering complete.');
