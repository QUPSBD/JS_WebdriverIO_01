const Page = require('../pageobjects/page')
const locatorPage = require('../pageobjects/locatorPage')

class FunctionPage extends Page{

    //login function
    async login (username, password) {
        await locatorPage.clickSignIn.click()
        await browser.pause(3000)
        await locatorPage.inputUsername.setValue(username);
        await browser.pause(3000)
        await locatorPage.clickNext.click()
        await browser.pause(3000)
        await locatorPage.inputPassword.setValue(password);
        await browser.pause(3000)
        await locatorPage.btnSubmit.click();
        await browser.pause(3000);

    }
    async logout(){
        await browser.pause(2000)
        await locatorPage.clickUserName.click()
        await browser.pause(2000)
        await locatorPage.clicklogOut.click()
        await browser.pause(2000)
        
        
    }
    async closeAdvertise(){
        await locatorPage.closeAddvertise.click()
        await browser.pause(5000)
    }

    async loginfb (username, password) {
        await locatorPage.clickSignIn.click()
        await browser.pause(3000)
        await locatorPage.clickFbButton.click()
        
    }
    async loginEmployerSighnIn(email, password){
        await locatorPage.clickEmployers.click();
        await browser.pause(10000);
        //await locatorPage.enterEmail.click();
        await locatorPage.enterEmail.setValue(email);
        await browser.pause(5000);
        await locatorPage.enterPassword.setValue(password);
        await browser.pause(5000);
        await locatorPage.clickSubmitEmployerButton.click();
    }

    //divisional function
    async clickdhakalocator(){
        await locatorPage.dhakalocator.click();
    }
    async clickbarishallocator(){
        await locatorPage.barishallocator.click();
    }
    async clickrangpurlocator(){
        await locatorPage.rangpurlocator.click();
    }

    //job search function
    async searchJob(value){
        await locatorPage.enterKeyword.setValue(value);
        //await locatorPage.clickOrganizationType.click();
        //await locatorPage.selectOrganizationType.click();
        await locatorPage.clickSearchButton.click();
    }
    //live job function
    
    async clicklivejoblocator(){
        await locatorPage.livejoblocator.click();
    }
    async clickvacensieslocator(){
        await locatorPage.vacensieslocator.click();
    }
    async clickcompanieslocator(){
        await locatorPage.companieslocator.click();
    }
    async clicknewjoblocator(){
        await locatorPage.newjoblocator.click();
    }

    //main navbar function
    async mainnavbar(){
        await locatorPage.testEmployalibility.click();
        await browser.pause(10000);
        await locatorPage.jobSearch.click();
        await browser.pause(10000);
        await locatorPage.quickLink.click();
        await browser.pause(10000);
        await locatorPage.careerResource.click();
        await browser.pause(10000);
    }

    //quicklinks function
    async quicklinknewjob(){
        await locatorPage.quickLink.click();
        await browser.pause(3000)
        await locatorPage.clickNewJob.click();
    }
    async quicklinkdeadline(){
        await locatorPage.quickLink.click();
        await browser.pause(3000)
        await locatorPage.deadline.click();
    }
    async quicklinkpartTime(){
        await locatorPage.quickLink.click();
        await browser.pause(3000)
        await locatorPage.partTime.click();
    }
    async quicklinkcontractual(){
        await locatorPage.quickLink.click();
        await browser.pause(3000)
        await locatorPage.contractual.click();
    }
    async quicklinkgovernment(){
        await locatorPage.quickLink.click();
        await browser.pause(3000)
        await locatorPage.government.click();
    }
    async quicklinklocationwise(){
        await locatorPage.quickLink.click();
        await browser.pause(3000)
        await locatorPage.locationwise.click();
    }
    async quicklinkemployerlist(){
        await locatorPage.quickLink.click();
        await browser.pause(3000)
        await locatorPage.employerlist.click();
    }

    //sighn up function
    async createAccount(){
        await browser.pause(5000);
        await locatorPage.clickSignIn.click();
        await browser.pause(5000);
        await locatorPage.clickCreatAccountButton.click();
        await browser.pause(3000);
        await locatorPage.clickgeneralcreateAccountButton.click();
        await browser.pause(3000);
        await locatorPage.enterUserName.setValue("Raihan");
        await browser.pause(3000);
        await locatorPage.selectGender.click();
        await browser.pause(1000);
        await locatorPage.clickSkillType.click();
        await browser.pause(1000);
        await locatorPage.selectSkillType.click();
        await browser.pause(1000);
        await locatorPage.enterEmail.setValue('rm.qups@gmail.com');
        await browser.pause(1000);
        await locatorPage.enterPhonNumber.setValue("01784054592");
        await browser.pause(10000);
        await locatorPage.clickPhoneButton.click();
        await browser.pause(1000)
        await locatorPage.enterPassword.setValue("rm123456789");
        await locatorPage.enterRePassword.setValue("rm123456789");
        await browser.pause(1000);
        await locatorPage.clickSubmitButton.click()
        await browser.pause(5000);

    }

    //topbar function
    async clickBar(){
        await locatorPage.clickMybdJobs.click()
        await browser.pause(15000)
        await locatorPage.clickTrainning.click()
        await browser.pause(15000)
        await locatorPage.clickEmployers.click()
        await browser.pause(15000)
    }

    //browser open function
    open(){
        return super.open("");
    }
       

}
module.exports = new FunctionPage();