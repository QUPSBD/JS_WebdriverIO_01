const Page = require('./page');

 
class SighnUpPage extends Page {

    get createAccountLocator(){
        return $('//*[@id="lin_header_mid02"]/div[1]/div/nav/ul/li[7]/a');
    }
    get clickCreatAccountButton(){
        return $('//*[@id="wcj"]/div');
    }
    get enterUserName(){
        return $("//*[@id='txtFirstName']");
    }
    get selectGender(){
        return $('//*[@id="wb"]/div[1]/div[2]/div/fieldset/div[3]/label');
    }
    get clickSkillType(){
        return $('//*[@id="selected_Cat"]');
    }
    get selectSkillType(){
        return $('//*[@id="selected_Cat"]/option[9]');
    }
    get enterEmail(){
        return $('//*[@id="txtEmail1"]');
    }
    get enterPhonNumber(){
        return $('//*[@id="txtMobile"]');
    }
    get clickEmailButton(){
        return $('//*[@id="userInfo"]/div[1]/div/fieldset/div[2]/label/span[1]');
    }
    get enterPassword(){
        return $('//*[@id="txtPassword"]');
    }
    get enterRePassword(){
        return $('[//*[@id="txtPassword"]');
    }
    get clickAgreButton(){
        return $('//*[@id="checkCodition"]');
    }
    get clickSubscribeButton(){
        return $('//*[@id="termAndCondition"]/div[2]/label/input');
    }
    get clickSubmitButton(){
        return $('//*[@id="Continue"]');
    }


    async createAccount(){
        await this.createAccountLocator.click();
        await browser.pause(30000)
        // await this.clickCreatAccountButton.click();
        // await browser.pause(3000)
        // await this.enterUserName.setValue("Raihan");
        // await browser.pause(3000)
        // await this.selectGender.click();
        // await browser.pause(3000)
        // await this.clickSkillType.click();
        // await browser.pause(3000)
        // await this.selectSkillType.click();
        // await browser.pause(3000)
    }
}
module.exports = new SighnUpPage();