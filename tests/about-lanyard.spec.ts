import { test, expect } from '@playwright/test';

test.describe('Portfolio V2 — Phase 04 About & 3D Lanyard Identity', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('button.sm-toggle').waitFor({ state: 'attached' });
  });

  test('01. About section renders with correct editorial heading and positioning', async ({
    page
  }) => {
    const about = page.locator('section#about');
    await expect(about).toBeVisible();

    // Section header and eyebrow
    await expect(about).toContainText('BIOGRAPHY & INTELLECTUAL FRAMEWORK');
    await expect(about.locator('h2.text-display-lg')).toContainText(
      'Systems Mindset. Verifiable Engineering.'
    );
    await expect(about).toContainText(
      'CSBS UNDERGRADUATE // COMPUTATIONAL SYSTEMS & INDUSTRIAL DESIGN'
    );
  });

  test('02. React Bits Scroll Reveal mounts on lead biography statement', async ({ page }) => {
    const about = page.locator('section#about');
    const scrollReveal = about.locator('h2.scroll-reveal');
    await expect(scrollReveal).toBeAttached();

    // Text content contains lead statement via aria-label or inner text
    const ariaLabel = await scrollReveal.getAttribute('aria-label');
    expect(ariaLabel).toContain(
      'Architecting software at the convergence of accelerated numerical computation'
    );
  });

  test('03. Biography narrative and 4 operating principles are authentically rendered', async ({
    page
  }) => {
    const about = page.locator('section#about');

    // Bio narrative paragraphs
    await expect(about).toContainText('Rajalakshmi Institute of Technology');
    await expect(about).toContainText('artificial intelligence');
    await expect(about).toContainText('GPU-accelerated sparse matrix kernels');

    // 4 Operating Principles
    await expect(about).toContainText('Operating Principles');
    await expect(about).toContainText('01');
    await expect(about).toContainText('02');
    await expect(about).toContainText('03');
    await expect(about).toContainText('04');
  });

  test('04. Academic trajectory card renders genuine credentials', async ({ page }) => {
    const about = page.locator('section#about');
    await expect(about).toContainText('Academic Trajectory');
    await expect(about).toContainText('Computer Science and Business Systems');
    await expect(about).toContainText('Rajalakshmi Institute of Technology');
    await expect(about).toContainText('Academic Record & Enrollment Authenticated');
  });

  test('05. Lanyard identity badge container is mounted with Three.js physics node', async ({
    page
  }) => {
    const about = page.locator('section#about');
    const lanyardContainer = about.locator(
      'div[aria-label="Interactive 3D Lanyard Identity Badge"]'
    );
    await expect(lanyardContainer).toBeVisible();

    await expect(about).toContainText('3D_IDENTITY_NODE');
    await expect(about).toContainText('THREE_JS // VERLET_PHYSICS');
  });

  test('06. Interactive 3D Canvas initializes on desktop WebGL', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop-only 3D canvas verification');

    const about = page.locator('section#about');
    await about.scrollIntoViewIfNeeded();

    const lanyardContainer = about.locator(
      'div[aria-label="Interactive 3D Lanyard Identity Badge"]'
    );
    await expect(lanyardContainer).toBeVisible();

    // The canvas should be created inside the container
    const canvas = lanyardContainer.locator('canvas');
    await expect(canvas).toBeAttached({ timeout: 20000 });

    // Interactive instruction pill is present
    await expect(lanyardContainer).toContainText('DRAG BADGE // VERLET ROPE SIMULATION');
  });

  test('07. Responsive two-column layout on desktop', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop-specific grid verification');

    await page.setViewportSize({ width: 1280, height: 800 });
    const about = page.locator('section#about');
    const grid = about.locator('.grid.lg\\:grid-cols-12');
    await expect(grid).toBeVisible();

    const leftCol = about.locator('.lg\\:col-span-7');
    const rightCol = about.locator('.lg\\:col-span-5');

    const leftBox = await leftCol.boundingBox();
    const rightBox = await rightCol.boundingBox();

    expect(leftBox).not.toBeNull();
    expect(rightBox).not.toBeNull();
    if (leftBox && rightBox) {
      // Left column is to the left of the right column
      expect(leftBox.x).toBeLessThan(rightBox.x);
    }
  });

  test('08. Responsive stacked layout on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const about = page.locator('section#about');
    await expect(about).toBeVisible();

    const leftCol = about.locator('.space-y-8.lg\\:col-span-7');
    const rightCol = about.locator('.space-y-6.lg\\:col-span-5');

    const leftBox = await leftCol.boundingBox();
    const rightBox = await rightCol.boundingBox();

    expect(leftBox).not.toBeNull();
    expect(rightBox).not.toBeNull();
    if (leftBox && rightBox) {
      // Stacked vertically: right column is below left column
      expect(rightBox.y).toBeGreaterThan(leftBox.y);
    }
  });
});

test.describe('Portfolio V2 — Phase 04 Reduced Motion Fallback', () => {
  test.use({ reducedMotion: 'reduce' });

  test('09. Accessible static badge fallback is rendered when reduced motion is preferred', async ({
    page
  }) => {
    await page.goto('/');
    const about = page.locator('section#about');
    await expect(about).toBeVisible();

    const fallback = about.locator(
      'div[aria-label="Tarun R. Developer Identity Badge (Static Display)"]'
    );
    await expect(fallback).toBeVisible();

    // Verify static badge content and image
    await expect(fallback).toContainText('SECURITY // PASS_V2');
    await expect(fallback).toContainText('AUTHENTICATED');
    await expect(fallback).toContainText('ID: TRB_89 // CSBS_RIT_CHENNAI');
    await expect(fallback).toContainText('MODE: ACCESSIBLE_STATIC');

    const badgeImg = fallback.locator('img[src="/images/profile/badge-front.png"]');
    await expect(badgeImg).toBeVisible();

    // 3D canvas should NOT be mounted
    const canvas = about.locator('div[aria-label="Interactive 3D Lanyard Identity Badge"] canvas');
    await expect(canvas).toHaveCount(0);
  });
});
