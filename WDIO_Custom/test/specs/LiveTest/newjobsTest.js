 const functionPage = require('../../pageobjects/fuctionPage');



describe('Live', () => {
    it('New job', async () => {
        await functionPage.open();
        await browser.maximizeWindow();
        await browser.pause(10000);
        await functionPage.clicknewjoblocator();
         
    });
});