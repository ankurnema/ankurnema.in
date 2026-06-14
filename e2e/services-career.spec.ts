import { test, expect } from '@playwright/test'

test('/services/career page renders', async ({ page }) => {
  await page.goto('/services/career')
  await expect(page).toHaveTitle(/Career Guidance/)
  await expect(page.getByRole('heading', { name: 'Career Guidance', exact: true })).toBeVisible()
})
