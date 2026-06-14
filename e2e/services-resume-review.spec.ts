import { test, expect } from '@playwright/test'

test('/services/resume-review page renders', async ({ page }) => {
  await page.goto('/services/resume-review')
  await expect(page).toHaveTitle(/Resume Review/)
  await expect(page.getByRole('heading', { name: 'Resume Review', exact: true })).toBeVisible()
})
