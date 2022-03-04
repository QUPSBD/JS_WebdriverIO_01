 const functionPage = require('../../pageobjects/fuctionPage');


describe('Main Nav Bar Test', () => {
    it('main nav Bar', async () => {
        await functionPage.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await functionPage.mainnavbar();
         
    });
});