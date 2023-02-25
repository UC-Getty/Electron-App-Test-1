import { page } from '../steps/todoContext'
import { expect } from '@playwright/test'

export async function username(username: string, location: string) {
    await page.fill(location, username)
    //await page.waitForTimeout(1000); 
}

export async function password(password: string, location: string) {
    await page.fill(location, password)
    //await page.waitForTimeout(1000);
}

export async function onPageSpecific(pageTitle: string, location: string) {
    await page.waitForSelector(location)
    const actualText = await page.$eval(location, (el) => el.textContent)
    expect(actualText).toBe(pageTitle)
    //await page.waitForTimeout(1000);
}

export async function button(location: string) {
    await page.click(location)
    //await page.waitForTimeout(1000); 
}

export async function onPageAnywhere(prompt: string) {
    await expect(page.getByText(prompt)).toBeVisible();
    //Sleep for 5secs so we can see the page 
    //await page.waitForTimeout(1000);
}
