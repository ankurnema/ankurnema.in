import { test, expect } from '@playwright/test'

test('/services/mentoring page renders', async ({ page }) => {
  await page.goto('/services/mentoring')
  await expect(page).toHaveTitle(/Mentoring/)
  await expect(page.getByRole('heading', { name: 'Mentoring', exact: true })).toBeVisible()
})
