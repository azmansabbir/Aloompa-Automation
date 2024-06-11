import test, { expect } from "@fixtures/basePages"
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";


test("TLL001-01 | Verify login with valid credentials", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        await page.waitForSelector(`//img[@data-testid="app-factoryIcon"]`,{state:'visible'});
        // Login with valid credentials
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        
        await page.waitForTimeout(3000)

        await AppsPage.typeSearchFunction('2023 Unidev Test 0001')

        //  await AppsPage.waitForElementTovisible('2023 Unidev Test 0001')

        await AppsPage.click_on_app('2023 UniDev Test 0001')

        await page.waitForTimeout(5000)
        await page.locator("(//button[@type='button'])[1]").click();

        await loginPage.clickLogoutBtn()

        // await context.tracing.stop({ path: 'trace0.zip' });
})
test("TLL001-02 | Verify login with invalid credentials", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        await page.waitForSelector(`//img[@data-testid="app-factoryIcon"]`,{state:'visible'});
        // Login with invalid credentials
        await loginPage.loginNegative(data.invalidusername,data.invalidpassword)
        const title = await page.title();
        await page.waitForTimeout(3000)

        const errorTextAlert = await loginPage.check_the_incorrect_text();

        const errorTextAlert2 = await page.locator("//div[text()='User does not exist.']").allTextContents()
        console.log(errorTextAlert2[0]);
        await page.waitForTimeout(3000)


     
})
test("TLL001-03 | Validate Logo Visibility", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        const checkLogo = await loginPage.check_the_logo_image()
        await page.waitForTimeout(3000)


   
})
//comment add 
test("TLL001-04 | Verify login button Visibility ", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        const checkLogo = await loginPage.login_button_visibility()
        await page.waitForTimeout(3000)



})
test("TLL001-05 | Verify 'Sign in to your account' Text Visibility ", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        const checkLogo = await loginPage.check_SignIn_to_your_account_Text()
        await page.waitForTimeout(3000)



})
test("TLL001-06 | Verify SignIn button Text Visibility ", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        const checkSignInText = await loginPage.SignIn_button_Text_Visible()
        await page.waitForTimeout(3000)



})
test("TLL001-07 | Empty Email Text warning ", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        await page.waitForSelector(`//img[@data-testid="app-factoryIcon"]`,{state:'visible'});
        // Login with invalid credentials
        await loginPage.loginNegative(data.EmptyUserName,data.invalidpassword)
        const title = await page.title();
        await page.waitForTimeout(3000)
        const checkSignInText = await loginPage.Empty_Email_Text_warning()
        await page.waitForTimeout(3000)



})
test("TLL001-08 | Verify reset Visibility ", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        const checkSignInText = await loginPage.Check_reset_button()
        await page.waitForTimeout(3000)

})
test("TLL001-09 | Verify reset button is working ", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        const checkSignInText = await loginPage.Check_reset_is_clickable()
        await page.waitForTimeout(3000)

})
test("TLL001-10 | Verify 'Reset your password' Text Visibility ", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        const checkSignInText = await loginPage.Check_Reset_your_password_Text()
        await page.waitForTimeout(3000)



})
test("TLL001-11 | Verify login with invalid credentials", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        await page.locator("//input[@type='email']").type(data.ResendCodeEmailAddress);
        await page.locator("//span[text()='Sign In']").click()
        await page.locator("//div[text()='Incorrect username or password.']").isVisible()


        // await page.locator("//p[@class='sc-hDjjHo cjiQJP']//a[1]").click()
        // // Login with invalid credentials
        // await loginPage.enterRestEmail(data.ResendCodeEmailAddress)
        // const title = await page.title();
        // await page.waitForTimeout(3000)
        // await page.locator("//div[contains(@class,'sc-fubCfw sc-dQppl')]//button[1]").click();
        // await page.waitForTimeout(3000)
  


     
})
test("TLL001-12 | Verify 'Back to Sign In' button is working ", async ({ loginPage, page, browser,AppsPage }) => {

        await page.goto('/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
       
        await loginPage.Check_Back_to_SignIn_is_clickable()
        await page.waitForTimeout(3000)

})




