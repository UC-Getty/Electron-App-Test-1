import { page } from '../steps/todoContext'

export async function login(username: string) {

    await page.fill("//*[@id='username']",username)
    await page.waitForTimeout(1000);
    //hi 

}

