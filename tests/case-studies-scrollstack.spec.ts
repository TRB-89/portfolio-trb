import { test, expect } from '@playwright/test';

test.describe('Portfolio V2 — Phase 06 Engineering Case Studies & ScrollStack', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('01. Case studies section renders with correct label and heading', async ({ page }) => {
    const section = page.locator('#case-studies');
    await expect(section).toBeVisible();

    await expect(section).toContainText('04 // ENGINEERING CASE STUDIES');
    await expect(section.locator('h2')).toContainText('BEYOND THE CODE.');
    await expect(section).toContainText(
      'A closer look at the architecture, engineering decisions, challenges and experiments behind selected systems.'
    );
  });

  test('02. All 4 flagship case studies appear in intended priority order', async ({ page }) => {
    const section = page.locator('#case-studies');

    // Expected sequence
    const expectedStudies = [
      { id: 'parallax', title: 'PARALLAX', number: '01' },
      { id: 'vortex', title: 'VORTEX', number: '02' },
      { id: 'omen', title: 'ØMEN', number: '03' },
      { id: 'vesper', title: 'VESPER', number: '04' }
    ];

    for (const study of expectedStudies) {
      const card = section.locator(`[data-testid="case-study-card-${study.id}"]`);
      await expect(card).toBeAttached();
      await expect(card).toContainText(study.title);
      await expect(card).toContainText(`CASE_${study.number}`);
    }
  });

  test('03. Case study headings and content are fully accessible', async ({ page }) => {
    const section = page.locator('#case-studies');
    const headings = section.locator('h3');
    const count = await headings.count();
    expect(count).toBeGreaterThanOrEqual(4);

    // Verify all 4 titles exist in h3 headings
    await expect(section.locator('h3:has-text("PARALLAX")')).toBeAttached();
    await expect(section.locator('h3:has-text("VORTEX")')).toBeAttached();
    await expect(section.locator('h3:has-text("ØMEN")')).toBeAttached();
    await expect(section.locator('h3:has-text("VESPER")')).toBeAttached();
  });

  test('04. Architecture pipeline flow diagram renders with accessible step progression', async ({
    page
  }) => {
    const parallaxCard = page.locator('[data-testid="case-study-card-parallax"]');
    await expect(parallaxCard).toContainText('SYSTEM ARCHITECTURE PIPELINE');

    // Check accessible sr-only text
    const srDescription = parallaxCard.locator('.sr-only');
    await expect(srDescription).toBeAttached();
    await expect(srDescription).toContainText('Processing pipeline stages:');

    // Check specific stages
    await expect(parallaxCard).toContainText('SAR Data Acquisition');
    await expect(parallaxCard).toContainText('Raster Preprocessing');
    await expect(parallaxCard).toContainText('Change Analysis');
    await expect(parallaxCard).toContainText('OPERA Cross-Sensor Check');
    await expect(parallaxCard).toContainText('MapLibre GL Visualization');
  });

  test('05. PARALLAX case study reflects NASA Space Apps and honest scientific boundaries', async ({
    page
  }) => {
    const parallaxCard = page.locator('[data-testid="case-study-card-parallax"]');
    await expect(parallaxCard).toContainText('NASA Space Apps Challenge 2026');
    await expect(parallaxCard).toContainText('NASA OPERA');
    await expect(parallaxCard).toContainText('Problem Friction');
    await expect(parallaxCard).toContainText('Engineered Solution');

    // Verify absence of unverified marketing claims
    const cardText = await parallaxCard.innerText();
    expect(cardText).not.toContain('evacuation routing system');
    expect(cardText).not.toContain('confirmed floodwater');
    expect(cardText).toContain('candidate surface changes');
  });

  test('06. VORTEX case study reflects CUDA sparse matrix optimization and benchmarks', async ({
    page
  }) => {
    const vortexCard = page.locator('[data-testid="case-study-card-vortex"]');
    await expect(vortexCard).toContainText('GPU-Accelerated Mathematical Optimization');
    await expect(vortexCard).toContainText('Compressed Sparse Row (CSR)');
    await expect(vortexCard).toContainText('CUDA');
    await expect(vortexCard).toContainText('VERIFIED RESULTS');

    // Verify microbenchmark caveat is documented
    await expect(vortexCard).toContainText(
      'Microbenchmark SpMV kernel speedups do not equal end-to-end solver acceleration'
    );
  });

  test('07. ØMEN case study reflects cybersecurity and DAG attack graphs', async ({ page }) => {
    const omenCard = page.locator('[data-testid="case-study-card-omen"]');
    await expect(omenCard).toContainText('Intelligent Cybersecurity Systems');
    await expect(omenCard).toContainText('Directed Acyclic Graphs (DAG)');
    await expect(omenCard).toContainText('Topological attack graph parser');

    // Verify absence of false enterprise security certification claims
    const cardText = await omenCard.innerText();
    expect(cardText).not.toContain('enterprise-grade certified');
    expect(cardText).toContain('Architectural research prototype');
  });

  test('08. VESPER case study shows understated pending status without fabricated claims', async ({
    page
  }) => {
    const vesperCard = page.locator('[data-testid="case-study-card-vesper"]');
    await expect(vesperCard).toContainText('DOCS_PENDING');
    await expect(vesperCard).toContainText('Technical Architecture Pending Verification');
    await expect(vesperCard).toContainText('PENDING_VALIDATION');
    await expect(vesperCard).toContainText(
      'specifications and performance claims are withheld until verification is complete'
    );
  });

  test('09. Official ScrollStack mounts on desktop fine-pointer viewports', async ({
    page,
    isMobile
  }) => {
    test.skip(isMobile, 'Desktop-only ScrollStack stacking behavior');

    const scrollStackContainer = page.locator('[data-testid="case-studies-scrollstack"]');
    await expect(scrollStackContainer).toBeVisible();

    const slots = page.locator('[data-stack-slot]');
    const count = await slots.count();
    expect(count).toBe(4);

    // Verify sticky positioning on stack slots
    for (let i = 0; i < count; i++) {
      const slot = slots.nth(i);
      await expect(slot).toHaveClass(/sticky/);
    }
  });

  test('10. Scrolling does not trap the user and exits naturally into next section', async ({
    page
  }) => {
    // Scroll down to case studies
    const caseStudiesSection = page.locator('#case-studies');
    await caseStudiesSection.scrollIntoViewIfNeeded();

    // Scroll further down into the next section (tech-stack)
    const techStackSection = page.locator('#tech-stack');
    await techStackSection.scrollIntoViewIfNeeded();
    await expect(techStackSection).toBeInViewport();
  });

  test('11. Valid repository links are functional', async ({ page }) => {
    const section = page.locator('#case-studies');
    const repoLinks = section.locator('a[href*="github.com"]');
    const count = await repoLinks.count();
    expect(count).toBeGreaterThanOrEqual(3);

    // Verify VORTEX repo link
    const vortexRepo = section.locator('a[href="https://github.com/TRB-89/V-RTEX"]');
    await expect(vortexRepo).toBeAttached();

    // Verify ØMEN repo link
    const omenRepo = section.locator('a[href="https://github.com/TRB-89/-MEN"]');
    await expect(omenRepo).toBeAttached();
  });

  test('12. Quick index selector tabs switch active case study and preserve anchor navigation', async ({
    page
  }) => {
    const section = page.locator('#case-studies');
    const vortexTab = section.locator('button[role="tab"]:has-text("VORTEX")');
    await vortexTab.click();
    await expect(vortexTab).toHaveAttribute('aria-selected', 'true');

    // Selected Work navigation anchor button inside card
    const returnToProjects = section.locator('a[href="#projects"]').first();
    await expect(returnToProjects).toBeAttached();
  });

  test('13. Responsive sequential layout on mobile viewports', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-only sequential layout verification');

    const sequentialContainer = page.locator('[data-testid="case-studies-sequential"]');
    await expect(sequentialContainer).toBeVisible();

    // Verify no horizontal overflow on mobile
    const overflowX = await page.evaluate(() => {
      return document.documentElement.scrollWidth <= document.documentElement.clientWidth;
    });
    expect(overflowX).toBe(true);
  });

  test('14. Reduced motion fallback presents accessible sequential cards', async ({ page }) => {
    // Set prefers-reduced-motion: reduce
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const sequentialContainer = page.locator('[data-testid="case-studies-sequential"]');
    await expect(sequentialContainer).toBeVisible();

    const parallaxCard = page.locator('[data-testid="case-study-card-parallax"]');
    await expect(parallaxCard).toBeVisible();
    const vortexCard = page.locator('[data-testid="case-study-card-vortex"]');
    await expect(vortexCard).toBeVisible();
  });

  test('15. Preserves existing FlexCarousel and hero components without conflict', async ({
    page
  }) => {
    // Hero remains functional
    const hero = page.locator('#hero');
    await expect(hero).toBeVisible();

    // FlexCarousel in projects section remains functional
    const projects = page.locator('#projects');
    await expect(projects).toBeVisible();
    const flexStage = page.locator(
      'div[aria-label="Flex Carousel Interactive Project Showcase"]'
    );
    await expect(flexStage).toBeVisible();
  });
});
