const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const sites = [
  { url: 'https://tyraapp.vercel.app/', file: 'tyra-app.png' },
  { url: 'https://tyra-transfer.vercel.app/', file: 'tyra-transfer.png' },
  { url: 'https://tyra-convert.vercel.app/', file: 'tyra-convert.png' },
];

const outDir = path.join('public', 'screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  for (const site of sites) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1280, height: 800 });
    console.log('Visiting ' + site.url);
    await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2500);
    const outPath = path.join(outDir, site.file);
    await page.screenshot({ path: outPath });
    console.log('Saved: ' + outPath);
    await page.close();
  }
  await browser.close();
  console.log('Done!');
})();
