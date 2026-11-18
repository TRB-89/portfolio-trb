import { test, expect } from '@playwright/test';

test.describe('Phase 08 — Final Integration, Professional Refinement & Performance', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  // -------------------------------------------------------------
  // Section 07: Development Roadmap (CurrentWork)
  // -------------------------------------------------------------
  test('01. Development Roadmap renders with correct index and editorial heading', async ({
    page
  }) => {
    const section = page.locator('#current-work');
    await expect(section).toBeVisible();

    await expect(section).toContainText('07 // DEVELOPMENT ROADMAP');
    await expect(section.locator('h2')).toContainText('NEVER STATIC.');
    await expect(section).toContainText(
      'Exploring new ideas, developing experimental systems and expanding the boundaries of my engineering experience.'
    );
  });

  test('02. Development Roadmap features projects with verified statuses', async ({
    page
  }) => {
    const section = page.locator('#current-work');
    await section.scrollIntoViewIfNeeded();

    // Verify AGARAM is explicitly marked as Planned
    const agaramCard = section.locator('[data-roadmap-id="agaram"]');
    await expect(agaramCard).toBeAttached();
    await expect(agaramCard).toContainText('AGARAM');
    await expect(agaramCard).toContainText('PLANNED');

    // Verify RESURRECTION is marked as Research
    const resurrectionCard = section.locator('[data-roadmap-id="resurrection"]');
    await expect(resurrectionCard).toBeAttached();
    await expect(resurrectionCard).toContainText('RESURRECTION');
    await expect(resurrectionCard).toContainText('RESEARCH');

    // Verify VESPER is marked as Pending Disclosure
    const vesperCard = section.locator('[data-roadmap-id="vesper"]');
    await expect(vesperCard).toBeAttached();
    await expect(vesperCard).toContainText('VESPER');
    await expect(vesperCard).toContainText('PENDING DISCLOSURE');
  });

  // -------------------------------------------------------------
  // Section 08: Contact & Direct Dispatch
  // -------------------------------------------------------------
  test('03. Contact section renders with correct index and editorial headline', async ({
    page
  }) => {
    const section = page.locator('#contact');
    await expect(section).toBeVisible();

    await expect(section).toContainText('08 // OPEN FOR COLLABORATION');
    await expect(section.locator('h2')).toContainText("LET'S BUILD WHAT'S NEXT.");
    await expect(section).toContainText(
      'Open to internships, research collaborations, hackathons and ambitious engineering projects.'
    );
  });

  test('04. Contact section features functional dispatch actions and copy-to-clipboard', async ({
    page,
    context
  }) => {
    const section = page.locator('#contact');
    await section.scrollIntoViewIfNeeded();

    // Verify mailto link
    const mailtoLink = section.locator('a[href^="mailto:tarunbanu2007@gmail.com"]');
    await expect(mailtoLink.first()).toBeVisible();

    // Verify GitHub profile link
    const githubLink = section.locator('a[href="https://github.com/TRB-89"]');
    await expect(githubLink.first()).toBeVisible();

    // Grant clipboard permissions if supported
    try {
      await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    } catch {
      // Permission API not universally available in all test runners
    }

    // Test Copy Email button
    const copyButton = section.locator('button[aria-label="Copy email address to clipboard"]');
    await expect(copyButton).toBeVisible();
    await copyButton.click();

    // Verify feedback toast appears
    const toast = section.locator('[role="status"]');
    await expect(toast).toContainText(/Email Copied to Clipboard/i);
  });

  // -------------------------------------------------------------
  // Colophon & Editorial Footer
  // -------------------------------------------------------------
  test('05. Editorial Footer renders oversized brandmark, colophon and back-to-top button', async ({
    page
  }) => {
    const footer = page.locator('footer[role="contentinfo"]');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();

    // Headline and brandmark
    await expect(footer).toContainText('ENGINEERED WITH INTENTION.');
    await expect(footer).toContainText('TRB.');

    // Academic & geographic metadata
    await expect(footer).toContainText('Rajalakshmi Institute of Technology');
    await expect(footer).toContainText('CSBS');
    await expect(footer).toContainText('[13.0827° N, 80.2707° E]');
    await expect(footer).toContainText('Undergraduate (2024 — Present)');

    // Back-to-top button
    const backToTop = footer.locator('button[aria-label="Scroll back to top of page"]');
    await expect(backToTop).toBeVisible();
    await backToTop.click();

    // Page should scroll upwards
    await page.waitForFunction(() => window.scrollY < 2000, null, { timeout: 7000 });
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(2000);
  });

  // -------------------------------------------------------------
  // SEO, Structured Data & Metadata Integrity
  // -------------------------------------------------------------
  test('06. SEO metadata, OpenGraph and Twitter cards are properly configured', async ({
    page
  }) => {
    await expect(page).toHaveTitle(/TARUN R\. — AI & Systems Developer \| Beyond The Interface/);

    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('Tarun R.');
    expect(description).toContain('AI & Systems Developer');
    expect(description).toContain('Rajalakshmi Institute of Technology');

    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://portfoliotrb.vercel.app/');

    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toContain('TARUN R.');

    const twitterCard = await page.locator('meta[property="twitter:card"]').getAttribute('content');
    expect(twitterCard).toBe('summary_large_image');
  });

  test('07. Schema.org Person JSON-LD is valid and contains authentic credentials', async ({
    page
  }) => {
    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    await expect(jsonLdScript).toBeAttached();

    const jsonText = await jsonLdScript.textContent();
    expect(jsonText).toBeTruthy();

    const parsed = JSON.parse(jsonText!);
    expect(parsed['@type']).toBe('Person');
    expect(parsed.name).toBe('Tarun R.');
    expect(parsed.jobTitle).toBe('AI & Systems Developer');
    expect(parsed.url).toBe('https://portfoliotrb.vercel.app/');
    expect(parsed.sameAs).toContain('https://github.com/TRB-89');
    expect(parsed.alumniOf.name).toBe('Rajalakshmi Institute of Technology');
  });

  // -------------------------------------------------------------
  // Academic & Empirical Honesty Check
  // -------------------------------------------------------------
  test('08. Academic enrollment explicitly states "In Progress" without premature graduation', async ({
    page
  }) => {
    const aboutSection = page.locator('#about');
    await aboutSection.scrollIntoViewIfNeeded();

    await expect(aboutSection).toContainText(/Undergraduate \(In Progress\)/i);
    await expect(aboutSection).toContainText(/Rajalakshmi Institute of Technology/i);
    await expect(aboutSection).toContainText(/Computer Science and Business Systems/i);
  });
});
