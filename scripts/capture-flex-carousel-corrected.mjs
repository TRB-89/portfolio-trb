import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/TRB/.gemini/antigravity/brain/79265fd3-f4bd-46fb-8c25-569c8a04e00e';
const LOCAL_QA_DIR = './tests/qa-screenshots';

fs.mkdirSync(LOCAL_QA_DIR, { recursive: true });

async function capture() {
  console.log('Launching browser for corrected FlexCarousel QA capture...');
  const browser = await chromium.launch({ headless: true });

  // 1. Desktop context
  const context = await browser.newContext({
    viewport: { width: 1280, height: 950 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:4173/ ...');
  await page.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);

  const projectsSection = page.locator('#projects');
  await projectsSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);

  const showcaseStage = page.locator('div[aria-label="Flex Carousel Interactive Project Showcase"]');
  await showcaseStage.waitFor({ state: 'visible' });

  // Capture 1: Desktop carousel default state
  console.log('Capturing 63-desktop-flexcarousel-default.png...');
  await showcaseStage.screenshot({
    path: path.join(LOCAL_QA_DIR, '63-desktop-flexcarousel-default.png')
  });

  // Capture 2: Desktop dragging or transition state
  const reelContainer = page.locator('div[aria-label="Interactive 3D OGL Flex Carousel Reel"]');
  const box = await reelContainer.boundingBox();
  if (box) {
    console.log('Simulating drag across ribbon...');
    await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.5);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.35, box.y + box.height * 0.5, { steps: 12 });
    await page.waitForTimeout(400);

    console.log('Capturing 64-desktop-flexcarousel-dragging.png...');
    await showcaseStage.screenshot({
      path: path.join(LOCAL_QA_DIR, '64-desktop-flexcarousel-dragging.png')
    });
    await page.mouse.up();
    await page.waitForTimeout(1000);
  }

  // Capture 3: Focused project state (press Enter on focused carousel region)
  const carouselRegion = page.locator('div[role="region"][aria-label="Image carousel"]');
  if (await carouselRegion.isVisible()) {
    await carouselRegion.focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1200);

    console.log('Capturing 65-desktop-flexcarousel-focused.png...');
    await showcaseStage.screenshot({
      path: path.join(LOCAL_QA_DIR, '65-desktop-flexcarousel-focused.png')
    });

    // Dismiss focus using Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(800);
  }

  // 2. Mobile Context (375x667)
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(2000);

  const mobileProjects = mobilePage.locator('#projects');
  await mobileProjects.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(1200);

  const mobileShowcase = mobilePage.locator('div[aria-label="Flex Carousel Interactive Project Showcase"]');
  console.log('Capturing 66-mobile-flexcarousel.png...');
  await mobileShowcase.screenshot({
    path: path.join(LOCAL_QA_DIR, '66-mobile-flexcarousel.png')
  });

  await browser.close();

  // Copy to Artifact Directory
  const files = [
    '63-desktop-flexcarousel-default.png',
    '64-desktop-flexcarousel-dragging.png',
    '65-desktop-flexcarousel-focused.png',
    '66-mobile-flexcarousel.png'
  ];
  for (const file of files) {
    const src = path.join(LOCAL_QA_DIR, file);
    if (fs.existsSync(src)) {
      const dest = path.join(ARTIFACT_DIR, file);
      fs.copyFileSync(src, dest);
      console.log(`Copied ${file} -> Artifact Directory`);
    }
  }
  console.log('Flex Carousel corrected screenshot capture complete!');
}

capture().catch(console.error);
