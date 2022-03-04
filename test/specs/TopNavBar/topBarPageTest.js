const functionPage = require('../../pageobjects/fuctionPage');

describe('Topbar Page Test', () => { 
   
    it('Login Test', async () => {
        await functionPage.open();
        await browser.maximizeWindow();
        await functionPage.login("rm.qups@gmail.com", "rm123456789");
        await browser.pause(10000);

    });

    it('TopBar', async () => {
        await functionPage.clickBar();

    });
})