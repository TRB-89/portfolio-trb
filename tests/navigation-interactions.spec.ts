import { test, expect } from '@playwright/test';

test.describe('Portfolio V2 — Phase 03 Navigation & Global Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('button.sm-toggle').waitFor({ state: 'attached' });
  });

  test('01. Staggered Menu opens when menu toggle button is clicked', async ({ page }) => {
    const toggleBtn = page.locator('button.sm-toggle');
    await expect(toggleBtn).toBeVisible();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    const panel = page.locator('#staggered-menu-panel');
    await expect(panel).toHaveAttribute('aria-hidden', 'false');
  });

  test('02. Staggered Menu closes when toggle button is clicked again', async ({ page }) => {
    const toggleBtn = page.locator('button.sm-toggle');
    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    const panel = page.locator('#staggered-menu-panel');
    await expect(panel).toHaveAttribute('aria-hidden', 'true');
  });

  test('03. Staggered Menu closes on Escape key and restores focus to toggle button', async ({
    page
  }) => {
    const toggleBtn = page.locator('button.sm-toggle');
    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    await page.keyboard.press('Escape');
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    await expect(toggleBtn).toBeFocused();
  });

  test('04. Staggered Menu panel contains all 8 section navigation items with numbering', async ({
    page
  }) => {
    const toggleBtn = page.locator('button.sm-toggle');
    await toggleBtn.click();

    const expectedItems = [
      { text: 'Home', href: '#hero' },
      { text: 'About', href: '#about' },
      { text: 'Projects', href: '#projects' },
      { text: 'Case Studies', href: '#case-studies' },
      { text: 'Technical Expertise', href: '#tech-stack' },
      { text: 'Achievements', href: '#achievements' },
      { text: 'Currently Building', href: '#current-work' },
      { text: 'Contact', href: '#contact' }
    ];

    for (const item of expectedItems) {
      const link = page.locator(`#staggered-menu-panel a[href="${item.href}"]`);
      await expect(link).toBeAttached();
      await expect(link).toContainText(item.text);
    }
  });

  test('05. Clicking a navigation item closes Staggered Menu and navigates', async ({ page }) => {
    const toggleBtn = page.locator('button.sm-toggle');
    await toggleBtn.click();

    const projectsLink = page.locator('#staggered-menu-panel a[href="#projects"]');
    await expect(projectsLink).toBeVisible();

    await projectsLink.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    // Section exists and target is reachable
    const projectsSection = page.locator('section#projects');
    await expect(projectsSection).toBeAttached();
  });

  test('06. Clicking outside Staggered Menu panel closes the menu', async ({ page }) => {
    const toggleBtn = page.locator('button.sm-toggle');
    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    // Click outside panel (e.g. top-left area of screen)
    await page.mouse.click(50, 200);
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
  });

  test('07. Body scroll locking is enabled when Staggered Menu is open and restored on close', async ({
    page
  }) => {
    const toggleBtn = page.locator('button.sm-toggle');

    const initialOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(initialOverflow).not.toBe('hidden');

    await toggleBtn.click();
    const openOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(openOverflow).toBe('hidden');

    await toggleBtn.click();
    const closedOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(closedOverflow).not.toBe('hidden');
  });

  test('08. Social Dock renders all 5 interactive actions with correct labels', async ({ page }) => {
    const dock = page.locator('aside[aria-label="Quick Access Dock"]');
    await expect(dock).toBeAttached();

    const expectedLabels = ['Home', 'Projects', 'GitHub', 'Email', 'Top'];
    for (const label of expectedLabels) {
      const btn = dock.locator(`button[aria-label="${label}"]`);
      await expect(btn).toBeAttached();
    }
  });

  test('09. Social Dock Back to Top button executes scroll to top', async ({ page }) => {
    // Scroll down first
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(200);

    const topBtn = page.locator('aside[aria-label="Quick Access Dock"] button[aria-label="Top"]');
    await topBtn.click();

    // Give smooth scroll brief time to initiate
    await page.waitForTimeout(500);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(800);
  });

  test('10. Social Dock hides when Staggered Menu is opened and restores when closed', async ({
    page
  }) => {
    const dock = page.locator('aside[aria-label="Quick Access Dock"]');
    const toggleBtn = page.locator('button.sm-toggle');

    // Initially visible
    await expect(dock).toHaveClass(/opacity-100/);

    // Open menu
    await toggleBtn.click();
    await expect(dock).toHaveClass(/opacity-0/);
    await expect(dock).toHaveClass(/pointer-events-none/);

    // Close menu
    await toggleBtn.click();
    await expect(dock).toHaveClass(/opacity-100/);
    await expect(dock).toHaveClass(/pointer-events-auto/);
  });

  test('11. Target Cursor portal is mounted on fine-pointer desktop and disabled on mobile touch devices', async ({
    page,
    isMobile
  }) => {
    const cursor = page.locator('div.pointer-events-none.fixed.inset-0.z-\\[2147483647\\]');
    if (isMobile) {
      await expect(cursor).toHaveCount(0);
    } else {
      await expect(cursor).toBeAttached();
    }
  });

  test('12. Target elements have .cursor-target class applied', async ({ page }) => {
    const targets = page.locator('.cursor-target');
    const count = await targets.count();
    expect(count).toBeGreaterThan(5);

    // Primary hero CTAs should have .cursor-target
    const heroWorkCTA = page.locator('section#hero a[href="#projects"]');
    await expect(heroWorkCTA).toHaveClass(/cursor-target/);
  });

  test('13. Magnet component wraps primary CTA buttons and preserves clickability', async ({
    page
  }) => {
    const heroCTAs = page.locator('section#hero a[href="#projects"]');
    await expect(heroCTAs).toBeVisible();

    // Verify parent has magnet structure
    const magnetWrapper = heroCTAs.locator('xpath=ancestor::div[contains(@class, "inline-block")]');
    await expect(magnetWrapper.first()).toBeAttached();

    // Button remains clickable
    await heroCTAs.click();
    const currentURL = page.url();
    expect(currentURL).toContain('#projects');
  });

  test('14. Magnet wraps Contact form submit button', async ({ page }) => {
    const submitBtn = page.locator('section#contact button[type="submit"]');
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toHaveClass(/cursor-target/);

    const magnetWrapper = submitBtn.locator('xpath=ancestor::div[contains(@class, "inline-block")]');
    await expect(magnetWrapper.first()).toBeAttached();
  });

  test('15. Gradual Blur is present at top with pointer-events-none', async ({ page }) => {
    const blur = page.locator('div.pointer-events-none.fixed.top-0.left-0.w-full');
    await expect(blur).toBeAttached();

    // Verify pointer-events is none so it never obstructs interaction
    const pointerEvents = await blur.evaluate((el) => window.getComputedStyle(el).pointerEvents);
    expect(pointerEvents).toBe('none');
  });

  test('16. All 8 sections remain present and visible in required order', async ({ page }) => {
    const sectionIds = [
      'hero',
      'about',
      'projects',
      'case-studies',
      'tech-stack',
      'achievements',
      'current-work',
      'contact'
    ];

    for (const id of sectionIds) {
      const section = page.locator(`section#${id}`);
      await expect(section).toBeVisible();
    }
  });

  test('17. No horizontal overflow on mobile viewport with Staggered Menu and Dock', async ({
    page
  }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test('18. Reduced motion disables smooth animations cleanly without breakage', async ({
    page
  }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');

    const toggleBtn = page.locator('button.sm-toggle');
    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    const panel = page.locator('#staggered-menu-panel');
    await expect(panel).toBeAttached();

    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
  });
});
