const reporter = require('cucumber-html-reporter');

var date = new Date();
var currentDate = date.getDate() + '_' + (date.getMonth()+1) + '_' + date.getFullYear() + '_' + date.getHours() + date.getMinutes();

var options = {
    brandTitle: "demo test secnarios",
    theme: 'bootstrap',
    jsonFile: 'Reports/myApp_test_report.json',
    output: 'Reports/myApp_test_report' + currentDate + '.html',
    screenshotsDirectory: './Screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    launchReport: true,
};

reporter.generate(options);
