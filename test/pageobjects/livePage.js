const Page = require('./page');

 
class LivePage extends Page {
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

    async clicklivejoblocator(){
        await this.livejoblocator.click();
    }
    async clickvacensieslocator(){
        await this.vacensieslocator.click();
    }
    async clickcompanieslocator(){
        await this.companieslocator.click();
    }
    async clicknewjoblocator(){
        await this.newjoblocator.click();
    }

    open() {
        return super.open('');
    }
}
module.exports = new LivePage();