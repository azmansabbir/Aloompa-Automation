import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class ReservationPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private reservation_page_elements = {
        button_ele:'//button[@data-testid="button"]',
        input_ele_form:'//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        dropdown_container_header:'//div[@class="sc-biBrSq rrVpB inputContainer"]',
        search_input_ele:'//div[@class="sc-biBrSq rrVpB inputContainer"]',
        no_match_found:'//p[text()="No match found"]',
        actions_button:'//span[text()="Actions"]//parent::button',
        hidden_ele_icon:'//img[@data-testid="hidden-outlinedIcon"]',
        make_hidden_li_item:'//p[text()="Make Hidden"]//parent::li',
        edit_details_li_item:'//p[text()="Edit Details"]//parent::li',
        make_visible_li_item:'//p[text()="Make Visible"]//parent::li',
        table_hidden_ele_icon:'//td[2]//img[@data-testid="visible-outlinedIcon"]',
        app_link:'//a[@title]',
        explore_all_events_header:"//h2[text()='Explore all events']",
        event_dashboard_link:'//a[@title="Event Dashboard"]',
        import_csv_header:'//h1[text()="Import CSV"]',
        new_event_header:'//h1[text()="New Event"]',
        app_name_text:'//div[text()="The App name is required"]',
        app_slug_text:'//div[text()="The App slug is required"]',
        app_type_text:'//div[text()="The App type is required"]',
        app_timezone_text:'//div[text()="The App timezone is required"]',
        app_dropdown_header_element:"(//div[@role='button'])[1]",
        app_dropdown_list:'//ul[@role="listbox"]',
        event_name_input:'//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        event_subtitle_input:'//textarea',
        click_event_catagory:'//p[text()="Select a Category"]//parent::div',
        event_description_text:'//div[@class="rdw-editor-main"]',
        image_input:'//input[@accept="image/png, image/jpeg"]',
        name_input_field:'//input[@placeholder="Name"]',
        select_country:'//p[text()="Select Country"]//parent::div',
        button_create_new_app:'//span[text()="Create New Location"]//parent::span//parent::button',
        select_location:'//p[text()="Select a Location"]//parent::div',
        select_category:'//p[text()="Select a Category"]//parent::div',
        save_button:'//span[text()="Save"]//parent::span//parent::button',
        looking_for_event_names:'//input[@placeholder="Event Names"]',
        date_input_element:'//input[@type="text"]',
        date_search_input:'//input[@placeholder="Any Date"]',
        calendar_button:'//button[@class="MuiButtonBase-root MuiIconButton-root"]',
        year_selector:'//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text MuiPickersToolbarButton-toolbarBtn"]',
        ok_button:'//span[text()="OK"]//parent::button',
        next_button:'//button[@class="MuiButtonBase-root MuiIconButton-root MuiPickersCalendarHeader-iconButton"]',
        place_search_input:'//input[@placeholder="Any Location"]',
        explore_events:"(//div[@role='button'])[2]",
        clear_search_filters_button:'//span[text()="Clear Search Filters"]//parent::span//parent::button',
        save_button_for_create_event:`(//span[text()='Save'])[2]`,

    }






    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Type Event name input 
    async input_add_name(value:string){
        const ele = this.page.locator(this.reservation_page_elements.input_ele_form).first()
        try {
            await ele.fill(value)
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Event name input element not found : Error occured'+error)
       
        }
    }

    


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Check "Explore all event" Text in header element of event dashboard
    async check_explore_all_events_visiblity(){
        const ele = this.page.locator(this.reservation_page_elements.explore_all_events_header)
        try {
            ele.isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Explore all event header element is missing |  Error occured: '+error)       
       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click event Dashboard in top right corner
    async click_event_dashBoard(){
        const ele = this.page.locator(this.reservation_page_elements.event_dashboard_link)
        try {
            await ele.click()
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Event dashboard link element is missing |  Error occured: '+error)       
       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click event Dashboard in top right corner
    async save_button_for_create_event(){
        const ele = this.page.locator(this.reservation_page_elements.save_button_for_create_event)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Event dashboard link element is missing |  Error occured: '+error)       
       
        }
    }

    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: clicking "CSV" has Downloaded or not
    async  click_export_csv_button(){
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.page.locator(this.reservation_page_elements.button_ele).nth(1).click()
          ])
          const suggestedFileName = download.suggestedFilename()
          try {
            if (suggestedFileName.match('reservations-events-export')) {
              const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
              await download.saveAs(filePath)
              expect.soft(existsSync(filePath)).toBeTruthy()
            }
            else{
              throw new Error('File name not correct ')
            }
          } catch (error) {
            throw new Error("There is a problem with your download,may be you have changed the file name please Add the string Fan-See-QR to the Qr file name" + error)
          }
    }

   
   

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: clicking Dropdown in top left corner 
    async click_app_dropdowns_in_header(){
        const ele = this.page.locator(this.reservation_page_elements.app_dropdown_header_element)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | click create new event element is missing |  Error occured: '+error)       
          
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate dropdown app list is visible
    async check_header_element(){
        const ele= this.page.locator(this.reservation_page_elements.app_dropdown_list)
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | all app list  element is missing |  Error occured: '+error)       
           
        }
    }
   


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: "Event Subtitle" input in "create new event"
    async input_event_subtitle(value:string){
       const ele=this.page.locator(this.reservation_page_elements.event_subtitle_input)
        try {
            await ele.fill(value)
            await this.page.waitForTimeout(2000)
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | event subtitle input  element is missing |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: clicking create new location on create new app 
    async click_create_new_location(){
        const ele=this.page.locator(this.reservation_page_elements.button_create_new_app)
        try {
            await ele.click()
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | event subtitle input  element is missing |  Error occured: '+error)       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input location name
    async input_location_name(value:string){
        const ele=this.page.locator(this.reservation_page_elements.input_ele_form).nth(1)
        try {
            await ele.type(value,{delay:200})
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | location name input  element is missing |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 1" on Create new location
    async input_address_1(value:string){
        const ele=this.page.locator(this.reservation_page_elements.input_ele_form).nth(2)
        try {
            await ele.type(value,{delay:200})
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | address 1 input  element is missing |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "address 2" on Create new location
    async input_address_2(value:string){
        const ele=this.page.locator(this.reservation_page_elements.input_ele_form).nth(3)
        try {
            await ele.type(value,{delay:200})
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | address 2 input  element is missing |  Error occured: '+error)       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "city" on Create new location
    async input_city(value:string){
        const ele=this.page.locator(this.reservation_page_elements.input_ele_form).nth(4)
        try {
            await ele.type(value,{delay:200})
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | city  input  element is missing |  Error occured: '+error)       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "State" on Create new location
    async input_state(value:string){
        const ele=this.page.locator(this.reservation_page_elements.input_ele_form).nth(5)
        try {
            await ele.type(value,{delay:200})
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | state  input  element is missing |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "Zip" on Create new location
    async input_zip(value:string){
        const ele=this.page.locator(this.reservation_page_elements.input_ele_form).nth(6)
        try {
            await ele.type(value,{delay:200})
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | zip  input  element is missing |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select "Country" on Create new location
    async select_country(value:string){
        const ele=this.page.locator(this.reservation_page_elements.select_country)
        const list_ele=this.page.locator(` //p[text()="${value}"]//parent::li`)
        try {
            await ele.click()
            await list_ele.click()
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | select country  element is missing |  Error occured: '+error)       
        } 
    }


   



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select location from location dropdown
    async click_select_location(value:string){
        const ele=this.page.locator(this.reservation_page_elements.select_location).nth(0)
        const list_ele=this.page.locator(` //p[text()="${value}"]//parent::li`).first()
        try {
            await ele.click()
            
            await list_ele.click()
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | select location  input  element is missing |  Error occured: '+error)       
        } 
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select location from location dropdown
    async click_select_location_2(){
        const ele=this.page.locator(this.reservation_page_elements.select_location).nth(0)
        
        try {
            
            await ele.click()
            
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | select location  input  element is missing |  Error occured: '+error)       
        } 
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select location from location dropdown
    async click_select_location_3(value:string){
        
        const list_ele=this.page.locator(` //p[text()="${value}"]//parent::li`).first()
        
        try {
            
            await list_ele.click()
           
        } catch (error) {
        throw new Error('Aloompa|admin | Reservations | select location  input  element is missing |  Error occured: '+error)       
        } 
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: ----------------------------------------------------------------?
    async check_event_in_explore_all_events(value:string){
        const ele = this.page.locator(`//p[text()="${value}"]`).nth(0)
        try {
            await ele.isVisible()
        } catch (error) {
            throw new Error(`Aloompa|admin | Reservations | Desired event name:${value}  which you are looking for is missing in search results |  Error occured: `+error)       
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: type search value in "Looking for Event Name "
    async type_search_in_looking_for_event_name(value:string){
        const ele = this.page.locator(this.reservation_page_elements.looking_for_event_names).first()
        const ele2 = this.page.locator("//p[text()='There is no data that matches the search terms.']")
        try {
            await ele.fill(value)
           
            await ele2.isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | input  element for typing event name  is missing |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select a date in date field
    async select_date(value:string){
        const ele = this.page.locator(this.reservation_page_elements.date_input_element).first()
        try {
            await ele.fill(value)
            await this.page.waitForLoadState('networkidle')
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | date text type input  element is missing |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: type date value in date field
    async input_date_on_field(value:string){
        const ele = this.page.locator(this.reservation_page_elements.date_search_input).first()
        try {
            await ele.fill(value)
            await this.page.waitForLoadState('networkidle')
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | date  input  element on field  is missing |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: clicking on calendar button
    async click_calendar_button(){
        const ele = this.page.locator(this.reservation_page_elements.calendar_button).first()
        try {
            await ele.click()
            
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | calendar button  element is missing |  Error occured: '+error)       
          
        } 
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "date" by calendar
    async date_input_by_calendar(datevalue:string){

        const date_ele= this.page.locator(`//p[text()="${datevalue}"]//parent::span//parent::button`)
        try {
            await date_ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | date input element is missing |  Error occured: '+error)       
          
        } 
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "Month" by calendar
    async month_input_by_calendar(monthvalue:string){
        const month_ele=this.page.locator(`//p[text()='${monthvalue}']`)
        const next_button=this.page.locator(this.reservation_page_elements.next_button).first()
        const ok_button=this.page.locator(this.reservation_page_elements.ok_button)
        try {
    
            do {
                

                await next_button.click()
            } 
            while (!await month_ele.isVisible());
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | next button  element is missing |  Error occured: '+error)       
          
        } 
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input "year" by calendar
    async year_input_by_calendar(year_value:string){
        const ele = this.page.locator(this.reservation_page_elements.year_selector).first()
        const year_ele= this.page.locator(`//div[text()="${year_value}"]`)
      try {
            await ele.click()
            await year_ele.click()
          
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | year input element is missing |  Error occured: '+error)       
          
        } 
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click Ok Button in search feild
    async click_ok_button(){
        const ok_button=this.page.locator(this.reservation_page_elements.ok_button)
        try {
            await ok_button.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | ok button input element is missing |  Error occured: '+error)       
          
        } 
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: input place/location in search feild
    async input_search_place(value:string){
        const ele = this.page.locator(this.reservation_page_elements.place_search_input).first()
        try {
            await ele.fill(value)
            await this.page.waitForLoadState('networkidle')
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | place search  input  element on field  is missing |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click "All Events" dropdown
    async click_All_events(){
        const all_events=this.page.locator(this.reservation_page_elements.explore_events)
        try {
            await all_events.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | "explore events" button element is missing |  Error occured: '+error)       
          
        } 
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: ----------------------------------------------------------?
    async check_if_all_event_type_is_visible_1(){
        const eventtype1=this.page.locator(`(//p[text()='Only For automation(Do not delete) Create Event'])`)
        

        try {
                await this.page.waitForTimeout(1000)
                await eventtype1.isVisible()
                
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | 2 type events under explore event elements are missing |  Error occured: '+error)       
        
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: ----------------------------------------------------------?
    async check_if_all_event_type_is_visible_2(){
        
        const eventtype2=this.page.locator(`(//p[text()='Testing purpose'])[1]`)

        try {
                
                await this.page.waitForTimeout(1000)
                
                await eventtype2.isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | 2 type events under explore event elements are missing |  Error occured: '+error)       
        
        }
    }
    

   
}