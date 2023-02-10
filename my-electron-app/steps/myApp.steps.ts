import { Given, When, Then } from '@cucumber/cucumber'
import { page } from '../steps/todoContext'
import { expect } from '@playwright/test'

// ? Given the user is on the 'LOGIN PAGE'
// Undefined. Implement with the following snippet:

Given('the user is on the {string} page', async (expectedText) => {
    // Write code here that turns the phrase above into concrete actions
    //waits for the element with the xPath is loaded
    await page.waitForSelector('//*[@id="titleHead"]')
    // //gets the text within that element with the specified xPath
    const actualText = await page.$eval('//*[@id="titleHead"]', (el) => el.textContent)
    // //Do an expect test for that text
    // //expect(text).toBe('Hello World!')
    expect(actualText).toBe(expectedText)
   // await expect(page.getByText(expectedText)).toBeVisible();
    await page.waitForTimeout(1000);
});

// ? And a user has input their "USERNAME"
// Undefined. Implement with the following snippet:

Given('a user has inputs their username {string}', async (expectedText) => {
    // Write code here that turns the phrase above into concrete actions
    // await page.getByPlaceholder('username').fill(expectedText)
    await page.fill("//*[@id='username']",expectedText)
    await page.waitForTimeout(1000);
});

// ? And a user has input their "PASSWORD"
// Undefined. Implement with the following snippet:

Given('a user has inputs their password {string}', async (expectedText) =>  {
    // Write code here that turns the phrase above into concrete actions
    await page.fill("//*[@id='password']",expectedText)
    //await page.getByPlaceholder("password").fill(expectedText)
   await page.waitForTimeout(1000);
});
//test
// ? When the user clicks login button
// Undefined. Implement with the following snippet:

When('the user clicks login button', async () => {
    // Write code here that turns the phrase above into concrete actions
    await page.click("//*[@id='login']")
    await page.waitForTimeout(1000); 
});

// ? Then the user sees "HELLO WORLD"
// Undefined. Implement with the following snippet:

Then('the user sees {string}', async (expectedText) => {
    // Write code here that turns the phrase above into concrete actions
    //waits for the element with the xPath is loaded
    await page.waitForSelector("//*[@id='test-p']")

    //gets the text within that element with the specified xPath
    const actualText = await page.$eval("//*[@id='test-p']", (el) => el.textContent)

    //Do an expect test for that text
    expect(actualText).toBe(expectedText)
    
    //Sleep for 5secs so we can see the page 
    await page.waitForTimeout(1000);
});