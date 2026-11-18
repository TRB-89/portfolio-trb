import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/TRB/.gemini/antigravity/brain/79265fd3-f4bd-46fb-8c25-569c8a04e00e';
const LOCAL_QA_DIR = './tests/qa-screenshots';

fs.mkdirSync(LOCAL_QA_DIR, { recursive: true });

async function capture() {
  console.log('Launching browser for Phase 08 QA screenshot capture...');
  const browser = await chromium.launch({ headless: true });

  // 1. Desktop captures (1280x800)
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2
  });
  const page = await desktopContext.newPage();

  console.log('Navigating desktop page to http://localhost:4173/ ...');
  await page.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // Full page desktop
  console.log('Capturing desktop full page...');
  await page.screenshot({
    path: path.join(LOCAL_QA_DIR, '29-desktop-phase08-fullpage.png'),
    fullPage: true
  });

  // Hero section
  console.log('Capturing Hero section...');
  await page.locator('#hero').screenshot({
    path: path.join(LOCAL_QA_DIR, '31-desktop-phase08-hero.png')
  });

  // FlexCarousel showcase
  console.log('Capturing FlexCarousel...');
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('#projects').screenshot({
    path: path.join(LOCAL_QA_DIR, '32-desktop-phase08-flexcarousel.png')
  });

  // ScrollStack case studies
  console.log('Capturing ScrollStack...');
  await page.locator('#case-studies').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('#case-studies').screenshot({
    path: path.join(LOCAL_QA_DIR, '33-desktop-phase08-scrollstack.png')
  });

  // Technical Arsenal
  console.log('Capturing Tech Arsenal...');
  await page.locator('#tech-stack').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('#tech-stack').screenshot({
    path: path.join(LOCAL_QA_DIR, '34-desktop-phase08-techstack.png')
  });

  // Achievements
  console.log('Capturing Achievements...');
  await page.locator('#achievements').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000); // Allow CountUp to settle
  await page.locator('#achievements').screenshot({
    path: path.join(LOCAL_QA_DIR, '35-desktop-phase08-achievements.png')
  });

  // Currently Building / Roadmap
  console.log('Capturing Currently Building Roadmap...');
  await page.locator('#current-work').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('#current-work').screenshot({
    path: path.join(LOCAL_QA_DIR, '36-desktop-phase08-currentwork.png')
  });

  // Contact
  console.log('Capturing Contact...');
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('#contact').screenshot({
    path: path.join(LOCAL_QA_DIR, '37-desktop-phase08-contact.png')
  });

  // Footer
  console.log('Capturing Footer...');
  await page.locator('footer[role="contentinfo"]').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.locator('footer[role="contentinfo"]').screenshot({
    path: path.join(LOCAL_QA_DIR, '38-desktop-phase08-footer.png')
  });

  // 2. Reduced motion capture
  console.log('Capturing Reduced Motion experience...');
  const rmContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    reducedMotion: 'reduce',
    deviceScaleFactor: 2
  });
  const rmPage = await rmContext.newPage();
  await rmPage.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded' });
  await rmPage.waitForTimeout(1500);
  await rmPage.locator('#about').scrollIntoViewIfNeeded();
  await rmPage.screenshot({
    path: path.join(LOCAL_QA_DIR, '39-desktop-phase08-reduced-motion.png')
  });

  // 3. Mobile captures (Pixel 5 - 393x851)
  console.log('Capturing Mobile captures...');
  const mobileContext = await browser.newContext({
    viewport: { width: 393, height: 851 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(2000);

  // Full page mobile
  console.log('Capturing mobile full page...');
  await mobilePage.screenshot({
    path: path.join(LOCAL_QA_DIR, '30-mobile-phase08-fullpage.png'),
    fullPage: true
  });

  // Mobile Roadmap + Contact + Footer view
  console.log('Capturing mobile roadmap & contact...');
  await mobilePage.locator('#current-work').scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({
    path: path.join(LOCAL_QA_DIR, '40-mobile-phase08-currentwork-contact-footer.png')
  });

  await browser.close();

  // Copy screenshots to Artifact Directory
  console.log('Copying screenshots to artifact directory...');
  const files = fs.readdirSync(LOCAL_QA_DIR).filter((f) => f.startsWith('29-') || f.startsWith('3') || f.startsWith('40-'));
  for (const file of files) {
    const src = path.join(LOCAL_QA_DIR, file);
    const dest = path.join(ARTIFACT_DIR, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> Artifacts`);
  }
  console.log('QA screenshot capture completed successfully!');
}

capture().catch(console.error);
