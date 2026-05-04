// @ts-check
import { test, expect } from '@playwright/test';
import fs from 'fs';

test('screenshot galeri24 - harga emas', async ({ page }) => {
  const timestamp = new Date().toISOString()
    .replace(/[:.]/g, '-')
    .replace('T', '_')
    .split('Z')[0];

  fs.mkdirSync('screenshot', { recursive: true });

  const filePath = `screenshot/screenshot-${timestamp}.png`;

  await page.goto('https://galeri24.co.id/harga-emas');

  // tunggu halaman stabil
  await page.waitForLoadState('networkidle');

  await page.screenshot({
    path: filePath,
    fullPage: true
  });
});