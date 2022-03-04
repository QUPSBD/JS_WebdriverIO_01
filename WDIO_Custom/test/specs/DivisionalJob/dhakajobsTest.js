 const functionPage = require('../../pageobjects/fuctionPage');


describe('Divisional Jobs Test', () => {
    it('Dhaka Jobs', async () => {
        await functionPage.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await functionPage.clickdhakalocator();
         
    });
});