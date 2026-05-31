import { test, expect } from '@playwright/test'

test('homepage renders', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Ankur Nema/)
  await expect(page.getByRole('heading', { name: 'Ankur Nema' })).toBeVisible()
})
