import { After, Before, setDefaultTimeout} from "@cucumber/cucumber"
import { openApp, closeApp, page, electronApp } from '../testFramework/open'

//Set global variables


setDefaultTimeout(6000);

Before(async () =>{
    return await openApp();
});

After(async () => {
    await closeApp();

});

export {page, electronApp}