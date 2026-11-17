import { test, expect } from '@playwright/test';

test.describe('Portfolio V2 — Foundation Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Page loads with correct SEO title and meta description', async ({ page }) => {
    await expect(page).toHaveTitle(/TARUN R\. — AI & Systems Developer \| Beyond The Interface/);

    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('Tarun R.');
    expect(description).toContain('AI & Systems Developer');
  });

  test('All 8 semantic sections are present in required order', async ({ page }) => {
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

  test('Navigation contains links matching section anchors', async ({ page }) => {
    const nav = page.locator('header nav');
    await expect(nav).toBeAttached();

    const expectedAnchors = [
      '#hero',
      '#about',
      '#projects',
      '#case-studies',
      '#tech-stack',
      '#achievements',
      '#current-work',
      '#contact'
    ];

    for (const anchor of expectedAnchors) {
      const link = page.locator(`header a[href="${anchor}"]`).first();
      await expect(link).toBeAttached();
    }
  });

  test('Hero displays primary name and professional role', async ({ page }) => {
    const hero = page.locator('section#hero');
    await expect(hero.locator('h1')).toHaveText(/TARUN R\./);
    await expect(hero).toContainText(/AI & SYSTEMS DEVELOPER/);
  });

  test('Verified email and actual GitHub are displayed', async ({ page }) => {
    await expect(page.locator('text=tarunbanu2007@gmail.com').first()).toBeVisible();
    await expect(page.locator('a[href="https://github.com/TRB-89"]').first()).toBeAttached();
  });

  test('No placeholder LinkedIn feed URL or unverified resume download is visible', async ({ page }) => {
    const linkedInFeed = page.locator('a[href*="linkedin.com/feed"]');
    await expect(linkedInFeed).toHaveCount(0);
  });

  test('No horizontal scrolling / overflow on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
});
