// @ts-check
import { test, expect } from '@playwright/test'
const LOCALHOST = 'http://localhost:5173/'
const CAT_PREFIX = 'https://cataas.com'

test('app shows a random fact with a image', async ({ page }) => {
  await page.goto(LOCALHOST)

  const fact = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContext = await fact.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContext?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_PREFIX)).toBeTruthy()
})
