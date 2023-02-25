import { After, Before, setDefaultTimeout, World} from "@cucumber/cucumber"
import { openApp, closeApp, page, electronApp } from '../testFramework/open'

//setDefaultTimeout(6000);

Before(async () =>{
    return await openApp();
});

After(async function () {
    var buffer = await page.screenshot();
    this.attach(buffer,"image/png");

    await closeApp();

});

export {page, electronApp}