let homepage=function()
{   

    
    let first_no=element(by.model('first'));
    let sec_no= element(by.model('second'));
    let go_button=element(by.css('[ng-click="doAddition()"]'));




    this.get=function(url){

        browser.get(url);
    }
     
    this.enter_firstno=function(FirstNo){

        first_no.sendKeys(FirstNo);
    };

    this.enter_secondno=function(SecondNo){

        sec_no.sendKeys(SecondNo);
    };

    this.enter_gobutton=function(){

        go_button.click();

    };


     this.verify=function(result)
     {
        let output=element(by.cssContainingText('.ng-binding',result));     //protractor
    
        expect(output.getText()).toEqual(result);
     };

    
   
};

module.exports=new homepage();