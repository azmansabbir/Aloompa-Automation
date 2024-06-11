import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class Design {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    private Design_elements = {
        click_design:"//span[text()='Design']",
        Splash_Page:"//a[@title='Splash Page']",
        Splash_Page_Logo_btn:"//input[@type='file']",
        save_btn:"//span[text()='Save']",
        remove_image:"//span[text()='Remove Image']",
        Change_image:"//div[text()='CHANGE IMAGE']",
        splash_bg_color_code:"(//label[text()='Splash Background Color']/following::input)[2]",
        Splash_bg_Color_Element:"//div[@style='background: rgb(18, 52, 86);']",
        events_button_color_fill:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[2]",
        events_button_color_code:"//span[text()='Create Account']//parent::span/parent::button[1]",
        events_buttton_text_color_fill:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[3]",
        events_buttton_text_color_code:"//span[text()='Create Account']",
        firstName:"(//label[text()='Events Button Text Color']/following::input)[3]",
        lastName:"//input[@placeholder='Last Name']",
        Email:"//input[@placeholder='Email Address']",
        Phone:"//input[@placeholder='Mobile Number']",
        comming_soon:"//a[@title='Coming Soon']",
        comming_soon_text:"(//h1[text()='Coming Soon'])[1]",
        preview_section:"(//div[@class='sc-kksqOZ dJhOjf']//div)[1]",
        title:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[1]",
        title_clear_by_fill:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[1]",
        title_text_in_preview:"//h1[text()='Coming Soon-1']",
        sub_title_text_in_preview:"//h2[text()='Check back later for more information.']",
        sub_title:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[2]",
        Line_1_coming_soon:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//textarea)[1]",
        Line_1_coming_soon_preview:"(//p[text()='Coming Soon-1'])[1]",
        Line_2_coming_soon:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//textarea)[2]",
        Line_2_coming_soon_preview:"(//p[text()='Coming Soon-1'])[2]",
        click_tool_tip:"(//label[@class='sc-iNqMTl hFrbFX']//div)[1]",
        verify_btn_visibility:"(//button[@data-testid='button'])[3]",
        sub_title_clear_by_fill:"//input[@class='MuiInputBase-input MuiOutlinedInput-input']",




    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  

    async click_design1(){
        const ele = this.page.locator(this.Design_elements.click_design)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  Splash_Page
    async Splash_Page(){
        const ele = this.page.locator(this.Design_elements.Splash_Page)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  comming_soon
    async comming_soon(){
        const ele = this.page.locator(this.Design_elements.comming_soon)
        

        try {
            await ele.click();
           
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  comming_soon
    async click_tool_tip(){
        const ele = this.page.locator(this.Design_elements.click_tool_tip)
        

        try {
            
            ele.dblclick();
           
           
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: comming_soon_text 
    async comming_soon_text(){
       
        const ele = this.page.locator(this.Design_elements.comming_soon_text)

        try {
            
             ele.isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  preview_section
    async preview_section(){
       
        const ele = this.page.locator(this.Design_elements.preview_section)

        try {
            
             ele.isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }






    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  save_button
    async save_btn(){
        const ele = this.page.locator(this.Design_elements.save_btn)
        try {
            await ele.click()
                
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  save_button
    async verify_btn_visibility(){
        const ele = this.page.locator(this.Design_elements.verify_btn_visibility)
        try {
            await ele.isVisible()
                
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  remove_image
    async remove_image(){
        const ele = this.page.locator(this.Design_elements.remove_image)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  Change_image

    async Change_image(){
        const ele = this.page.waitForSelector(this.Design_elements.Change_image)
        try {
            (await ele).isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  fill_color_code

    async fill_color_code(value1:string){
        const ele = this.page.locator(this.Design_elements.splash_bg_color_code)
        try {
            await ele.fill(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  events_button_color
    async events_button_color(value1:string){
        const ele = this.page.locator(this.Design_elements.events_button_color_fill)
        try {
            await ele.fill(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  events_button_text_color_fill
    async events_button_text_color_fill(value1:string){
        const ele = this.page.locator(this.Design_elements.events_buttton_text_color_fill)
        try {
            await ele.fill(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  firstName
    async firstName(value:string){
        const ele = this.page.locator(this.Design_elements.firstName)
        await ele.type(value,{delay:100})
    }

    



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  lastname
    async lastname(value:string){
        const ele = this.page.locator(this.Design_elements.lastName)
        await ele.type(value,{delay:100})
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  email typing
    async email(value:string){
        const ele = this.page.locator(this.Design_elements.Email)
        await ele.type(value,{delay:100})
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  phone number typeing
    async phone(value:string){
        const ele = this.page.locator(this.Design_elements.Phone)
        await ele.type(value,{delay:100})
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  title_coming_soon
    async title_coming_soon(value:string){
        const ele = this.page.locator(this.Design_elements.title)
        await ele.type(value,{delay:100})
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  Line_1_coming_soon
    async Line_1_coming_soon(value:string){
        const ele = this.page.locator(this.Design_elements.Line_1_coming_soon)
        await ele.type(value,{delay:100})
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Line_2_coming_soon 
    async Line_2_coming_soon(value:string){
        const ele = this.page.locator(this.Design_elements.Line_2_coming_soon)
        await ele.type(value,{delay:100})
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  sub_title_coming_soon
    async sub_title_coming_soon(value:string){
        const ele = this.page.locator(this.Design_elements.sub_title)
        await ele.type(value,{delay:100})
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  line_1_clear_by_fill
    async line_1_clear_by_fill(value1:string){
        const ele = this.page.locator(this.Design_elements.Line_1_coming_soon)
        try {
            await ele.fill(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  line_2_clear_by_fill
    async line_2_clear_by_fill(value1:string){
        const ele = this.page.locator(this.Design_elements.Line_2_coming_soon)
        try {
            await ele.fill(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: title_clear_by_fill 
    async title_clear_by_fill(value1:string){
        const ele = this.page.locator(this.Design_elements.title_clear_by_fill)
        try {
            await ele.fill(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: title_clear_by_fill 
    async sub_title_clear_by_fill(value1:string){
        const ele = this.page.locator(this.Design_elements.sub_title_clear_by_fill)
        try {
            await ele.fill(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  sub_title_clear_by_fill
    async sub_title_clear_by_fill(value1:string){
        const ele = this.page.locator(this.Design_elements.sub_title)
        try {
            await ele.fill(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: title_text_in_preview 
    async title_text_in_preview(value1:string){
        const ele = this.page.locator(this.Design_elements.title_text_in_preview)
        const ele2 = this.page.locator(this.Design_elements.title)
        try {
            await expect.soft(ele).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: line_1_text_in_preview 
    async line_1_text_in_preview(value1:string){
        const ele = this.page.locator(this.Design_elements.Line_1_coming_soon_preview)
        
        try {
            await expect.soft(ele).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  line_2_text_in_preview
    async line_2_text_in_preview(value1:string){
        const ele = this.page.locator(this.Design_elements.Line_2_coming_soon_preview)
        try {
            await expect.soft(ele).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  sub_title_text_in_preview
    async sub_title_text_in_preview(value1:string){
        const ele = this.page.locator(this.Design_elements.sub_title_text_in_preview)
        // const ele2 = this.page.locator(this.Design_elements.title)
        try {
            await expect.soft(ele).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | design |  Error occured: '+error)       
        }
    }


    
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  splash_bg_color_code
    async splash_bg_color_code(value1:string) {
        const ele = this.page.locator(this.Design_elements.Splash_bg_Color_Element)

        const color = await ele.evaluate((ele1)=>{

            return window.getComputedStyle(ele1).getPropertyValue(`background-color`)
        });
        
        try {
                
            expect (color).toBe(value1)  
        } catch (error) {
                throw new Error(`color not matched"${error}"`)
        }
    }

    



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: events_buttton_color_code
    async events_buttton_color_code(value1:string) {
        const ele = this.page.locator(this.Design_elements.events_button_color_code)

        const color = await ele.evaluate((ele1)=>{

            return window.getComputedStyle(ele1).getPropertyValue(`background-color`)
        });
        
        try {
                
            expect (color).toBe(value1)  
        } catch (error) {
                throw new Error(`color not matched"${error}"`)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: events_buttton_text_color_code
    async events_buttton_text_color_code(value1:string) {
        const ele = this.page.locator(this.Design_elements.events_buttton_text_color_code)

        const color = await ele.evaluate((ele1)=>{

            return window.getComputedStyle(ele1).getPropertyValue(`color`)
        });
        
        try {
                
            expect (color).toBe(value1)  
        } catch (error) {
                throw new Error(`color not matched"${error}"`)
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: file_uploader_for_splash_page_logo_file
    async file_uploader_for_splash_page_logo_file(value:string) {
        const filePath0 = `testData/images/${value}`
        const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.locator(this.Design_elements.Splash_Page_Logo_btn).click()
            
        ]);
        await fileChooser.setFiles([filePath0]);
        
        
      }





}