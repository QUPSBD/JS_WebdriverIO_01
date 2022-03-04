 const functionPage = require('../../pageobjects/fuctionPage');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await functionPage.open();
        await browser.maximizeWindow()
        await browser.pause(5000)
        await functionPage.login('rm.qups@gmail.com', 'rm123456789');
        await browser.pause(5000);
    });
    it('should log out', async () => {
        await browser.pause(1000)
        await functionPage.logout()
        await browser.pause(5000)
    });
    // it('should close Advertise', async () => {
    //      await LoginPage.closeAdvertise()
    // });
    it('should login with Facebook', async () => {
        await browser.pause(1000)
        await functionPage.loginfb('rm.qups@gmail.com', 'rm123456789');
        await browser.pause(5000)
    });
});


