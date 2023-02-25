import { Given, When, Then } from '@cucumber/cucumber'
import * as login from '../testFramework/login'

Given('the user is on the {string} page', async (expectedText) => {
    const location = '//*[@id="titleHead"]'
    await login.onPageSpecific(expectedText, location);
});

Given('a user has input their username {string}', async (expectedText) => {
    const location = "//*[@id='username']";
    await login.username(expectedText, location);
});

Given('a user has input their password {string}', async (expectedText) =>  {
    const location = "//*[@id='password']";
    await login.password(expectedText, location);
});

When('the user clicks login button', async () => {
    const location = "//*[@id='login']"
    await login.button(location);
});

Then('the user sees {string}', async (expectedText) => {
    await login.onPageAnywhere(expectedText);
});