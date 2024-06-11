import { expect, Page } from "@playwright/test";
export default class LoginPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: login with valid data
    async login(username: string, password: string) {
        await this.enterEmail(username);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: login with invalid data
    async loginNegative(invalidusername: string, invalidpassword: string) {
        await this.enterEmail(invalidusername);
        await this.enterLoginPassword(invalidpassword);
        await this.clickLoginBtn();
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: login User name or Email
    async enterEmail(emailaddress: string) {
        await this.page.locator(`//input[@name="username"]`)
            .type(emailaddress);
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: login password
    async enterLoginPassword(password: string) {
        await this.page.locator(`//input[@name="password"]`)
            .type(password);
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: log out button
    async clickLogoutBtn() {
        await this.page.locator("//li[text()='Sign Out']")
            .click()
    }


    // async shouldBeshowInvalidCredentials() {
    //     const ele = this.page.locator("text=Invalid credentials")
    //     expect(ele).toContainText("Invalid credentials")
    // }
    // async shouldShowUserNameIsNotEmpty() {
    //     const ele = this.page.locator(`//p[text()='"username" is not allowed to be empty']`)
    //     expect(ele).toContainText(`"username" is not allowed to be empty`)
    // }
    // async clickInvalidCredantialsWindowOkBtn() {
    //     const ele = this.page.locator("text=Ok")
    //     expect(ele).toContainText("Ok")
    //     await ele.click()
    // }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: LogIn button
    async clickLoginBtn() {
        const ele=this.page.locator(`//button[@data-testid="button"]`)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Click on Login button Failed' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  cheking login page incorrect massage alert
    async check_the_incorrect_text(){
        const ele=this.page.locator("//div[text()='User does not exist.']")
        try {
            await expect.soft(ele).toBeVisible()    
        } catch (error) {
            throw new Error('Incorrect message not found' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: cheking login page logo image
    async check_the_logo_image(){
        const ele=this.page.locator("//img[@title='app-factory']")
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('image not found' + error)
        }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  cheking "Sign in to your account" Text Visible
     async check_SignIn_to_your_account_Text(){
        const ele=this.page.locator("//h2[text()='Sign in to your account']")
        try {
            await expect.soft(ele).toContainText("Sign in to your account")
        } catch (error) {
            throw new Error('image not found' + error)
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: cheking login button visibility
    async login_button_visibility(){
        const ele=this.page.locator("//span[text()='Sign In']")
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('image not found' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: cheking login button clikeble
    async login_button_Clickable(){
        const ele=this.page.locator("//div[@class='sc-lbNHPp gSVqtQ']//button[1]")
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('image not found' + error)
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  cheking Sign button Text
     async SignIn_button_Text_Visible(){
        const ele=this.page.locator("(//span[contains(text(),'Sign In')])[1]")
        try {
            await expect.soft(ele).toContainText("Sign In")
        } catch (error) {
            throw new Error('Text not found' + error)
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: cheking user name warning massage
     async Empty_Email_Text_warning(){
        const ele=this.page.locator("(//div[contains(@class,'MuiPaper-root MuiAlert-root')]//div)[2]")
        try {
            await expect.soft(ele).toContainText("Username cannot be empty")
        } catch (error) {
            throw new Error('Text not found' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  cheking Forgot password button
       async Forgot_password_button(){
        const ele=this.page.locator("(//div[@class='sc-lbNHPp gSVqtQ']//p)[3]")
        try {
            await expect.soft(ele).toContainText("Forget your password?")
        } catch (error) {
            throw new Error(' Forgot password Text not found' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  cheking reset password button visible
      async Check_reset_button(){
        const ele=this.page.locator("//a[contains(text(),'Reset Password')]")
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Text not found' + error)
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  cheking reset password button is clickable
    async Check_reset_is_clickable(){

        const ele=this.page.locator("//a[contains(text(),'Reset Password')]").click()
        const ele2=this.page.locator("//h2[text()='Reset your password']")
        try {
            await expect.soft(ele2).toContainText("Reset your password")
        } catch (error) {
            throw new Error('Text not found' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  cheking "Reset your password" Text
    async Check_Reset_your_password_Text(){
        const ele=this.page.locator("//a[contains(text(),'Reset Password')]").click()
        const ele2=this.page.locator("//h2[text()='Reset your password']")
        try {
            await expect.soft(ele2).toContainText("Reset your password")
        } catch (error) {
            throw new Error('Text not found' + error)
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: resend code email 
     async enterRestEmail(ResendCodeEmailAddress: string) {
        await this.page.locator(`//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input[1]`)
            .type(ResendCodeEmailAddress);
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click reset code button
    async resetCode(ResendCodeEmailAddress: string) {
        await this.enterRestEmail(ResendCodeEmailAddress);
        await this.clickSendBtn();
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click Send Code button
       async clickSendBtn() {
        const ele=this.page.locator("//p[@class='sc-hDjjHo cjiQJP']//a[1]").click()
        const ele2=this.page.locator(`//div[contains(@class,'sc-fubCfw sc-dQppl')]//button[1]`)
        try {
            await ele2.click()
        } catch (error) {
            throw new Error('Send code button is not working' + error)
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  cheking 'Back to Sign In'button is clickable
     async Check_Back_to_SignIn_is_clickable(){

        const ele=this.page.locator("//a[contains(text(),'Reset Password')]")
        const ele2=this.page.locator("//a[contains(text(),'Back to Sign In')]")
        const ele3=this.page.locator("//span[contains(text(),'Sign In')]")
        try {
            await ele.click()
            await ele2.click()
            await expect.soft(ele3).toContainText("Sign In")
        } catch (error) {
            throw new Error('Text not found' + error)
        }
    }













    





    // async verifyCueLogoIsVisible() {
    //     const ele = this.page.locator("//h1/preceding::div[@class='MuiBox-root css-uycfjs']")
    //     expect(ele).toBeVisible()
    // }
    // async verifySigninTextIsVisible() {
    //     const ele = this.page.locator("//h1[text()='Sign in']")
    //     expect(ele).toBeVisible()
    // }
    // async verifySigninPageTitleTextIsVisible() {
    //     const ele = this.page.locator("//p[text()='Sign in and start managing your Games!']")
    //     expect(ele).toBeVisible()
    // }
    // async verifyIdLabelIsVisible() {
    //     const ele = this.page.locator("//label[text()='Id']")
    //     expect(ele).toBeVisible()
    // }
    // async verifySecretLabelIsVisible() {
    //     const ele = this.page.locator("//label[text()='Secret']")
    //     expect(ele).toBeVisible()
    // }
    // async inputSecret() {
    //     const ele = this.page.locator("//input[@type='password']")
    //     await ele.fill("Demo Data")
    // }
    // async clickEyeBtn() {
    //     const ele = this.page.locator("//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')]")
    //     expect(ele).toBeVisible()
    //     await ele.click()
    // }
}