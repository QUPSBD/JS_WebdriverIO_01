 const functionPage = require('../../pageobjects/fuctionPage');


describe('Sighn Up Test', () => {
    it('Sighn Up', async () => {
        await functionPage.open();
        await browser.maximizeWindow()
        await browser.pause(1000)
        await functionPage.createAccount();
        await browser.pause(10000);
    });
});