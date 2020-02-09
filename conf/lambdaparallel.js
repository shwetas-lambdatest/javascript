username= process.env.LT_USERNAME || "shwetas",
accessKey=  process.env.LT_ACCESS_KEY || "xhfQswR7GO3VwyFjTXOKTvcAwHBIFcbq86Qq3xbZ0TiKFtmbve",



exports.config = {

   //directConnect: true,
    seleniumAddress: 'https://'+ username +':'+ accessKey  +'@hub.lambdatest.com/wd/hub',
   
  // add more browsers to this array for more parallel tests!!
     
  'commonCapabilities': {
    'build': 'protractor-selenium',
    'name': 'parallel-test',
    'tunnel': false
  },

  multiCapabilities: [{
    'browserName': 'Chrome',
    'version':'79.0',
    'platform': 'WIN8.1'
    
  },{
    'browserName': 'Safari',
    'version':'11.0',
    'platform': 'macOS 10.13'
    
  },{
    'browserName': 'Edge',
    'version':'18',
    'platform': 'WIN10'
    
  },{
    'browserName': 'Firefox',
    'version':'70.0',
    'platform': 'WIN8'
    
  },{
    'browserName': 'Internet explorer',
    'version':'11.0',
    'platform': 'WIN10'
    
  }],
     framework: 'jasmine',
       
  //Add test scripts in this array to execute in parallel
  specs: ['../tests/calculator.js'],
  onPrepare: () => {

    myReporter = {
        specStarted: function(result) {
          specStr= result.id
          spec_id = parseInt(specStr[specStr.length -1])
          browser.getProcessedConfig().then(function (config) {
            var fullName = config.specs[spec_id];
            //var fileName = fullName.substring(fullName.lastIndexOf('/')+1);
            browser.executeScript("lambda-name="+fullName.split(/(\\|\/)/g).pop())
          });
        }
      };
      jasmine.getEnv().addReporter(myReporter);
  },
  onComplete: () => {
    browser.quit();
  }

};