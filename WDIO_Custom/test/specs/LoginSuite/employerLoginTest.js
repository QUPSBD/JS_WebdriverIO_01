 const functionPage = require('../../pageobjects/fuctionPage');
 

describe('Employer login Test', () => {
    it('Employer Login', async () => {
        await functionPage.open();
        await browser.maximizeWindow();
        await functionPage.loginEmployerSighnIn("rm.qups@gmail.com", "rm123456789");
    });
})