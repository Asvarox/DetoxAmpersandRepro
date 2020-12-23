describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await device.launchApp({
      newInstance: true,
      url: 'https://example.com/?query=value&param=value',
    })
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
