
let homepage= require('../pages/homepage');
describe('calculator test',function()                                                      //jasmine  
{
   it('addition test',function()                                                            //jasmine
   {
   
   
    //browser.get('http://juliemr.github.io/protractor-demo/');     //protractor
     homepage.get('http://juliemr.github.io/protractor-demo/');

  // expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');

    

   // element(by.model('first')).sendKeys('5');                //protractor
      homepage.enter_firstno('8');

    //element(by.model('second')).sendKeys('8');              //protractor
      homepage.enter_secondno('5');

    //element(by.css('[ng-click="doAddition()"]')).click();   //protractor
      homepage.enter_gobutton();


    //let input=element(by.cssContainingText('.ng-binding','13'));     //protractor
       homepage.verify('13')
    
    //expect(output.getText()).toEqual('13');    //jasmine

    browser.sleep(3000);
    

   });

});