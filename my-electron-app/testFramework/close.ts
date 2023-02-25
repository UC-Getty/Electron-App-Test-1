import { _electron as electron, Page, ElectronApplication, BrowserContext } from "playwright";

//Set global variables
let electronApp: ElectronApplication
let page: Page
let context: BrowserContext

export async function closeElectronApp() {
    await electronApp.close();
}