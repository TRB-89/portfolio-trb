import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/TRB/.gemini/antigravity/brain/79265fd3-f4bd-46fb-8c25-569c8a04e00e';
const LOCAL_QA_DIR = './tests/qa-screenshots';

fs.mkdirSync(LOCAL_QA_DIR, { recursive: true });

async function capture() {
  console.log('Launching browser for Phase 09 QA screenshot capture...');
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

  // 1. 41-desktop-hero-liquidchrome.png
  console.log('1. Capturing 41-desktop-hero-liquidchrome.png...');
  await page.locator('#hero').screenshot({
    path: path.join(LOCAL_QA_DIR, '41-desktop-hero-liquidchrome.png')
  });

  // 2. 42-desktop-staggered-menu-open.png
  console.log('2. Capturing 42-desktop-staggered-menu-open.png...');
  const menuToggle = page.locator('button[aria-label="Open Navigation Menu"]');
  if (await menuToggle.isVisible()) {
    await menuToggle.click();
    await page.waitForTimeout(600);
    await page.screenshot({
      path: path.join(LOCAL_QA_DIR, '42-desktop-staggered-menu-open.png')
    });
    // Close menu
    const closeBtn = page.locator('button[aria-label="Close Navigation Menu"]');
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    } else {
      await page.keyboard.press('Escape');
    }
    await page.waitForTimeout(500);
  }

  // 3. 43-desktop-social-dock-interaction.png
  console.log('3. Capturing 43-desktop-social-dock-interaction.png...');
  const dock = page.locator('nav[aria-label="Quick Access Dock"]');
  if (await dock.isVisible()) {
    await dock.hover();
    await page.waitForTimeout(400);
    await dock.screenshot({
      path: path.join(LOCAL_QA_DIR, '43-desktop-social-dock-interaction.png')
    });
  }

  // 4. 44-desktop-about-lanyard-badge.png
  console.log('4. Capturing 44-desktop-about-lanyard-badge.png...');
  await page.locator('#about').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.locator('#about').screenshot({
    path: path.join(LOCAL_QA_DIR, '44-desktop-about-lanyard-badge.png')
  });

  // 5. 45-desktop-projects-flexcarousel-expanded.png
  console.log('5. Capturing 45-desktop-projects-flexcarousel-expanded.png...');
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const panel0 = page.locator('div[aria-label="Interactive Expanding Project Panels"] > div[role="button"]').first();
  await panel0.click();
  await page.waitForTimeout(600);
  await page.locator('#projects').screenshot({
    path: path.join(LOCAL_QA_DIR, '45-desktop-projects-flexcarousel-expanded.png')
  });

  // 6. 46-desktop-projects-catalogue-filter.png
  console.log('6. Capturing 46-desktop-projects-catalogue-filter.png...');
  const filterBtn = page.locator('div[aria-label="Project domain filters"] button').nth(1);
  if (await filterBtn.isVisible()) {
    await filterBtn.click();
    await page.waitForTimeout(400);
  }
  await page.locator('#projects').screenshot({
    path: path.join(LOCAL_QA_DIR, '46-desktop-projects-catalogue-filter.png')
  });
  // Reset filter
  const allFilter = page.locator('div[aria-label="Project domain filters"] button').first();
  if (await allFilter.isVisible()) {
    await allFilter.click();
    await page.waitForTimeout(300);
  }

  // 7. 47-desktop-casestudies-scrollstack.png
  console.log('7. Capturing 47-desktop-casestudies-scrollstack.png...');
  await page.locator('#case-studies').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.locator('#case-studies').screenshot({
    path: path.join(LOCAL_QA_DIR, '47-desktop-casestudies-scrollstack.png')
  });

  // 8. 48-desktop-technical-arsenal-magicbento.png
  console.log('8. Capturing 48-desktop-technical-arsenal-magicbento.png...');
  await page.locator('#tech-stack').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.locator('#tech-stack').screenshot({
    path: path.join(LOCAL_QA_DIR, '48-desktop-technical-arsenal-magicbento.png')
  });

  // 9. 49-desktop-logoloop-marquee.png
  console.log('9. Capturing 49-desktop-logoloop-marquee.png...');
  const logoLoop = page.locator('#tech-stack div[aria-label="Technology Marquee Strip"]');
  if (await logoLoop.isVisible()) {
    await logoLoop.screenshot({
      path: path.join(LOCAL_QA_DIR, '49-desktop-logoloop-marquee.png')
    });
  } else {
    await page.locator('#tech-stack').screenshot({
      path: path.join(LOCAL_QA_DIR, '49-desktop-logoloop-marquee.png')
    });
  }

  // 10. 50-desktop-milestones-countup-animatedlist.png
  console.log('10. Capturing 50-desktop-milestones-countup-animatedlist.png...');
  await page.locator('#achievements').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000); // Allow CountUp to settle
  await page.locator('#achievements').screenshot({
    path: path.join(LOCAL_QA_DIR, '50-desktop-milestones-countup-animatedlist.png')
  });

  // 11. 51-desktop-currentwork-roadmap.png
  console.log('11. Capturing 51-desktop-currentwork-roadmap.png...');
  await page.locator('#current-work').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.locator('#current-work').screenshot({
    path: path.join(LOCAL_QA_DIR, '51-desktop-currentwork-roadmap.png')
  });

  // 12. 52-desktop-contact-actions.png
  console.log('12. Capturing 52-desktop-contact-actions.png...');
  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.locator('#contact').screenshot({
    path: path.join(LOCAL_QA_DIR, '52-desktop-contact-actions.png')
  });

  // 13. 53-desktop-footer-colophon.png
  console.log('13. Capturing 53-desktop-footer-colophon.png...');
  await page.locator('footer[role="contentinfo"]').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.locator('footer[role="contentinfo"]').screenshot({
    path: path.join(LOCAL_QA_DIR, '53-desktop-footer-colophon.png')
  });

  // 14. 54-mobile-fullpage.png (Pixel 5 - 393x851)
  console.log('14. Capturing 54-mobile-fullpage.png...');
  const mobileContext = await browser.newContext({
    viewport: { width: 393, height: 851 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({
    path: path.join(LOCAL_QA_DIR, '54-mobile-fullpage.png'),
    fullPage: true
  });

  // 15. 55-desktop-reduced-motion.png
  console.log('15. Capturing 55-desktop-reduced-motion.png...');
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
    path: path.join(LOCAL_QA_DIR, '55-desktop-reduced-motion.png')
  });

  await browser.close();

  // Copy screenshots to Artifact Directory
  console.log('Copying screenshots to artifact directory...');
  const files = [
    '41-desktop-hero-liquidchrome.png',
    '42-desktop-staggered-menu-open.png',
    '43-desktop-social-dock-interaction.png',
    '44-desktop-about-lanyard-badge.png',
    '45-desktop-projects-flexcarousel-expanded.png',
    '46-desktop-projects-catalogue-filter.png',
    '47-desktop-casestudies-scrollstack.png',
    '48-desktop-technical-arsenal-magicbento.png',
    '49-desktop-logoloop-marquee.png',
    '50-desktop-milestones-countup-animatedlist.png',
    '51-desktop-currentwork-roadmap.png',
    '52-desktop-contact-actions.png',
    '53-desktop-footer-colophon.png',
    '54-mobile-fullpage.png',
    '55-desktop-reduced-motion.png'
  ];

  for (const file of files) {
    const src = path.join(LOCAL_QA_DIR, file);
    if (fs.existsSync(src)) {
      const dest = path.join(ARTIFACT_DIR, file);
      fs.copyFileSync(src, dest);
      console.log(`Copied ${file} -> Artifacts`);
    } else {
      console.warn(`File not found: ${src}`);
    }
  }
  console.log('Phase 09 QA screenshot capture completed successfully!');
}

capture().catch(console.error);
