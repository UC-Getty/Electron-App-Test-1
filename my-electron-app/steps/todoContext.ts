import { After, Before, setDefaultTimeout} from "@cucumber/cucumber"
import { _electron as electron, Page, ElectronApplication, BrowserContext } from "playwright";

//Set global variables
let electronApp: ElectronApplication
let page: Page
let context: BrowserContext

setDefaultTimeout(6000);

Before(async () =>{
     // Launch Electron app.
    electronApp = await electron.launch({ args: ['main.js'] });
    // electronApp = await electron.launch({ args: ["."] });
    context = electronApp.context();
    //await context.tracing.start({ screenshots: true, snapshots: true });
    page = await electronApp.firstWindow();

    //await page.screenshot({ path: 'tests/screenshot/firstWindow.png' });
    return page;
});

After(async () => {
    await electronApp.close();

});

export {page, electronApp}