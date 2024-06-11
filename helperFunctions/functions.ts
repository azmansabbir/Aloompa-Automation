import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class functions{
        [x: string]: any;

        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }

        private functionelements = {
                ok_button:'//span[text()="OK"]//parent::button',
                next_button:'//button[@class="MuiButtonBase-root MuiIconButton-root MuiPickersCalendarHeader-iconButton"]',
                calendar_button:'//button[@class="MuiButtonBase-root MuiIconButton-root"]',
                year_selector:'//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiPickersToolbarButton-toolbarBtn"]',
                save_button:"//span[text()='Save']"
               
        }



        async fontUploadFunction() {
                const filePath0 = "files/Thin.otf"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })                
        }

        async bannerImageUploadFunction() {
                const filePath0 = "testData/images/CountDownStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })                
        }

        async click_calendar_button(){
                const ele = this.page.locator(this.functionelements.calendar_button).first()
                try {
                    await ele.click()
                    
                } catch (error) {
                    throw new Error('Aloompa|admin | Reservations | Save button input element is missing |  Error occured: '+error)       
                  
                } 
            }
            async date_input_by_calendar(datevalue:string){
        
                const date_ele= this.page.locator(`//p[text()="${datevalue}"]//parent::span//parent::button`)
                try {
                    await date_ele.click()
                } catch (error) {
                    throw new Error('Aloompa|admin | Reservations | Save button input element is missing |  Error occured: '+error)       
                  
                } 
            }
        
            async month_input_by_calendar(monthvalue:string){
                const month_ele=this.page.locator(`//p[text()='${monthvalue}']`)
                const next_button=this.page.locator(this.functionelements.next_button).first()
                try {
            
                    do {
                        await next_button.click()
                    } 
                    while (!await month_ele.isVisible());
                } catch (error) {
                    throw new Error('Aloompa|admin | Reservations | Save button input element is missing |  Error occured: '+error)       
                  
                } 
            }
        
            async year_input_by_calendar(year_value:string){
                const ele = this.page.locator(this.functionelements.year_selector).first()
                const year_ele= this.page.locator(`//div[text()="${year_value}"]`)
              try {
                    await ele.click()
                    await year_ele.click()
                  
                } catch (error) {
                    throw new Error('Aloompa|admin | Reservations | Save button input element is missing |  Error occured: '+error)       
                  
                } 
            }
        
            async click_ok_button(){
                const ok_button=this.page.locator(this.reservation_page_elements.ok_button)
                try {
                    await ok_button.click()
                } catch (error) {
                    throw new Error('Aloompa|admin | Reservations | Save button input element is missing |  Error occured: '+error)       
                  
                } 
            }


            async select_timezone(value:string){
                const list_ele=this.page.locator(`//li[@data-value="${value}"]`)
                try {
                 await list_ele.click()
                } catch (error) {
                 throw new Error('Aloompa|admin | Apps directory | selected timezon dropdown list input element not found : Error occured'+error)
            
                }
             }


            // Module Name: Aloompa | Admin
            // Feature Name: LiveOrder&reservations
            // Screen Type: Desktop
            // Description: Click "Save" button
            async click_save(){
                const ele = this.page.locator(this.functionelements.save_button)
                try {
                    
                        await ele.dblclick({force: true})
                        await this.page.waitForTimeout(50000)
                    }
                   
                 catch (error) {
                    throw new Error('Aloompa|admin | Reservations | Save button element is missing |  Error occured: '+error)       
                
                } 
            }
            


}