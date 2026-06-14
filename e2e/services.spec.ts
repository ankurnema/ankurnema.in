import { test, expect } from '@playwright/test'

test('/services page renders', async ({ page }) => {
  await page.goto('/services')
  await expect(page).toHaveTitle(/Services/)
  await expect(page.getByRole('heading', { name: 'Services' })).toBeVisible()
  await expect(page.getByRole('heading', { name: "How we'll work together" })).toBeVisible()
  await expect(page.getByText('Mid-career engineers')).toBeVisible()
})
