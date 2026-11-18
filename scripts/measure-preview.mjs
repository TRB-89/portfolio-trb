import { chromium } from '@playwright/test';

async function measure() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    consoleErrors.push(err.message);
  });

  const resources = [];
  page.on('response', async (response) => {
    try {
      const url = response.url();
      const status = response.status();
      const headers = response.headers();
      const contentLength = headers['content-length'] ? parseInt(headers['content-length'], 10) : 0;
      let bodyLength = 0;
      try {
        const buffer = await response.body();
        bodyLength = buffer.length;
      } catch {}
      resources.push({
        url,
        status,
        type: response.request().resourceType(),
        size: bodyLength || contentLength
      });
    } catch {}
  });

  console.log('Navigating to http://localhost:4173/ ...');
  await page.goto('http://localhost:4173/', { waitUntil: 'load' });
  await page.waitForTimeout(2000);

  const jsResources = resources.filter((r) => r.type === 'script');
  const cssResources = resources.filter((r) => r.type === 'stylesheet');
  const totalJsSize = jsResources.reduce((acc, r) => acc + r.size, 0);
  const totalCssSize = cssResources.reduce((acc, r) => acc + r.size, 0);

  console.log('--- PRODUCTION PREVIEW METRICS ---');
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  }
  console.log(`JavaScript Resources loaded: ${jsResources.length}`);
  jsResources.forEach((r) => {
    const filename = r.url.split('/').pop();
    console.log(`  - ${filename}: ${(r.size / 1024).toFixed(2)} KB`);
  });
  console.log(`Total Initial Transferred JS: ${(totalJsSize / 1024).toFixed(2)} KB`);
  console.log(`Total Initial Transferred CSS: ${(totalCssSize / 1024).toFixed(2)} KB`);

  // Check critical elements render
  const heroHeading = await page.locator('#hero h1').first().textContent();
  const aboutHeading = await page.locator('#about h2').first().textContent();
  const projectsHeading = await page.locator('#projects h2').first().textContent();
  const footerText = await page.locator('footer').first().textContent();

  console.log(`Hero H1: ${heroHeading?.trim()}`);
  console.log(`About H2: ${aboutHeading?.trim()}`);
  console.log(`Projects H2: ${projectsHeading?.trim()}`);
  console.log(`Footer has content: ${Boolean(footerText && footerText.length > 100)}`);

  await browser.close();
}

measure().catch(console.error);
