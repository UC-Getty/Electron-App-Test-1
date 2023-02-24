
import { _electron as electron, Page, ElectronApplication, BrowserContext } from "playwright";

let electronApp: ElectronApplication
let page: Page
let context: BrowserContext

export async function openApp() {

     // Launch Electron app.
     electronApp = await electron.launch({ args: ['main.js'] });
     // electronApp = await electron.launch({ args: ["."] });
     context = electronApp.context();
     //await context.tracing.start({ screenshots: true, snapshots: true });
     page = await electronApp.firstWindow();
 
     //await page.screenshot({ path: 'tests/screenshot/firstWindow.png' });
     return page;
}

export async function closeApp() {
    await electronApp.close();
}

export {page, electronApp}