// cucumber.conf.js file
const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
// you can choose other browsers like webkit or firefox according to your requirements
//onst { chromium } = require("playwright");

// We will be using electron
import { _electron as electron } from "playwright";

const {electron } = require("playwright");

// in milliseconds
setDefaultTimeout(60000);

// launch the app
BeforeAll(async function () {
    global.browser = await electron.launch({ 
        // command to open electron app
        args: ["."]
        // enables use to visually watch the test as it happens
        // headless: false,
        // // slowdown the visuals for users to watch
        // slowNow: 1000,
    });
 });
 
 // close the app
 AfterAll(async function () {
    await global.browser.close();
 });

 // Create a new app context and page per scenario
Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
 });
 
 // Cleanup after each scenario
 After(async function () {
    await global.page.close();
    await global.context.close();
 });
