 const functionPage = require('../../pageobjects/fuctionPage');

describe('My Login application', () => {
    it('should login with Facebook', async () => {
        await functionPage.open();
        await browser.maximizeWindow()
        await browser.pause(1000)
        await functionPage.loginfb('rm.qups@gmail.com', 'rm123456789');
        await browser.pause(5000)
    });
});