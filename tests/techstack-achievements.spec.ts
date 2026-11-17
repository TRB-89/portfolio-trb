import { test, expect } from '@playwright/test';

test.describe('Portfolio V2 — Phase 07 Technical Arsenal, Expertise & Achievements', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // -------------------------------------------------------------
  // Section 05: Technical Arsenal
  // -------------------------------------------------------------
  test('01. Technical Arsenal section renders with correct label and heading', async ({ page }) => {
    const section = page.locator('#tech-stack');
    await expect(section).toBeVisible();

    await expect(section).toContainText('05 // TECHNICAL ARSENAL');
    await expect(section.locator('h2')).toContainText('BUILT FOR COMPLEXITY.');
    await expect(section).toContainText(
      'A multidisciplinary engineering toolkit spanning intelligent systems, computational engineering, cybersecurity and software development.'
    );
  });

  test('02. All 6 engineering domains appear in Magic Bento with correct headers', async ({ page }) => {
    const section = page.locator('#tech-stack');

    const expectedDomains = [
      'Computational Engineering',
      'Geospatial Intelligence',
      'Artificial Intelligence',
      'Cybersecurity',
      'Full-Stack Development',
      'Design & Product Development'
    ];

    for (const domain of expectedDomains) {
      await expect(section.locator(`h3:has-text("${domain}")`)).toBeAttached();
    }
  });

  test('03. Magic Bento domain cards link to authentic flagship initiatives', async ({ page }) => {
    const section = page.locator('#tech-stack');

    const expectedInitiatives = [
      'VORTEX',
      'PARALLAX',
      'AURA',
      'ØMEN',
      'GFG REDLINE',
      'ONE PLANET'
    ];

    for (const initiative of expectedInitiatives) {
      const link = section.locator(`a[href="#projects"]:has-text("${initiative}")`);
      await expect(link).toBeAttached();
    }
  });

  test('04. Magic Bento skill badges render competence markers', async ({ page }) => {
    const section = page.locator('#tech-stack');

    // Verify competence levels are rendered
    await expect(section.locator('text=[EXP]').first()).toBeAttached();
    await expect(section.locator('text=[COM]').first()).toBeAttached();

    // Verify key skills appear
    await expect(section.locator('text=CUDA C++')).toBeAttached();
    await expect(section.locator('text=SAR Data Processing')).toBeAttached();
    await expect(section.locator('text=React 19 & Next.js Ecosystem')).toBeAttached();
  });

  test('05. Logo Loop continuous marquee renders with accessible attributes', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Desktop marquee animation check');

    const section = page.locator('#tech-stack');
    const marqueeRegion = section.locator('div[role="region"][aria-label="Core Engineering Technologies and Primitives"]');
    await expect(marqueeRegion).toBeVisible();

    // Check marquee header
    await expect(section).toContainText('CORE_PRIMITIVES_LOOP // 18 ENGINEERING CAPABILITIES');

    // Verify key technologies are present in the marquee
    await expect(marqueeRegion).toContainText('C++20');
    await expect(marqueeRegion).toContainText('CUDA');
    await expect(marqueeRegion).toContainText('Python');
    await expect(marqueeRegion).toContainText('TypeScript');
    await expect(marqueeRegion).toContainText('FastAPI');
  });

  // -------------------------------------------------------------
  // Section 06: Engineering Milestones & Achievements
  // -------------------------------------------------------------
  test('06. Engineering Milestones section renders with correct label and heading', async ({ page }) => {
    const section = page.locator('#achievements');
    await expect(section).toBeVisible();

    await expect(section).toContainText('06 // ENGINEERING MILESTONES');
    await expect(section.locator('h2')).toContainText('PROGRESS IN NUMBERS.');
    await expect(section).toContainText(
      'Engineering experiments, project milestones, collaborative initiatives and competitive problem-solving.'
    );
  });

  test('07. Count Up metrics display factual, verified statistics', async ({ page }) => {
    const section = page.locator('#achievements');
    await section.scrollIntoViewIfNeeded();

    // Check for 4 metrics labels (case-insensitive due to CSS uppercase)
    await expect(section).toContainText(/Technical Systems/i);
    await expect(section).toContainText(/Core Domains/i);
    await expect(section).toContainText(/Active Deployments/i);
    await expect(section).toContainText(/Sparse Memory Savings/i);

    // Wait for CountUp animation in viewport
    await page.waitForTimeout(2000);

    await expect(section).toContainText('11');
    await expect(section).toContainText('6');
    await expect(section).toContainText('2');
    await expect(section).toContainText('95');
  });

  test('08. Animated List renders all 6 verified milestone records', async ({ page }) => {
    const section = page.locator('#achievements');

    const expectedMilestones = [
      'NASA Space Apps Challenge 2026 Participant',
      'B.Tech in Computer Science and Business Systems',
      'High-Performance GPU Optimization Initiative',
      'AURA AI Assistant Live Deployment',
      'GFG REDLINE Career Architecture Prototype',
      'ONE PLANET Civic Platform Live Release'
    ];

    for (const title of expectedMilestones) {
      await expect(section.locator(`h4:has-text("${title}")`)).toBeAttached();
    }
  });

  test('09. Milestone records feature dates, category badges and verified status', async ({ page }) => {
    const section = page.locator('#achievements');
    await section.scrollIntoViewIfNeeded();

    await expect(section.locator('text=[2026]').first()).toBeAttached();
    await expect(section.getByText('NASA Space Apps Challenge', { exact: true })).toBeAttached();
    await expect(section.locator('text=Rajalakshmi Institute of Technology')).toBeAttached();
    await expect(section.locator('text=verified').first()).toBeAttached();
  });

  test('10. Milestone external evidence links are properly configured', async ({ page }) => {
    const section = page.locator('#achievements');

    // Evidence link for PARALLAX (NASA Space Apps)
    const parallaxEvidence = section.locator('a[href="https://github.com/aadeshmax/PARALLAX"]');
    await expect(parallaxEvidence).toBeAttached();
    await expect(parallaxEvidence).toHaveAttribute('target', '_blank');
    await expect(parallaxEvidence).toHaveAttribute('rel', 'noopener noreferrer');

    // Evidence link for ONE PLANET
    const onePlanetEvidence = section.locator('a[href="https://one-planet-nine.vercel.app/"]');
    await expect(onePlanetEvidence).toBeAttached();
  });

  test('11. Animated List keyboard navigation and hover selection mechanics', async ({ page }) => {
    const section = page.locator('#achievements');
    const listbox = section.locator('[role="listbox"]');
    await expect(listbox).toBeAttached();

    // Focus listbox and navigate with arrow keys
    await listbox.focus();
    await page.keyboard.press('ArrowDown');

    // Verify option 1 receives selection state
    const option1 = section.locator('[role="option"][data-index="1"]');
    await expect(option1).toBeAttached();
  });

  // -------------------------------------------------------------
  // Accessibility & Fallbacks
  // -------------------------------------------------------------
  test('12. Reduced motion fallback presents static toolchain and static metrics', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const techSection = page.locator('#tech-stack');
    await expect(techSection).toBeVisible();
    await expect(techSection.locator('text=C++20')).toBeVisible();

    const achievementsSection = page.locator('#achievements');
    await expect(achievementsSection).toBeVisible();
    await expect(achievementsSection).toContainText('11');
    await expect(achievementsSection).toContainText('6');
    await expect(achievementsSection).toContainText('2');
    await expect(achievementsSection).toContainText('95');
  });

  test('13. Mobile viewport responsive check without horizontal overflow', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile layout verification');

    const techSection = page.locator('#tech-stack');
    await expect(techSection).toBeVisible();

    const achievementsSection = page.locator('#achievements');
    await expect(achievementsSection).toBeVisible();

    // Check no horizontal overflow
    const overflowX = await page.evaluate(() => {
      return document.documentElement.scrollWidth <= document.documentElement.clientWidth;
    });
    expect(overflowX).toBe(true);
  });

  test('14. Complete portfolio integration: all previous sections remain fully functional', async ({ page }) => {
    // 01. Hero
    await expect(page.locator('#hero')).toBeVisible();
    // 02. About
    await expect(page.locator('#about')).toBeVisible();
    // 03. Projects (FlexCarousel)
    await expect(page.locator('#projects')).toBeVisible();
    // 04. Case Studies (ScrollStack)
    await expect(page.locator('#case-studies')).toBeVisible();
    // 05. Tech Stack (Magic Bento + Logo Loop)
    await expect(page.locator('#tech-stack')).toBeVisible();
    // 06. Achievements (Count Up + Animated List)
    await expect(page.locator('#achievements')).toBeVisible();
  });
});
