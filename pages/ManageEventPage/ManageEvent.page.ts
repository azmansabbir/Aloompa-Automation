import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class MangeEventPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }




    private MangeEventPage_elements = {
        click_design:"(//a[@class='sc-fePcYi jszvzQ'])[1]",
        app_link:'//a[@title]',
        click_manage_event:"//a[@title='Manage Event']//span[1]",
        click_event_details:"//a[@title='Event Details']",
        clear_and_type_event_name:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[1]",
        clear_and_type_Event_Subtitle:"//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//textarea[1]",
        clear_and_type_Event_description:"(//div[@class='DraftEditor-editorContainer']//div)[1]",
        click_Cerate_new_location:"//span[text()='Create New Location']",
        clear_and_type_location_name:"(//label[text()='Location']/following::input)[1]",
        clear_and_type_Address_1:"(//label[text()='Location']/following::input)[2]",
        clear_and_type_Address_2:"(//label[text()='Location']/following::input)[3]",
        clear_and_type_City:"(//label[text()='Location']/following::input)[4]",
        clear_and_type_State:"(//label[text()='Location']/following::input)[5]",
        clear_and_type_Zip:"(//label[text()='Location']/following::input)[6]",
        click_select_country:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//div)[1]",
        select_1st_country:"(//li[@role='option'])[2]",
        click_save_btn:"(//button[@type='submit'])[2]",
        click_location:"(//div[@role='button']//p)[3]",
        click_location_1:"(//p[text()='location 001'])[1]",
        click_location_2:"//p[text()='location 002']",
        click_Edit_location_btn:"//span[text()='Edit Location']",
        click_yes_btn:"//span[text()='Yes']",
        click_remove_location_btn:"//span[text()='Remove Location']",
        image_btn:"(//input[@type='file'])[1]",
        save_btn_for_event_details:"(//span[text()='Save'])[1]",
        save_btn_for_event_details_2:"(//button[@type='submit'])[1]",
        clear_and_type_Event_Start_date:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[3]",
        clear_and_type_Event_Start_time:"(//label[text()='Event Starts']/following::input)[2]",
        clear_and_type_Event_end_date:"(//label[text()='Event Ends']/following::input)[1]",
        clear_and_type_Event_end_time:"(//label[text()='Event Ends']/following::input)[2]",
        click_create_new_category:"//span[text()='+ Create new category']",
        clear_and_type_category_name:"((//span[text()='Save'])[2]/following::input)[1]",
        category_image:"(//input[@type='file'])[3]",
        click_create_new_category_enabled_btn:"(//span[@class='MuiIconButton-label']//input)[1]",
        click_create_new_category_save_btn:"(//span[text()='Save'])[3]",
        click_event_settings:"//a[contains(text(),'Event Settings')]",
        click_include_sponsor_image:"(//input[@type='radio'])[1]",
        click_dont_include_sponsor_image:"(//input[@type='radio'])[2]",
        clear_Event_banner_text:"//input[@value='Event banner text']",
        type_Event_banner_text:"//input[@value='']",
        save_btn_for_event_settings:"//span[text()='Save']",
        clear_and_type_Event_ticket_limit:"//input[@type='number']",
        click_Visibility_in_App:"//div[@class='sc-iqHYGH hSaKRS']//span[1]",
        click_event_banner_color:"(//div[@role='button'])[3]",
        click_location_dropdown:"(//div[@role='button']//p)[3]",
        select_location:'(//li[@class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"])//p[text()="location 001"][1]',
        click_edit_location:"//span[text()='Edit Location']",
        click_Use_existing_location:"//span[text()='Use Existing Location']",
        font_btn:"//span[text()='Upload Your Own Font']",
        loction_002:"//p[text()='location 002']",
        select_create_new_category:"(//div[@role='button']//p)[4]",
        click_created_category:"(//p[text()='Category Name'])[2]",
        click_delete_btn_on_created_event_category:"//div[text()='Category Name']//parent::div/following-sibling::button[2]",
        delete_created_event_category:"//img[@title='trash-blue'][1]",



    }


    


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_3rd_app_name_2023_coachella  
    async click_3rd_app_name_2023_coachella(){
        const ele = this.page.locator(this.MangeEventPage_elements.app_link).nth(3)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  click app name |  Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_location_dropdown
    async click_location_dropdown(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_location_dropdown)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |   Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  select_location
    async select_location(){
        const ele = this.page.waitForSelector(this.MangeEventPage_elements.select_location)
        try {
            await (await ele).click({delay:1000})
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_edit_location
    async click_edit_location(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_edit_location)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_Use_existing_location
    async click_Use_existing_location(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_Use_existing_location)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_event_banner_color
    async click_event_banner_color(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_event_banner_color).nth(0)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_Visibility_in_App
    async click_Visibility_in_App(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_Visibility_in_App)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  save_btn_for_event_settings
    async save_btn_for_event_settings(){
        const ele = this.page.locator(this.MangeEventPage_elements.save_btn_for_event_settings)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

    
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select_event_banner_color 
    async select_event_banner_color(value:string){
        const ele=this.page.locator(`//li[@data-value="${value}"]`)  
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | liveOrder | Reservations |  Error occured: '+error)         
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_create_new_category_enabled_btn
    async click_create_new_category_enabled_btn(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_create_new_category_enabled_btn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_create_new_category_save_btn
    async click_create_new_category_save_btn(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_create_new_category_save_btn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

    
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_event_settings
    async click_event_settings(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_event_settings)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_include_sponsor_image 
    async click_include_sponsor_image(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_include_sponsor_image)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_dont_include_sponsor_image
    async click_dont_include_sponsor_image(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_dont_include_sponsor_image)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  save_btn_for_event_details
    async save_btn_for_event_details(){
        const ele = this.page.locator(this.MangeEventPage_elements.save_btn_for_event_details)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_create_new_category
    async click_create_new_category(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_create_new_category)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_event_name
    async clear_and_type_event_name(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_event_name)
        try {
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_location_name
    async clear_and_type_location_name(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_location_name)
        try {
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Address_1
    async clear_and_type_Address_1(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_Address_1)
        try {
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Address_2
    async clear_and_type_Address_2(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_Address_2)
        try {
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }
    


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_City
    async clear_and_type_City(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_City)
        try {
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }



     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_State
    async clear_and_type_State(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_State)
        try {
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Zip
    async clear_and_type_Zip(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_Zip)
        try {
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Event_Subtitle
    async clear_and_type_Event_Subtitle(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_Event_Subtitle)
        try {
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Event_description
    async clear_and_type_Event_description(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_Event_description)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }
    
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Event_banner_text
    async clear_and_type_Event_banner_text(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_Event_banner_text)
        const ele2=this.page.locator(this.MangeEventPage_elements.type_Event_banner_text)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.fill("")
            await ele2.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Event_ticket_limit
    async clear_and_type_Event_ticket_limit(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_Event_ticket_limit)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Event_Start_date
    async clear_and_type_Event_Start_date(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_Event_Start_date)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Event_Start_time
    async clear_and_type_Event_Start_time(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_Event_Start_time)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Event_end_date
    async clear_and_type_Event_end_date(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_Event_end_date)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_Event_end_time
    async clear_and_type_Event_end_time(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_Event_end_time)
        const ele2=this.page.locator(this.MangeEventPage_elements.save_btn_for_event_details)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.fill("")
            await ele.type(value,{delay:200})
            ele2.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   clear_and_type_category_name
    async clear_and_type_category_name(value:string){
        const ele=this.page.locator(this.MangeEventPage_elements.clear_and_type_category_name)
        try {
            await ele.scrollIntoViewIfNeeded()
            await ele.fill("")
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_manage_event
    async click_manage_event(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_manage_event)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_select_country
    async click_select_country(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_select_country)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  select_1st_country
    async select_1st_country(){
        const ele = this.page.locator(this.MangeEventPage_elements.select_1st_country)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_save_btn
    async click_save_btn(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_save_btn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }





    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_event_details
    async click_event_details(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_event_details)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }
    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_location
    async click_location(){
        const ele = this.page.waitForSelector(this.MangeEventPage_elements.click_location)
        try {

            await (await ele).scrollIntoViewIfNeeded()
            await (await ele).click({delay:1000}) 
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_location
    async click_location_002(){
        const ele = this.page.locator(this.MangeEventPage_elements.loction_002)
        try {

            await ele.scrollIntoViewIfNeeded()
            await expect.soft(ele).toBeVisible({timeout:2000})
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_location_1
    async click_location_1(){
        const ele = this.page.waitForSelector(this.MangeEventPage_elements.click_location_1)
        try {
            (await ele).scrollIntoViewIfNeeded()
            await (await ele).click({delay:1000}) 
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_location_1
    async click_location_2(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_location_2)
        try {
            await ele.click({delay:1000})
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_location_1
    async select_create_new_category(){
        const ele = this.page.locator(this.MangeEventPage_elements.select_create_new_category)
        
        try {
            await ele.click()
            

        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_location_1
    async select_create_new_category_1(){
        
        const ele2 = this.page.locator(this.MangeEventPage_elements.click_created_category)
        try {
            
            await ele2.click()

        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_Edit_location_btn
    async click_Edit_location_btn(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_Edit_location_btn)
        try {
            await ele.click({delay:1000})
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_remove_location_btn
    async click_remove_location_btn(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_remove_location_btn)
        try {
            await ele.click({delay:1000})
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_yes_btn
    async click_yes_btn(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_yes_btn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_Cerate_new_location
    async click_Cerate_new_location(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_Cerate_new_location)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_Cerate_new_location
    async delete_created_event_category(){
        const ele = this.page.locator(this.MangeEventPage_elements.delete_created_event_category)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_Cerate_new_location
    async click_delete_btn_on_created_event_category(){
        const ele = this.page.locator(this.MangeEventPage_elements.click_delete_btn_on_created_event_category)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | 2023 Coachella Festival Store | 001 Event name test | event dashboard | manage event |  Error occured: '+error)       
        }
    }




    // async click_design1(){
    //     const ele = this.page.locator(this.Design_elements.click_design)
    //     try {
    //         await ele.click()
    //     } catch (error) {
    //         throw new Error('Aloompa|admin | App directory | 001 test arif | click faild |  Error occured: '+error)       
    //     }
    // }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Validate_edit_event_detailsPage

    async Validate_edit_event_detailsPage(){
        const ele=this.page.locator('//h1[text()="Edit Event Details"]')
       try {
         //expect.soft(this.page).toHaveURL('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order/4ebbc834-5227-4a2e-b7d9-82ace92ed373/event/ff9e8f80-02fb-4bd7-8b48-4e476c88253f/event-details')
         await expect.soft(ele).toBeVisible()
       } catch (error) {
        throw new Error('Aloompa|admin | manageEvent | Edit event details header element not visible : Error occured'+error)
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: file_uploader_for_image_file
    async file_uploader_for_image_file(value:string) {
        const filePath0 = `testData/images/${value}`
        const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.locator(this.MangeEventPage_elements.image_btn).click()
          
        
        ]);
        const ele=this.page.locator(this.MangeEventPage_elements.image_btn)
        ele.scrollIntoViewIfNeeded()
        ele.click()
        await fileChooser.setFiles([filePath0]);
        
        
      }



       // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: font_uploader_for_description
    async font_uploader_for_description(value:string) {
        const filePath0 = `testData/fonts/${value}`
        const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
           this.page.locator(this.MangeEventPage_elements.font_btn).click({timeout:1000}),
           this.page.locator(this.MangeEventPage_elements.font_btn).click({timeout:1000})
          
        
        ]);
        const ele=this.page.locator(this.MangeEventPage_elements.font_btn)
        
        ele.click()
        
        await fileChooser.setFiles([filePath0]);
        
        
      }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: file_uploader_category_image_file
    async file_uploader_category_image_file(value:string) {
        const filePath0 = `testData/images/${value}`
        const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.locator(this.MangeEventPage_elements.category_image).click(),
          this.page.locator(this.MangeEventPage_elements.category_image).click()
        
        ]);
        const ele=this.page.locator(this.MangeEventPage_elements.category_image)
        ele.scrollIntoViewIfNeeded()
        ele.click()
        await fileChooser.setFiles([filePath0]);
        
        
      }










}