import { _electron as electron, Page, ElectronApplication, BrowserContext } from "playwright";
import { test, expect } from "@playwright/test";

//Set global variables
let electronApp: ElectronApplication
let page: Page
let context: BrowserContext

test.beforeAll(async () =>{
     // Launch Electron app.
    electronApp = await electron.launch({ args: ['main.js'] });
    electronApp = await electron.launch({ args: ["."] });
    context = electronApp.context();
    await context.tracing.start({ screenshots: true, snapshots: true });
    page = await electronApp.firstWindow();

    await page.screenshot({ path: 'tests/screenshot/firstWindow.png' });
    expect(await page.screenshot()).toMatchSnapshot('firstWindow.png');
})


test.describe('test sequence', () => {

test("login", async () =>{

    //Enter username and password and click login
    await page.fill("//*[@id='username']","test")
    await page.fill("//*[@id='password']","12345678")
    await page.click("//*[@id='login']")

    //waits for the element with the xPath is loaded
    await page.waitForSelector("//*[@id='test-p']")

    //gets the text within that element with the specified xPath
    const text = await page.$eval("//*[@id='test-p']", (el) => el.textContent)

    //Do an expect test for that text
    expect(text).toBe('Welcome to your Electron application.')
    
    //Sleep for 5secs so we can see the page 
    await page.waitForTimeout(5000);

    // Exit app.
    // await electronApp.close();


})

test('checks for "Welcome to your Electron application." text', async () => {
    //waits for the element with the xPath is loaded
    await page.waitForSelector("//*[@id='test-p']")
    //gets the text within that element with the specified xPath
    const text = await page.$eval("//*[@id='test-p']", (el) => el.textContent)

    //Do an expect test for that text
    //expect(text).toBe('Hello World!')
    expect(text).toBe('Welcome')

    //Sleep for 5secs so we can see the page 
    await page.waitForTimeout(5000);
    

})

test("Check if 1 + 2 equals 3", async () =>{
    //     await page.fill("//*[@id='input-email']", "chansuck@ualberta.ca")
//     await page.fill("//*[@id='input-password']", "password")
//     await page.click("input[value='Login']");

    //Fill in numbers and click "Add numbers" button
    await page.fill("//*[@id='first-number']","1")
    await page.fill("//*[@id='second-number']","2")
    await page.click("//*[@id='add']")

    const sumOfNumbers = await page.$eval("//*[@id='answer']", (el) => el.textContent)
    expect(sumOfNumbers).toBe('3')
    
    //Sleep for 5secs so we can see the page 
    await page.waitForTimeout(5000);

    // Exit app.
    // await electronApp.close();


})

test('find 3', async () => {
    //waits for the element with the xPath is loaded
    await page.waitForSelector("//*[@id='answer']")
    //gets the text within that element with the specified xPath
    const text = await page.$eval("//*[@id='answer']", (el) => el.textContent)

    //Do an expect test for that text
    //expect(text).toBe('Hello World!')
    expect(text).toBe('3')

    //Sleep for 5secs so we can see the page 
    await page.waitForTimeout(5000);
    

})

});



// test.afterEach( async () => {
//     await context.tracing.stop({ path: 'tests/tracing/trace.zip' });
//     await electronApp.close();
// })
// test("Check Screenshot", async () => {
//     await page.screenshot({ path: "tests/screenshot/page.png" });
//     expect(await page.screenshot()).toMatchSnapshot("page.png");
// });