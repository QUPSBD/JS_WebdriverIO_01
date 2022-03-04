 const functionPage = require('../../pageobjects/fuctionPage');

describe('Live', () => {
    it('Live Job', async () => {
        await functionPage.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await functionPage.clicklivejoblocator();
         
    });
});