import { test, expect } from '@playwright/test';

test.describe('Portfolio V2 — Phase 05 Interactive Flex Carousel Project Showcase', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('button.sm-toggle').waitFor({ state: 'attached' });
  });

  test('01. Projects section renders with correct section heading and showcase stage', async ({
    page
  }) => {
    const section = page.locator('section#projects');
    await expect(section).toBeVisible();

    await expect(section).toContainText('03 // SELECTED WORK');
    await expect(section.locator('h2')).toContainText('Engineered Deployments & Systems');
    await expect(section).toContainText('INTERACTIVE FLEX CAROUSEL SHOWCASE');

    const showcaseStage = section.locator(
      'div[aria-label="Flex Carousel Interactive Project Showcase"]'
    );
    await expect(showcaseStage).toBeVisible();
  });

  test('02. All 8 prioritized engineering initiatives are present in Flex Carousel panels', async ({
    page
  }) => {
    const panels = page.locator(
      'div[aria-label="Interactive Expanding Project Panels"] > div[role="button"]'
    );
    const count = await panels.count();
    expect(count).toBe(8);

    const expectedProjects = [
      'PARALLAX',
      'VORTEX',
      'VESPER',
      'ØMEN',
      'AURA — Mental Wellness',
      'GFG 2.0 REDLINE',
      'AGARAM',
      'ONE PLANET'
    ];

    for (const name of expectedProjects) {
      await expect(
        page.locator('div[aria-label="Interactive Expanding Project Panels"]').first()
      ).toContainText(name);
    }
  });

  test('03. Horizontal expanding panels mechanics on desktop', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop-only horizontal flex accordion testing');

    const panels = page.locator(
      'div[aria-label="Interactive Expanding Project Panels"] > div[role="button"]'
    );

    // Initial state: PARALLAX (panel 1) is expanded
    await expect(panels.nth(0)).toHaveAttribute('aria-expanded', 'true');
    await expect(panels.nth(1)).toHaveAttribute('aria-expanded', 'false');

    // Click on VORTEX (panel 2)
    await panels.nth(1).click();
    await expect(panels.nth(1)).toHaveAttribute('aria-expanded', 'true');
    await expect(panels.nth(0)).toHaveAttribute('aria-expanded', 'false');

    // Click on ØMEN (panel 4)
    await panels.nth(3).click();
    await expect(panels.nth(3)).toHaveAttribute('aria-expanded', 'true');
    await expect(panels.nth(1)).toHaveAttribute('aria-expanded', 'false');
  });

  test('04. Expanded panel presents complete engineering dossier', async ({ page }) => {
    const section = page.locator('section#projects');
    const panels = section.locator(
      'div[aria-label="Interactive Expanding Project Panels"] > div[role="button"]'
    );

    // Expand PARALLAX
    await panels.nth(0).click();
    const activePanel = panels.nth(0);

    // Technical categories and status
    await expect(activePanel).toContainText(/Geospatial Intelligence/i);
    await expect(activePanel).toContainText('RESEARCH');
    await expect(activePanel).toContainText('01 //');

    // Problem friction & Engineered solution
    await expect(activePanel).toContainText('01 // Problem Friction');
    await expect(activePanel).toContainText('02 // Engineered Solution');

    // Verified engineering highlights
    await expect(activePanel).toContainText('Verified Engineering Highlights');
    await expect(activePanel).toContainText('NASA Space Apps Challenge 2026');

    // Schematic visual with hardware verification tag
    const schematicImg = activePanel.locator('img[src*="parallax-cover.svg"]');
    await expect(schematicImg).toBeVisible();
    await expect(activePanel).toContainText('SYSTEM_SCHEMATIC_V2 // HARDWARE_VERIFIED');

    // Action links
    const repoLink = activePanel.locator('a[aria-label="PARALLAX GitHub Repository"]');
    await expect(repoLink).toBeVisible();
    await expect(repoLink).toHaveAttribute('href', 'https://github.com/aadeshmax/PARALLAX');
  });

  test('05. Explicit planned status for AGARAM and staged validation for VESPER', async ({
    page
  }) => {
    const panels = page.locator(
      'div[aria-label="Interactive Expanding Project Panels"] > div[role="button"]'
    );

    // Expand AGARAM (index 6, 7th project)
    await panels.nth(6).click();
    const agaramPanel = panels.nth(6);
    await expect(agaramPanel).toContainText('PLANNED');
    await expect(agaramPanel).toContainText('ROADMAP_SPECIFICATION // PLANNED_STAGE');
    await expect(agaramPanel).toContainText('Architectural roadmap and planned development phase');

    // Expand VESPER (index 2, 3rd project)
    await panels.nth(2).click();
    const vesperPanel = panels.nth(2);
    await expect(vesperPanel).toContainText('IN_PROGRESS');
    await expect(vesperPanel).toContainText('STAGED_ARCHITECTURE // UNDER_VALIDATION');
    await expect(vesperPanel).toContainText('Architecture specifications, capabilities, and performance metrics are withheld');
  });

  test('06. Keyboard navigation with arrow keys and Enter/Space', async ({ page }) => {
    const panels = page.locator(
      'div[aria-label="Interactive Expanding Project Panels"] > div[role="button"]'
    );

    // Focus panel 1 and press ArrowRight
    await panels.nth(0).focus();
    await page.keyboard.press('ArrowRight');
    await expect(panels.nth(1)).toHaveAttribute('aria-expanded', 'true');

    // Press ArrowRight again -> Panel 3 (VESPER)
    await page.keyboard.press('ArrowRight');
    await expect(panels.nth(2)).toHaveAttribute('aria-expanded', 'true');

    // Press ArrowLeft -> Panel 2 (VORTEX)
    await page.keyboard.press('ArrowLeft');
    await expect(panels.nth(1)).toHaveAttribute('aria-expanded', 'true');
  });

  test('07. View Mode switcher toggles 3D OGL Flex Carousel reel', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop view mode switch test');

    const showcaseStage = page.locator(
      'div[aria-label="Flex Carousel Interactive Project Showcase"]'
    );

    // Switch to 3D Reel mode
    const reelBtn = showcaseStage.locator('button:has-text("3D Reel")');
    await expect(reelBtn).toBeVisible();
    await reelBtn.click();

    // Verify 3D reel container is mounted
    const reelContainer = showcaseStage.locator(
      'div[aria-label="Interactive 3D OGL Flex Carousel Reel"], div[aria-label="Flex Carousel Static Overview"]'
    );
    await expect(reelContainer).toBeVisible();

    // Switch back to Dossier mode
    const dossierBtn = showcaseStage.locator('button:has-text("Dossier")');
    await dossierBtn.click();
    await expect(showcaseStage.locator('div[aria-label="Interactive 3D OGL Flex Carousel Reel"]')).toHaveCount(0);
  });

  test('08. Responsive stacked accordion layout on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const section = page.locator('section#projects');
    await section.scrollIntoViewIfNeeded();
    await expect(section).toBeVisible();

    const panels = section.locator(
      'div[aria-label="Interactive Expanding Project Panels"] > div[role="button"]'
    );

    // Tap on second panel on mobile
    await panels.nth(1).scrollIntoViewIfNeeded();
    await panels.nth(1).click({ force: true });
    await expect(panels.nth(1)).toHaveAttribute('aria-expanded', 'true');
    await expect(panels.nth(0)).toHaveAttribute('aria-expanded', 'false');

    // No horizontal scroll overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test('09. Secondary project catalogue filter buttons operate correctly', async ({ page }) => {
    const section = page.locator('section#projects');
    const filterBtn = section.locator('button:has-text("Geospatial")');
    await expect(filterBtn).toBeVisible();

    await filterBtn.click();
    const articles = section.locator('div.grid article');
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      await expect(articles.nth(i)).toContainText('Geospatial Intelligence');
    }
  });
});

test.describe('Portfolio V2 — Phase 05 Reduced Motion Support', () => {
  test.use({ reducedMotion: 'reduce' });

  test('10. Accessible static presentation rendered without motion animations', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('section#projects');
    await expect(section).toBeVisible();

    const panels = section.locator(
      'div[aria-label="Interactive Expanding Project Panels"] > div[role="button"]'
    );

    // Verify transition-none class is applied under reduced motion
    const firstPanel = panels.nth(0);
    await expect(firstPanel).toHaveClass(/transition-none/);

    // Panel switching works instantly without animation lag
    await panels.nth(1).click();
    await expect(panels.nth(1)).toHaveAttribute('aria-expanded', 'true');
    await expect(panels.nth(0)).toHaveAttribute('aria-expanded', 'false');
  });
});
