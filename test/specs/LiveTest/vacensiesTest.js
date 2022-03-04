 const functionPage = require('../../pageobjects/fuctionPage');


describe('Live', () => {
    it('Vacensies Test', async () => {
        await functionPage.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await functionPage.clickvacensieslocator();
         
    });
});