 const functionPage = require('../../pageobjects/fuctionPage');


describe('Quick Links', () => {
    it('Contractual Test', async () => {
        await functionPage.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await functionPage.quicklinkcontractual();
         
    });
});