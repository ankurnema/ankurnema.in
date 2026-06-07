import { test, expect } from '@playwright/test'

test.describe('/about page', () => {
  test('page title contains About', async ({ page }) => {
    await page.goto('/about')
    await expect(page).toHaveTitle(/About/)
  })

  test('hero heading is visible', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('impact stats section visible', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByText('17+', { exact: true })).toBeVisible()
    await expect(page.getByText('Years in Engineering')).toBeVisible()
  })

  test('testimonial name visible', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByText('Yaniv Bigger')).toBeVisible()
  })

  test('career journey section visible', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'The Journey' })).toBeVisible()
    await expect(page.getByText('Deep Roots')).toBeVisible()
  })

  test('featured projects section visible', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible()
    await expect(page.getByText('Oracle to AWS Aurora Migration (5 TB)')).toBeVisible()
  })
})
