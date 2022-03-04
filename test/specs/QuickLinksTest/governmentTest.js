 const functionPage = require('../../pageobjects/fuctionPage');


describe('Quick Links', () => {
    it('Government test', async () => {
        await functionPage.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await functionPage.quicklinkgovernment();
         
    });
});