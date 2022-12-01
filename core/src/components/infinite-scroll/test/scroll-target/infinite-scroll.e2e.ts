import { expect } from '@playwright/test';
import { test, configs } from '@utils/test/playwright';

configs({ modes: ['ios'], directions: ['ltr'] }).forEach(({ title, config }) => {
  test.describe('infinite-scroll: scroll-target', () => {
    test(title('should load more items when scroll target is scrolled to the bottom'), async ({ page }) => {
      await page.goto('/src/components/infinite-scroll/test/scroll-target', config);

      const ionInfiniteComplete = await page.spyOnEvent('ionInfiniteComplete');
      const content = page.locator('#scroll-target');
      const items = page.locator('ion-item');
      expect(await items.count()).toBe(30);

      await content.evaluate((el: HTMLElement) => (el.scrollTop = el.scrollHeight));
      await ionInfiniteComplete.next();

      expect(await items.count()).toBe(60);
    });
  });
});
