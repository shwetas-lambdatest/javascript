
username= process.env.LT_USERNAME || "shwetas",
accessKey=  process.env.LT_ACCESS_KEY || "xhfQswR7GO3VwyFjTXOKTvcAwHBIFcbq86Qq3xbZ0TiKFtmbve",



exports.config = {

   //directConnect: true,
    seleniumAddress: 'https://'+ username +':'+ accessKey  +'@hub.lambdatest.com/wd/hub',
   
  // add more browsers to this array for more parallel tests!!
     
  capabilities:  {
    'build': 'protractor testing',
    'browserName': 'chrome',
    'version':'73.0',
    'platform': 'WIN10',
    'video': true,
    'network': true,
    'console': true,
    'visual': true
  },
     framework: 'jasmine',
       
  //Add test scripts in this array to execute in parallel
  specs: ['../tests/lambdatodo1.js'],


};