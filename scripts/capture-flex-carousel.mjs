import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/TRB/.gemini/antigravity/brain/79265fd3-f4bd-46fb-8c25-569c8a04e00e';
const LOCAL_QA_DIR = './tests/qa-screenshots';

fs.mkdirSync(LOCAL_QA_DIR, { recursive: true });

async function capture() {
  console.log('Launching browser for Flex Carousel Liquid preset QA capture...');
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:4173/ ...');
  await page.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // Navigate to #projects
  const projectsSection = page.locator('#projects');
  await projectsSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  // Toggle to 3D Reel
  const reelBtn = page.locator('button:has-text("3D Reel")');
  await reelBtn.waitFor({ state: 'visible' });
  await reelBtn.click();
  console.log('Clicked 3D Reel toggle...');
  await page.waitForTimeout(2500);

  // Capture 1: Liquid Curated Reel
  const reelContainer = page.locator('div[aria-label="Interactive 3D OGL Flex Carousel Reel"]');
  await reelContainer.waitFor({ state: 'visible' });

  console.log('Capturing 60-desktop-flexcarousel-liquid-gallery.png...');
  await reelContainer.screenshot({
    path: path.join(LOCAL_QA_DIR, '60-desktop-flexcarousel-liquid-gallery.png')
  });

  // Capture 2: Switch to Initiatives (8)
  const initiativesBtn = page.locator('button:has-text("Initiatives (8)")');
  if (await initiativesBtn.isVisible()) {
    await initiativesBtn.click();
    console.log('Clicked Initiatives (8)...');
    await page.waitForTimeout(2000);

    console.log('Capturing 61-desktop-flexcarousel-liquid-initiatives.png...');
    await reelContainer.screenshot({
      path: path.join(LOCAL_QA_DIR, '61-desktop-flexcarousel-liquid-initiatives.png')
    });
  }

  // Switch back to Curated Reel (3) and simulate drag/tilt
  const curatedBtn = page.locator('button:has-text("Curated Reel (3)")');
  if (await curatedBtn.isVisible()) {
    await curatedBtn.click();
    await page.waitForTimeout(1500);
  }

  // Simulate mouse drag across the carousel
  const box = await reelContainer.boundingBox();
  if (box) {
    await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.5);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.5, { steps: 10 });
    await page.waitForTimeout(500);

    console.log('Capturing 62-desktop-flexcarousel-liquid-interaction.png...');
    await reelContainer.screenshot({
      path: path.join(LOCAL_QA_DIR, '62-desktop-flexcarousel-liquid-interaction.png')
    });
    await page.mouse.up();
  }

  await browser.close();

  // Copy to Artifact Directory
  const files = ['60-desktop-flexcarousel-liquid-gallery.png', '61-desktop-flexcarousel-liquid-initiatives.png', '62-desktop-flexcarousel-liquid-interaction.png'];
  for (const file of files) {
    const src = path.join(LOCAL_QA_DIR, file);
    if (fs.existsSync(src)) {
      const dest = path.join(ARTIFACT_DIR, file);
      fs.copyFileSync(src, dest);
      console.log(`Copied ${file} -> Artifact Directory`);
    }
  }
  console.log('Flex Carousel screenshot capture complete!');
}

capture().catch(console.error);
