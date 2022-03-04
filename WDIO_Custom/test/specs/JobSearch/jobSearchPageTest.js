 const functionPage = require('../../pageobjects/fuctionPage');

describe('Job Search Test', async () => {
    it('Searchy Job', async () => {
        await functionPage.open();
        await browser.maximizeWindow();
        await functionPage.searchJob("QA Engineer");
        await browser.pause(15000);
    });
})