

describe('calculator test',function()                                                      //jasmine  
{
   it('addition test',function()                                                            //jasmine
   {
    browser.get('http://juliemr.github.io/protractor-demo/');                               //protractor
   expect(browser.getCurrentUrl()).toBe('http://juliemr.github.io/protractor-demo/');

    

    element(by.model('first')).sendKeys('5');                //protractor

    element(by.model('second')).sendKeys('8');              //protractor

    element(by.css('[ng-click="doAddition()"]')).click();   //protractor

    let input=element(by.cssContainingText('.ng-binding','13'));     //protractor
    
    expect(input.getText()).toEqual('13');    //jasmine

    browser.sleep(2000);
    

   });

});