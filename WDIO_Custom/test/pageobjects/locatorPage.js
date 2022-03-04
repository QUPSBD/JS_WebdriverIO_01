 
class Locators{
    
    // sighn in locators 
    get clickSignIn(){
         
        return $('//*[@id="lin_header_mid02"]/div[1]/div/nav/ul/li[6]/a');
    }
    get clickSignIn2(){
        return $('/html/body/div[7]/div/nav/ul/li[6]/a');
    }
   
    get inputUsername() {
        return $('#TXTUSERNAME');
    }
    get clickNext(){
        return $('//*[@id="form1"]/div[2]/div/div[2]/div/div[2]/input');
    }

    get inputPassword() {
        return $('//*[@id="PASS"]');
    }

    get btnSubmit() {
        return $('//*[@id="form1"]/div[2]/div/div[2]/div/div[2]/input');
    }
    //divisional Locators
    get dhakalocator(){
        return $('//*[@id="main"]/div/div[2]/div/div[1]/div/a[1]');
    }
    get barishallocator(){
        return $('//*[@id="main"]/div/div[2]/div/div[1]/div/a[2]');
    }
    get rangpurlocator(){
        return $('//*[@id="main"]/div/div[2]/div/div[1]/div/a[7]');
    }

    // job Search locators
    get enterKeyword(){
        return $('//*[@id="txtKeyword"]');
    }
    get clickOrganizationType(){
        return $('//*[@id="qOT"]');
    }
    get selectOrganizationType(){
        return $('//*[@id="qOT"]/option[5]');
    }
    get clickSearchButton(){
        return $('//*[@id="main"]/div/div/div/div[6]/div[2]/form/button');
    }

    //live page locators
    get livejoblocator(){
        return $('//*[@id="main"]/div/div[1]/div/div[2]/a[1]/div');
    }
    get vacensieslocator(){
        return $('//*[@id="main"]/div/div[1]/div/div[2]/a[2]/div');
    }
    get companieslocator(){
        return $('//*[@id="main"]/div/div[1]/div/div[2]/a[3]/div');
    }
    get newjoblocator(){
        return $('//*[@id="main"]/div/div[1]/div/div[2]/a[4]/div');
    }

    //main navbar locators
    get testEmployalibility(){
        return $('//*[@id="lin_header_mid02"]/div[1]/div/nav/ul/li[2]/a');
    }
    get jobSearch(){
        return $('//*[@id="lin_header_mid02"]/div[1]/div/nav/ul/li[3]/a');
    }
    get quickLink(){
        return $('/html/body/div[8]/div/nav/ul/li[4]/a/span');
    }
    get careerResource(){
        return $('/html/body/div[8]/div/nav/ul/li[5]/a');
    }

    //quick link locators
    get quickLink(){
        return $('/html/body/div[8]/div/nav/ul/li[4]/a/span');
    }
    get clickNewJob(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[1]/a');
    }
    get deadline(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[2]/a');
    }
    get partTime(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[3]/a');
    }
    get contractual(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[4]/a');
    }
    get government(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[5]/a');
    }
    get locationwise(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[6]/a');
    }
    get employerlist(){
        return $('//*[@id="lin_header_top02"]/div[5]/div/nav/ul/li[4]/ul/li[7]/a');
    }

    //sighn up locators
    get clickSignIn(){
         
        return $('//*[@id="bs-example-navbar-collapse-1"]/ul/li[3]/a');
    }
    get clickCreatAccountButton(){
        return $('//*[@id="bs-example-navbar-collapse-1"]/ul/li[3]/ul/li/div[1]/div[2]/div[3]/a[2]');
    }
    get clickgeneralcreateAccountButton(){
        return $('//*[@id="wcj"]/div/div/div[3]/div');
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
    get clickPhoneButton(){
        return $('//*[@id="userInfo"]/div[1]/div/fieldset/div[3]/label/span[1]/span');
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

    //topbar locators
    get clickMybdJobs(){
        return $('//*[@id="menu"]/div/ul/li[2]/a');
    }
    get clickTrainning(){
        return $('//*[@id="menu"]/div/ul/li[3]/a');
    }
    get clickEmployers(){
        return $('//*[@id="menu"]/div/ul/li[4]/a')
    }

}
module.exports = new Locators();