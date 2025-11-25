import { test, expect } from '@playwright/test';

test('news cards should be visible and have images', async ({ page }) => {
  await page.goto('http://localhost:8000/index.html');

  // Wait for the news section to be visible
  await page.waitForSelector('.news-card');

  const newsCards = await page.locator('.news-card').all();
  expect(newsCards.length).toBeGreaterThan(0);

  for (const card of newsCards) {
    const image = card.locator('img');
    await expect(image).toBeVisible();
    const imageUrl = await image.getAttribute('src');
    expect(imageUrl).not.toBe('');
  }
});
