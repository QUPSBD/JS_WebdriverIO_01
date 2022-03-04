const functionPage = require('../../pageobjects/fuctionPage');


describe('Divisional Jobs Test', () => {
    it('Rangpur Jobs', async () => {
        await functionPage.open();
        await browser.pause(10000);
        await browser.maximizeWindow();
        await browser.pause(10000);
        await functionPage.clickrangpurlocator();
         
    });
});