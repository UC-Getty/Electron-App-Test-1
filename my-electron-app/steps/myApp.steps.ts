import { Given, When, Then } from '@cucumber/cucumber'
import { page } from '../steps/todoContext'
import { expect } from '@playwright/test'
import * as login from '../testFramework/login'

// ? Given the user is on the 'LOGIN PAGE'
// Undefined. Implement with the following snippet:

Given('the user is on the {string} page', async (expectedText) => {
    const location = '//*[@id="titleHead"]'
    await login.onPageSpecific(expectedText, location);
});

// ? And a user has input their "USERNAME"
// Undefined. Implement with the following snippet:

Given('a user has input their username {string}', async (expectedText) => {
    const location = "//*[@id='username']";
    await login.username(expectedText, location);
});

// ? And a user has input their "PASSWORD"
// Undefined. Implement with the following snippet:

Given('a user has input their password {string}', async (expectedText) =>  {
    // Write code here that turns the phrase above into concrete actions
    const location = "//*[@id='password']";
    await login.password(expectedText, location);
});
// ? When the user clicks login button
// Undefined. Implement with the following snippet:

When('the user clicks login button', async () => {
    // Write code here that turns the phrase above into concrete actions
    const location = "//*[@id='login']"
    await login.button(location);
});

// ? Then the user sees "HELLO WORLD"
// Undefined. Implement with the following snippet:

Then('the user sees {string}', async (expectedText) => {

    await login.onePageAnywhere(expectedText);
});