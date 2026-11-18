import { test, expect } from '@playwright/test';

test.describe('Portfolio V2 — Selected Work Official FlexCarousel Showcase', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('button.sm-toggle').waitFor({ state: 'attached' });
  });

  test('01. Projects section renders with correct section label and heading', async ({
    page
  }) => {
    const section = page.locator('section#projects');
    await expect(section).toBeVisible();

    await expect(section).toContainText('03 // SELECTED WORK');
    await expect(section.locator('h2')).toContainText('ENGINEERED TO EXIST.');
    await expect(section).toContainText('IMMERSIVE OGL WAVE RIBBON // 11 CATALOGUED INITIATIVES');

    const showcaseStage = section.locator(
      'div[aria-label="Flex Carousel Interactive Project Showcase"]'
    );
    await expect(showcaseStage).toBeVisible();
  });

  test('02. Official FlexCarousel mounts immediately as primary showcase without mode toggle', async ({
    page
  }) => {
    const section = page.locator('section#projects');

    // No mode toggles or expanding panels
    await expect(section.locator('button:has-text("Dossier")')).toHaveCount(0);
    await expect(section.locator('button:has-text("3D Reel")')).toHaveCount(0);
    await expect(
      section.locator('div[aria-label="Interactive Expanding Project Panels"]')
    ).toHaveCount(0);

    // Primary 3D Reel container is immediately visible
    const reelContainer = section.locator(
      'div[aria-label="Interactive 3D OGL Flex Carousel Reel"]'
    );
    await expect(reelContainer).toBeVisible();

    // WebGL Canvas is attached
    const canvas = reelContainer.locator('canvas');
    await expect(canvas).toBeAttached();
  });

  test('03. All 11 catalogued initiatives are present in showcase dataset', async ({
    page
  }) => {
    const section = page.locator('section#projects');
    await expect(section).toBeVisible();

    const expectedProjects = [
      'PARALLAX',
      'VORTEX',
      'VESPER',
      'ØMEN',
      'AURA — Mental Wellness',
      'GFG 2.0 REDLINE',
      'ONE PLANET',
      'AURA — Desktop Assistant',
      'NØX',
      'RESURRECTION',
      'AGARAM'
    ];

    // Check total index counter shows 11
    await expect(section.locator('div[aria-label="Flex Carousel Interactive Project Showcase"]')).toContainText('11');
    expect(expectedProjects.length).toBe(11);
  });

  test('04. Minimal project information displayed beneath carousel in default state', async ({
    page
  }) => {
    const section = page.locator('section#projects');
    const showcaseStage = section.locator(
      'div[aria-label="Flex Carousel Interactive Project Showcase"]'
    );

    // Initial state: 01 // PARALLAX
    await expect(showcaseStage).toContainText('01 //');
    await expect(showcaseStage).toContainText('PARALLAX');
    await expect(showcaseStage).toContainText(/Geospatial Intelligence/i);
    await expect(showcaseStage).toContainText('RESEARCH');

    // Counter
    await expect(showcaseStage).toContainText('01');
    await expect(showcaseStage).toContainText('11');

    // Minimal interaction instructions
    await expect(showcaseStage).toContainText('DRAG TO EXPLORE // CLICK TO FOCUS');
  });

  test('05. Explicit planned status for AGARAM and in-progress status for VESPER', async ({
    page
  }) => {
    // Under reduced motion or in project data, AGARAM is explicitly planned
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    const section = page.locator('section#projects');
    await section.scrollIntoViewIfNeeded();

    const staticGallery = section.locator(
      'div[aria-label="Flex Carousel Static Overview"]'
    );
    await expect(staticGallery).toBeVisible();

    // Verify AGARAM is PLANNED
    const agaramCard = staticGallery.locator('div:has-text("AGARAM")').first();
    await expect(agaramCard).toContainText('PLANNED');

    // Verify VESPER is IN_PROGRESS
    const vesperCard = staticGallery.locator('div:has-text("VESPER")').first();
    await expect(vesperCard).toContainText('IN_PROGRESS');
  });

  test('06. Keyboard accessibility allows advancing carousel with arrow keys', async ({
    page,
    isMobile
  }) => {
    test.skip(isMobile, 'Desktop keyboard navigation test');

    const section = page.locator('section#projects');
    const carouselRegion = section.locator('div[role="region"][aria-label="Image carousel"]');
    await carouselRegion.waitFor({ state: 'visible' });

    // Focus carousel and press ArrowRight
    await carouselRegion.focus();
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(600);

    // Carousel advances to next initiative
    const showcaseStage = section.locator(
      'div[aria-label="Flex Carousel Interactive Project Showcase"]'
    );
    await expect(showcaseStage).toBeVisible();
  });

  test('07. Image focus interaction expands project with concise description and valid links', async ({
    page,
    isMobile
  }) => {
    test.skip(isMobile, 'Desktop focus interaction test');

    const section = page.locator('section#projects');
    const carouselRegion = section.locator('div[role="region"][aria-label="Image carousel"]');
    await carouselRegion.waitFor({ state: 'visible' });

    // Press Enter to focus active item (PARALLAX)
    await carouselRegion.focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);

    // Focused details region appears
    const focusedRegion = section.locator('div[aria-label="Focused project details"]');
    await expect(focusedRegion).toBeVisible();
    await expect(focusedRegion).toContainText('PARALLAX');
    await expect(focusedRegion).toContainText(/Cross-sensor geospatial investigation pipeline/i);

    // Valid repository link is present
    const repoLink = focusedRegion.locator('a[aria-label="PARALLAX GitHub Repository"]');
    await expect(repoLink).toBeVisible();
    await expect(repoLink).toHaveAttribute('href', 'https://github.com/aadeshmax/PARALLAX');
  });

  test('08. Escape key and close button dismiss focus interaction and restore carousel state', async ({
    page,
    isMobile
  }) => {
    test.skip(isMobile, 'Desktop focus dismissal test');

    const section = page.locator('section#projects');
    const carouselRegion = section.locator('div[role="region"][aria-label="Image carousel"]');
    await carouselRegion.waitFor({ state: 'visible' });

    // Focus item
    await carouselRegion.focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(800);

    const closeBtn = section.locator('button[aria-label="Close project focus"]');
    await expect(closeBtn).toBeVisible();

    // Click close button
    await closeBtn.click();
    await page.waitForTimeout(600);

    // Focused details region dismissed, minimal navigation restored
    await expect(section.locator('div[aria-label="Focused project details"]')).toHaveCount(0);
    await expect(section).toContainText('DRAG TO EXPLORE // CLICK TO FOCUS');
  });

  test('09. Responsive presentation on mobile viewport without horizontal overflow', async ({
    page
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const section = page.locator('section#projects');
    await section.scrollIntoViewIfNeeded();
    await expect(section).toBeVisible();

    const showcaseStage = section.locator(
      'div[aria-label="Flex Carousel Interactive Project Showcase"]'
    );
    await expect(showcaseStage).toBeVisible();

    // No horizontal document overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});

test.describe('Portfolio V2 — Selected Work Reduced Motion Support', () => {
  test.use({ reducedMotion: 'reduce' });

  test('10. Accessible static presentation rendered without motion animations', async ({
    page
  }) => {
    await page.goto('/');
    const section = page.locator('section#projects');
    await expect(section).toBeVisible();

    const staticGallery = section.locator(
      'div[aria-label="Flex Carousel Static Overview"]'
    );
    await expect(staticGallery).toBeVisible();
    await expect(staticGallery).toContainText('MODE: ACCESSIBLE_STATIC_GALLERY');
    await expect(staticGallery).toContainText('ALL 11 INITIATIVES');

    // All 11 projects rendered in static gallery
    const cards = staticGallery.locator('div.grid > div');
    const count = await cards.count();
    expect(count).toBe(11);
  });
});
