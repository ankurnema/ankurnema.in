import { test, expect } from '@playwright/test'

test('/services/consulting page renders', async ({ page }) => {
  await page.goto('/services/consulting')
  await expect(page).toHaveTitle(/Consulting Hour/)
  await expect(page.getByRole('heading', { name: 'Consulting Hour' })).toBeVisible()
})
