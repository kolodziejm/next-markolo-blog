const sitemap = require('nextjs-sitemap-generator');  
const path = require('path');

sitemap({
  baseUrl: 'https://markolo.blog',
  ignoreIndexFiles: true,
  pagesDirectory: path.join(process.cwd(), 'out'),
  targetDirectory: path.join(process.cwd(), 'out'),
  ignoredExtensions: [
    'png',
    'jpg',
  ],
});