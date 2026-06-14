import { test, expect } from '@playwright/test'

test('/services/linkedin-review page renders', async ({ page }) => {
  await page.goto('/services/linkedin-review')
  await expect(page).toHaveTitle(/LinkedIn Review/)
  await expect(page.getByRole('heading', { name: 'LinkedIn Review', exact: true })).toBeVisible()
})
