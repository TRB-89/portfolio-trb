# PORTFOLIO V2 — PRODUCTION ROLLBACK PLAN

**System:** Beyond the Interface — Portfolio V2  
**Owner:** Tarun R.  
**Production URL:** `https://portfoliotrb.vercel.app/`  
**GitHub Repository:** `https://github.com/TRB-89/portfolio-trb`  
**Safe Baseline Commit (Main):** `5ed09bf`  

---

## 1. Rollback Criteria & Severity Triggers

A rollback must be initiated immediately if any of the following conditions occur upon promotion to production:

| Severity | Category | Trigger Condition | Max TTR (Time to Restore) |
|---|---|---|---|
| **P0** | Availability | HTTP 5xx errors, infinite loading spinner, or complete blank white screen | < 2 minutes |
| **P0** | Fatal JS Crash | Uncaught JavaScript exception blocking initial rendering across major browsers | < 2 minutes |
| **P1** | Visual Disruption | WebGL canvas context loss freezing the viewport, total layout overflow on mobile | < 5 minutes |
| **P1** | Navigation Trap | Inability to scroll, open navigation menu, or escape overlay modals | < 5 minutes |
| **P2** | Asset Degradation | Critical images failing to resolve (404s), broken CSS stylesheet references | < 10 minutes |

---

## 2. Instant Rollback via Vercel Platform (Method 1 — Fastest: < 60 seconds)

Vercel maintains immutable deployment artifacts. An instant rollback does not require building or running CI/CD:

### Option A: Via Vercel Dashboard (Zero CLI required)
1. Navigate to: `https://vercel.com/tarun-rs-projects/portfolio-trb/deployments`
2. Locate the previous stable production deployment (commit `5ed09bf` or the last known good production deployment).
3. Click the three dots (`...`) context menu next to the stable deployment.
4. Select **Instant Rollback**.
5. Confirm the action. Traffic will instantly route to the previous deployment at the edge with zero downtime.

### Option B: Via Vercel CLI
```bash
# List recent deployments to obtain the previous stable deployment URL
vercel list portfolio-trb

# Instantly assign the production alias to the previous deployment ID/URL:
vercel alias set <PREVIOUS_DEPLOYMENT_URL> portfoliotrb.vercel.app
```

---

## 3. Git-Level Rollback & Branch Recovery (Method 2)

If the production branch (`main`) was merged and must be restored in version control:

### Scenario A: Revert Merge Commit on Main (Recommended)
```bash
git checkout main
git pull origin main

# Create a clean revert commit preserving full history
git revert -m 1 HEAD -m "revert(release): rollback portfolio v2 to previous stable release"

# Push to origin main to trigger automated redeployment of stable code
git push origin main
```

### Scenario B: Hard Reset (Only if agreed and no subsequent commits exist)
```bash
git checkout main
git fetch origin

# Reset to last stable commit
git reset --hard 5ed09bf

# Force push to main (Requires branch protection override)
git push origin main --force
```

---

## 4. Post-Rollback Validation Protocol

Immediately after executing a rollback:

1. **Verify HTTP Endpoint:**
   ```bash
   curl -I https://portfoliotrb.vercel.app/
   ```
   Confirm `200 OK` response with no caching errors.
2. **Hard Refresh Browser:**
   Open Chrome Incognito (`Ctrl+Shift+N` / `Cmd+Shift+N`) and visit `https://portfoliotrb.vercel.app/`.
   Verify the previous stable interface renders cleanly.
3. **Console Inspection:**
   Open DevTools Console (`F12`) to verify zero runtime errors.
4. **Stakeholder Notification:**
   Notify Tarun R. with the following details:
   - Incident timestamp
   - Trigger condition observed
   - Deployment ID rolled back to
   - Root cause hypothesis for subsequent diagnosis on `feat/portfolio-v2`.

---

## 5. Diagnostic & Recovery Process

After production stability is restored:

1. **Do not modify `main`.** Keep `main` in the verified stable state.
2. Check out the development branch `feat/portfolio-v2`.
3. Reproduce the failure mode locally under matching conditions:
   ```bash
   npm run build
   npx vite preview --port 4173
   ```
4. Address root cause, verify locally against the 166-test Playwright suite, and repeat preview staging before scheduling a new release window.
