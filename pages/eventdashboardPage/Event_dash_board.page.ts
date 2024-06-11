import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class EventdashboardPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private events_page_elements = {
        button_ele:'//button[@data-testid="button"]',
        input_ele_form:'//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        dropdown_container_header:'//div[@role="button"]',
        search_input_ele:'//div[@class="sc-biBrSq rrVpB inputContainer"]',
        no_match_found:'//p[text()="No match found"]',
        actions_button:'//span[text()="Actions"]//parent::button',
        hidden_ele_icon:'//img[@data-testid="hidden-outlinedIcon"]',
        make_hidden_li_item:"//ul[@id='menu-list-grow']//li[1]",
        add_attendee_li_item:'//p[text()="Add Attendee"]',
        make_visible_li_item:'//p[text()="Make Visible"]',
        delete_event_li_item:'//p[text()="Delete Event"]',
        delete_event_warning:`//div[text()='Delete "Only For automation"?']`,
        delete_event_yes_btn:"//span[text()='Yes']",
        table_hidden_ele_icon:'//td[2]//img[@data-testid="visible-outlinedIcon"]',
        edit_event_details_list_item:'//p[text()="Edit Event Details"]',
        edit_attendee_information_list_item:'//p[text()="Edit Attendee Info"]',
        app_link:'//a[@title]',
        target_event:"//p[text()='events']",
        explore_all_events_header:'//h2[text()="Explore all events"]',
        event_dashboard_link:'//a[@title="Event Dashboard"]',
        import_csv_header:'//h1[text()="Import CSV"]',
        new_event_header:'//h1[text()="New Event"]',
        app_name_text:'//div[text()="The App name is required"]',
        app_slug_text:'//div[text()="The App slug is required"]',
        app_type_text:'//div[text()="The App type is required"]',
        app_timezone_text:'//div[text()="The App timezone is required"]',
        app_dropdown_header_element:'//div[@class="sc-LwQvY jcqefh"]',
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
        looking_for_event_names:'//input[@placeholder="Event Names"]',
        date_input_element:'//input[@type="text"]',
        date_search_input:'//input[@placeholder="Any Date"]',
        next_button:'//button[@class="MuiButtonBase-root MuiIconButton-root MuiPickersCalendarHeader-iconButton"]',
        place_search_input:'//input[@placeholder="Any Location"]',
        explore_events:'//div[@class="MuiFormControl-root"]',
        clear_search_filters_button:'//span[text()="Clear Search Filters"]//parent::span//parent::button',
        event_details:'//div[text()="Event"]',
        visibility_toggle:'//img[@title="toggleon"]//parent::span',
        visibility_toggle_off:'//img[@title="toggleoff"]//parent::span',
        menu_ul_type:"(//ul[@role='menu'])[3]",
        checkbox:'//input[@type="checkbox"]',
        times_unix_time_Stamp_checkbox:'//label[text()="Times are Unix Time Stamps"]//preceding-sibling::span/span/input',
        times_unix_time_Stamp_in_milliseconds:'//label[text()="Unix Time Stamps are in Milliseconds"]//preceding-sibling::span/span/input',
        feedMappingIdHeader:'//th[text()="feedMappingId"]',
        imported_data_label:'//label[text()="Imported Data"]',
        dropdown_ele:'//div[@aria-haspopup="listbox"]',
        ul_for_parsed_data:'//ul[@role="listbox"]',
        return_to_upload_button:'//span[text()="Return to Upload Options"]//parent::span//parent::button',
        csv_uploaded_element:'//label[text()="CSV Uploaded"]',
        validate_Manage_Event_visible_after_clicking_on_event:"//span[text()='Manage Event']",
        click_actions_button_for_delete:`//p[text()="Only For automation"]//parent::div//parent::div//parent::a//parent::div//parent::td/following-sibling::td[5]`,
        click_event_dash_board:"//a[@title='Event Dashboard']//span[1]",

       

    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking on top left "Reservations" icon
    async click_first_app_name(){
        const ele = this.page.locator(this.events_page_elements.app_link).nth(1)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  first app name element not found, click failed|  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Checking "Explore all events" text visibility
    async check_explore_all_events_visiblity(){
        const ele = this.page.locator(this.events_page_elements.explore_all_events_header)
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Explore all event header element is missing |  Error occured: '+error)       
       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking "Event Dashboard"
    async click_event_dashBoard(){
        const ele = this.page.locator(this.events_page_elements.event_dashboard_link)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Event dashboard link element is missing |  Error occured: '+error)       
       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking Dropdown on top left corner
    async click_app_dropdowns_in_header(){
        const ele = this.page.locator(this.events_page_elements.app_dropdown_header_element)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | click create new event element is missing |  Error occured: '+error)       
          
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click "import csv" button
    async click_import_csv_button(){
        const ele = this.page.locator(this.events_page_elements.button_ele).nth(0)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservation | Import CSV button element is missing |  Error occured: '+error)       
       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Checking "import csv"  text on Header in Import csv section
    async check_import_CSV(){
        const ele = this.page.locator(this.events_page_elements.import_csv_header)
        try {
                await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Header containing import CSV text  is missing |  Error occured: '+error)       
       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Checking "New Event" text on top left corner
    async check_new_event(){
        const ele = this.page.locator(this.events_page_elements.new_event_header)
        try {
            await expect(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | Header containing new Event text  is missing |  Error occured: '+error)       
       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking Create new Event Button
    async click_create_new_event(){
        const ele = this.page.locator(this.events_page_elements.button_ele).nth(2)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | click create new event element is missing |  Error occured: '+error)       
          
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Checking sorting is working or not
    async click_event_header_and_verify(){
        const ele = this.page.locator(this.events_page_elements.event_details)
        const first_ele=this.page.locator('//td//p').nth(0)
        const last_text_ele=this.page.locator('//td//p').nth(5)

        try {
            
            let a= await first_ele.textContent()
            await ele.click()
            await expect.soft(last_text_ele).toHaveText(a?a:'')
        } catch (error) {
            throw new Error('Aloompa|admin | Event dashboard | header element for event is missing |  Error occured: '+error)       
          
        }
    }

        // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Checking sorting is working or not
    async click_event_header(){
        const ele = this.page.locator(this.events_page_elements.event_details)
        

        try {
            
           
            await ele.click()
            
        } catch (error) {
            throw new Error('Aloompa|admin | Event dashboard | header element for event is missing |  Error occured: '+error)       
          
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click "clear search filters" button
    async click_clear_search_filters(){
        const ele=this.page.locator(this.events_page_elements.clear_search_filters_button)

        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Reservations | clear search filters button is missing |  Error occured: '+error)       
          
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check "event name" is Cleard properly after click "clear search filters" button
    async check_if_clear_event_name_is_working_properly(){
      const ele=this.page.locator(this.events_page_elements.looking_for_event_names)  
      try {
          await expect.soft(ele).toHaveAttribute('value','')
      } catch (error) {
        throw new Error('Aloompa|admin | Reservations | cleared event value is missing |  Error occured: '+error)         
      }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:----------------------------------------------------------------------?
    async click_event_name(value:string){
        const ele=this.page.locator(`//div//p[text()="${value}"]`).nth(0)  
        try {
            await this.page.waitForTimeout(1000)
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Reservations | event name element is missing, click failed |  Error occured: '+error)         
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "visibility toggle" is turned off (Red)
    async validate_Manage_Event_visible_after_clicking_on_event(){
        const ele=this.page.locator(this.events_page_elements.validate_Manage_Event_visible_after_clicking_on_event).nth(0)  
        try {
           await expect(ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Events | visibility toggleoff image is missing |  Error occured: '+error)         
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "visibility toggle" is visible (green)  event dashboard 
    async click_visibility_icon(){
        const ele=this.page.locator(this.events_page_elements.visibility_toggle).nth(0)  
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
          throw new Error('Aloompa | admin | Events |  visibility toggle input element is missing |  Error occured: '+error)         
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "visibility toggle" is turned off (Red)
    async check_if_visibility_toggled_off(){
        const ele=this.page.locator(this.events_page_elements.visibility_toggle_off).nth(0)  
        try {
           await expect(ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Events | visibility toggleoff image is missing |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "visibility toggle" is visible (green)  event dashboard 
    async check_if_visibility_toggled_on(){
        const ele=this.page.locator(this.events_page_elements.visibility_toggle).nth(1)  
        try {
           await expect(ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Events | visibility toggledon image element is missing |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "visibility toggle" is turned off (Red)
    async click_visibility_toggled_off_icon(){
        const ele=this.page.locator(this.events_page_elements.visibility_toggle_off).nth(0)  
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
          throw new Error('Aloompa | admin | Events |  visibility toggled off element is missing |  Error occured: '+error)         
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: clicking "Actions" button on Event dashboard
    async click_actions_button(){
        const ele=this.page.locator(this.events_page_elements.actions_button).nth(1)  
        try {
            await this.page.waitForTimeout(1000)
            await ele.click()
            await this.page.waitForTimeout(1000)
        } catch (error) {
          throw new Error('Aloompa | admin | Events |  actions button element is missing |  Error occured: '+error)         
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: clicking "Actions" button on Event dashboard
    async click_actions_button_for_delete(){
        const ele=this.page.locator(this.events_page_elements.click_actions_button_for_delete).nth(0) 
        try {
            await this.page.waitForTimeout(1000)
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
          throw new Error('Aloompa | admin | Events |  actions button element is missing |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "Actions" button menu list
    async check_lists_under_actions(){
        const ele=this.page.locator(this.events_page_elements.menu_ul_type)
        try {
            await this.page.waitForTimeout(1000)
            await expect.soft(ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Events |  unordered list element containging action list under actions button is missing |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking "Make Hidden" Button from Actions menu 
    async click_make_hidden(){
        const ele=this.page.locator(this.events_page_elements.make_hidden_li_item) 
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Events |  make hidden list  element is missing |  Error occured: '+error)         
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking "Make Visible" Button from Actions menu 
    async click_make_visible(){
        const ele=this.page.locator(this.events_page_elements.make_visible_li_item) 
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Events | make visible list element is missing |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking "Edit Event details" Button from Actions menu 
    async click_edit_event_details(){
        const ele=this.page.locator(this.events_page_elements.edit_event_details_list_item) 
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Events |  edit event details list element is missing |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking "Edit attendee info" Button from Actions menu 
    async click_edit_attendee_information(){
        const ele=this.page.locator(this.events_page_elements.edit_attendee_information_list_item) 
        try {
            await this.page.waitForTimeout(1000)
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Events |  edit attendee information list item  is missing |  Error occured: '+error)         
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:Clicking "add attendee" Button from Actions menu 
    async click_add_attendee_information(){
        const ele=this.page.locator(this.events_page_elements.add_attendee_li_item) 
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Events |  add attendee list item  is missing |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:Clicking "Delete Event" Button from Actions menu 
    async click_delete_event(){
        const ele=this.page.locator(this.events_page_elements.delete_event_li_item) 
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Events | delete event list item  is missing |  Error occured: '+error)         
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:Clicking "Delete Event" Button from Actions menu 
    async click_event_dash_board(){
        const ele=this.page.locator(this.events_page_elements.click_event_dash_board) 
        try {
            await ele.click()
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Events | delete event list item  is missing |  Error occured: '+error)         
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:verify "delete event" warning Text
    async delete_event_warning_checker(){
        const ele=this.page.locator(this.events_page_elements.delete_event_warning) 
        const ele2=this.page.locator(this.events_page_elements.delete_event_yes_btn) 
        try {
            await expect.soft(ele).toBeVisible()
            ele2.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Events | delete event warning item  is missing |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:Click Target in "Import CSV"
    async click_target(){
        //p[text()="events"]//parent::div
        const ele=this.page.locator(this.events_page_elements.target_event) 
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Events | delete event list item  is missing |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click Time zone in "import csv"
    async click_timezone(){
        const ele=this.page.locator(this.events_page_elements.dropdown_container_header).nth(2) 
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Events | delete event list item  is missing |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select Time in time zone in "import csv"
    async select_timezone(value:string){
        const list_ele=this.page.locator(`//li[@data-value="${value}"]`)
        try {
         await list_ele.click()
        } catch (error) {
         throw new Error('Aloompa|admin | Event dashboard | selected timezon dropdown list input element not found : Error occured'+error)
    
        }
     }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check times are unix timeStamps or not.if not then checked
     async check_times_are_unix_timeStamps(){
     const ele=this.page.locator(this.events_page_elements.times_unix_time_Stamp_checkbox).nth(0)
      try {
          if(!await ele.isChecked()){
              await ele.check()
           }
      } catch (error) {
        throw new Error('Aloompa|admin | Event dashboard | Times are unix time stamps input element not found : Error occured'+error)
    
      }
     }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check "Unix Time Stamps are in Milliseconds" is checked or not.if not then checked
     async check_unix_times_stamps_are_in_milliseconds(){
        const ele=this.page.locator(this.events_page_elements.times_unix_time_Stamp_in_milliseconds).nth(0)
        try {
            await expect.soft(ele).toBeVisible()
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | Times are unix time stamps input element not found : Error occured'+error)
      
        }
     }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click multi value separator
     async click_multi_value_separator(){
        const ele=this.page.locator(this.events_page_elements.dropdown_container_header).nth(3)
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | Multi-value separator input element not found : Error occured '+ error)  
        }
     }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: select semicolon in "multi value separator"
     async select_semicolon(value:string){
        const ele=this.page.locator(`//p[text()="${value}"]//parent::li`)
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | Multi-value separator input element not found : Error occured '+ error)  
        }
     }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:click "select File" button
     async click_select_File_button(){
        const ele=this.page.locator(this.events_page_elements.button_ele).nth(0)
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | Multi-value separator input element not found : Error occured '+ error)  
        }
     }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: file uploader for csv file
     async file_uploader_for_csv_file(value:string) {
        const filePath0 = `testData/csv/${value}`
        const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.locator(this.events_page_elements.button_ele).nth(0).click()
        ]);
        await fileChooser.setFiles([filePath0]);
      }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:check "First Row is Header" is checked or not.if not then checked
    async check_first_row_is_header_import_box(){
        const ele=this.page.locator(this.events_page_elements.checkbox).nth(1)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | check input element not found : Error occured '+ error)  
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:check "First Row is Header" is checked or not.if checked then unchecked
    async uncheck_first_row_is_header_import_box(){
        const ele=this.page.locator(this.events_page_elements.checkbox).nth(1)
        try {
            if(await ele.isChecked()){
                await ele.uncheck()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | uncheck input element not found : Error occured '+ error)  
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:check "parse" button is disabled or not.
    async check_parse_button_disabled(){
        const ele=this.page.locator(this.events_page_elements.button_ele).nth(1)
        try {
           await expect.soft(ele).toBeDisabled() 
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | button element for parse button not found : Error occured '+ error)  
        }
    }
    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:check "parse" button is enabled or not.
    async check_parse_button_enabled(){
        const ele=this.page.locator(this.events_page_elements.button_ele).nth(1)
        try {
           await expect.soft(ele).toBeEnabled() 
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | button element for parse button not found : Error occured '+ error)  
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:click "parse" button
    async click_parse_button(){
        const ele=this.page.locator(this.events_page_elements.button_ele).nth(1)
        try {
           await ele.click()
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | button element for parse button not found, click on parse button failed : Error occured '+ error)  
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check if "parse" worked correctly and showing "Imported Data"
    async check_if_parse_worked_correctly(){
        const ele=this.page.locator(this.events_page_elements.imported_data_label)
        try {
           await expect.soft(ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | Header after parsing CSV visibility not found, click on parse button failed : Error occured '+ error)  
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:check "parse" captured Contents of csv correctly and contains valid values in tables in csv
    async check_if_parse_captured_Contents_of_csv_correctly(value1:string,value2:string){
        const ele=this.page.locator(this.events_page_elements.feedMappingIdHeader)
        const data_ele_1=this.page.locator(`//div[text()="${value1}"]`)
        const data_ele_2=this.page.locator(`//div[text()="${value2}"]`)
        //const data_ele_3=this.page.locator(`//div[text()="${value3}"]`)
        try {
           await expect.soft(ele).toBeVisible()
           await expect.soft(data_ele_1).toBeVisible()
           await expect.soft(data_ele_2).toBeVisible()
           //await expect.soft(data_ele_3).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | Header after parsing CSV visibility not found, click on parse button failed : Error occured '+ error)  
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: checks if the drop down list on first parsed screen is working properly

    async click_first_drop_down_on_parsed_data(){
        const ele=this.page.locator(this.events_page_elements.dropdown_ele).nth(5)
        const ul_ele=this.page.locator(this.events_page_elements.ul_for_parsed_data)
        try {
           await ele.click()
           await expect.soft(ul_ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa|admin | Event dashboard | dropdown element for dropdown in parsed data not found, ul visiblity checking failed failed : Error occured '+ error)  
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click on return to upload button

    async click_return_to_upload_button(){
        const ele=this.page.locator(this.events_page_elements.return_to_upload_button)
        const select_file_button=this.page.locator(this.events_page_elements.button_ele).nth(0)
        try {
           await ele.click()
           await expect.soft(select_file_button).toBeEnabled()
        } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | button element containing return to upload button is missing Error occured '+ error)  
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click on import button

    async click_import_button(){
        const ele=this.page.locator(this.events_page_elements.button_ele).nth(1)
         try {
           await ele.click()
          } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | import button is missing, Error occured '+ error)  
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: checks the  text on CSV UPloaded after successful upload


    async check_csv_uploaded_text(){
        const ele=this.page.locator(this.events_page_elements.csv_uploaded_element)
        try {
           await expect.soft(ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | CSV uploaded text is missing,  Error occured '+ error)  
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click on the upload another button


    async click_upload_another(){
        const ele=this.page.locator(this.events_page_elements.button_ele).nth(0)
        try {
           await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | upload another button element is missing '+ error)  
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click on select category,and checks for ul visiblity

    async click_select_category(){
        const ele=this.page.locator(this.events_page_elements.select_category)
        const ul=this.page.locator(this.events_page_elements.ul_for_parsed_data)
     
        try {
           await ele.dblclick({delay:1000})
           await expect.soft(ul).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | upload another button element is missing '+ error)  
        }
    }

    async check_category_li_item(value:string){
        const ele=this.page.locator(`//p[text()="${value}"]//parent::li`)
         try {
           await expect.soft(ele).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | added new category is not visible  '+ error)  
        }
    }

    async check_category_li_item_not_visible(value:string){
        const ele=this.page.locator(`//p[text()="${value}"]//parent::li`)
         try {
           await expect.soft(ele).toBeHidden()
        } catch (error) {
          throw new Error('Aloompa | admin | Event dashboard | added new category is not visible  '+ error)  
        }
    }

}
    