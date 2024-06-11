import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class AttendeeInformationPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private AttendeeInformation_elements = {
        
        app_link:'//a[@title]',
        coachella_app_link:"//a[contains(text(),'2023 Coachella Festival Store')]",
        click_on_attendee_Check_in:"//a[@title='Attendee Check-In']",
        validate_Attendee_check_in:"//h1[text()='Attendee Check-In']",
        fresh_cms_without_data:"//p[text()='There is no data yet.']",
        export_csv_for_attendee_check_in:"//span[text()='Export CSV']",
        search_fucntionality_visibility:"//button[@type='submit']/following-sibling::input[1]",
        search_fucntionality:"//button[@type='submit']/following-sibling::input[1]",
        searched_text:"//td[text()='bce376b7']",
        click_Return_to_all_events:"//a[contains(text(),'Return to All Events')]",
        click_to_next_page:"//span[text()='Next']",
        click_to_previous_page:"//span[text()='Previous']",
        validate_to_total_count:"(//div[@class='sc-hBEYos dWjUC']//span)[2]",
        Validate_count_of_Checked_in:"(//div[@class='sc-hBEYos dWjUC']//span)[1]", 
        Validate_Attendee_Name_Sorting_is_Clickable:"//div[text()='Attendee Name']",
        Validate_Ticket_Type_Sorting_is_Clickable:"//div[text()='Ticket Type']",
        Validate_Ticket_Sorting_is_Clickable:"//div[text()='Ticket #']",
        Validate_Status_Sorting_is_Clickable:"//div[text()='Status']",
        click_on_Orders:"//a[@title='Orders']",
        validate_Orders:"//h1[text()='Orders']",
        export_csv_for_orders:"//span[text()='CSV Export']",
        click_Order_dropdown:"(//li[@role='option'])",
        click_Order_dropdown_container:"//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//div[1]",
        verify_active_orders:"(//div[contains(@class,'sc-fubCfw sc-dQppl')]//button)[1]",
        verify_Canceled_orders:"(//div[contains(@class,'sc-fubCfw sc-dQppl')]//button)[1]",
        Order_search_fucntionality_visibility:"//button[@type='submit']/following-sibling::input[1]",
        search_Order_fucntionality_type:"//button[@type='submit']/following-sibling::input[1]",
        search_Order_fucntionality_validation:"//p[text()='6C682528']",
        SVGAElement:"//*[local-name()='svg' and @height='24']",
        Validate_Status_Sorting:"//div[text()='Status']",
        sorting_status_canceled:"//p[text()='Canceled']",
        click_on_actions_in_orders:"(//span[text()='Actions'])",
        click_on_manage_orders:"//p[text()='Manage Order']",
        verify_manage_orders:"(//div[@class='sc-jlIkXa cUdUkR']//h1)[1]",
        click_on_Details:"//span[text()='Details']",
        verify_return_to_all_orders:"//a[contains(text(),'Return to All Orders')]",
        clear_and_type_first_name:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[1]",
        clear_and_type_last_name:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[2]",
        clear_and_type_email:"(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input)[3]",
        clear_and_type_Phone_number:"(//input[@type='text'])[4]",
        clear_and_type_State:"(//input[@type='text'])[5]",
        clear_and_type_ZipCode:"(//input[@type='text'])[5]",
        savebtn_order_management:"(//span[contains(text(),'Save Changes')])[1]",
        click_on_Tickets_in_manage_order:"//div[@title='Tickets']//span[1]",
        validate_tickets_is_clicked:"//h1[text()='Tickets']",
        click_on_Activity_in_manage_order:"//div[@title='Activity']//span[1]",
        OrderActivity:"//h1[text()='Order Activity']",
        click_on_add_notes_in_Activity:"//span[text()='Add Note']",
        type_on_add_notes_in_Activity:"//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//textarea[1]",
        savebtn_order_management_add_notes:"//span[text()='Save Changes']",
        click_added_notes_and_details_update_btn:"(//p[text()='Details Updated'])[1]",
        verify_added_notes:"(//div[@class='MuiExpansionPanelDetails-root'])[1]",
        current_value:"(//p[text()='Field Name: First Name']/following-sibling::p)[2]",
        click_on_add_notes_in_actions:"//p[text()='Add Note']",
        click_on_Resend_tickets_in_actions:"//p[text()='Resend Tickets']",
        verify_tickets_resent_success:"//div[text()='Tickets Resent']",
        verify_cancel_ticket:"//p[text()='Cancel Ticket']",






       
      




    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate_attendeeInformationPage
    async validate_attendeeInformationPage(){
       const ele= this.page.locator('//span[text()="Attendee Information"]') 
      try {
         await expect.soft(ele).toBeVisible()
      } catch (error) {
        throw new Error('Aloompa|admin | Attendee Information | Attendee Check-in | information header element not visible : Error occured'+error)
       }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_3rd_app_name_c
    async click_3rd_app_name_c(){
        const ele = this.page.locator(this.AttendeeInformation_elements.coachella_app_link)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory |  first app name element not found, click failed|  Error occured: '+error)       
        }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_event_name  
    async click_event_name(value:string){
        const ele=this.page.locator(`//div//p[text()="${value}"]`)  
        try {
            
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | liveOrder | Reservations |  Error occured: '+error)         
        }
    }
    
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   click_on_attendee_info
    async click_on_attendee_info(){
        const ele=this.page.locator(`//span[text()="Attendee Information"]`)  
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   click_on_attendee_Check_in
    async click_on_attendee_Check_in(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_on_attendee_Check_in)  
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in  |  Error occured: '+error)         
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_on_Orders  
    async click_on_Orders(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_on_Orders)  
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   Validate_Sorting_is_Clickable
    async Validate_Sorting_is_Clickable(){
        const ele1=this.page.locator(this.AttendeeInformation_elements.Validate_Attendee_Name_Sorting_is_Clickable)
        const ele2=this.page.locator(this.AttendeeInformation_elements.Validate_Ticket_Type_Sorting_is_Clickable)   
        const ele3=this.page.locator(this.AttendeeInformation_elements.Validate_Ticket_Sorting_is_Clickable) 
        const ele4=this.page.locator(this.AttendeeInformation_elements.Validate_Status_Sorting_is_Clickable) 
        try {
            await ele1.click()
            await this.page.waitForTimeout(1000)
            await ele2.click()
            await this.page.waitForTimeout(1000)
            await ele3.click()
            await this.page.waitForTimeout(1000)
            await ele4.click()
            await this.page.waitForTimeout(1000)
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate_to_total_count  
    async validate_to_total_count(){
        const ele=this.page.locator(this.AttendeeInformation_elements.validate_to_total_count)  
        try {
            await ele.isVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }



     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Validate_count_of_Checked_in  
    async Validate_count_of_Checked_in(){
        const ele=this.page.locator(this.AttendeeInformation_elements.Validate_count_of_Checked_in)  
        try {
            await ele.isVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   click_Return_to_all_events
    async click_Return_to_all_events(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_Return_to_all_events)  
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_to_next_page 
    async click_to_next_page(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_to_next_page)  
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   click_to_previous_page
    async click_to_previous_page(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_to_previous_page)  
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   validate_Attendee_check_in
    async validate_Attendee_check_in(){
        const ele=this.page.locator(this.AttendeeInformation_elements.validate_Attendee_check_in)
        try {
            await expect.soft(ele).toHaveText("Attendee Check-In") 
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate_Orders  
    async validate_Orders(){
        const ele=this.page.locator(this.AttendeeInformation_elements.validate_Orders)
        try {
            await expect.soft(ele).toHaveText("Orders") 
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   validate_fresh_cms_Attendee_check_in_without_data
    async validate_fresh_cms_Attendee_check_in_without_data(){
        const ele=this.page.locator(this.AttendeeInformation_elements.fresh_cms_without_data)
        try {
            await expect.soft(ele).toHaveText("There is no data yet.") 
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   export_csv_for_attendee_check_in
    async export_csv_for_attendee_check_in(){
        const ele=this.page.locator(this.AttendeeInformation_elements.export_csv_for_attendee_check_in)
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   export_csv_for_orders
    async export_csv_for_orders(){
        const ele=this.page.locator(this.AttendeeInformation_elements.export_csv_for_orders)
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   search_fucntionality_visibility
    async search_fucntionality_visibility(){
        const ele=this.page.locator(this.AttendeeInformation_elements.search_fucntionality_visibility)
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   Order_search_fucntionality_visibility
    async Order_search_fucntionality_visibility(){
        const ele=this.page.locator(this.AttendeeInformation_elements.Order_search_fucntionality_visibility)
        try {
            await ele.click()
            await ele.isVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)         
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   search_fucntionality_type
    async search_fucntionality_type(value:string){
        const ele=this.page.locator(this.AttendeeInformation_elements.search_fucntionality)
        try {
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: search_fucntionality_validation
    async search_fucntionality_validation(value1:string){
        const ele = this.page.locator(this.AttendeeInformation_elements.searched_text)
        try {
            await expect.soft(ele).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   search_Order_fucntionality_type
    async search_Order_fucntionality_type(value:string){
        const ele=this.page.locator(this.AttendeeInformation_elements.search_Order_fucntionality_type)
        try {
            await ele.type(value,{delay:200})
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: search_Order_fucntionality_validation
    async search_Order_fucntionality_validation(value1:string){
        const ele = this.page.locator(this.AttendeeInformation_elements.search_Order_fucntionality_validation)
        try {
            await expect.soft(ele).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_Order_dropdown_for_Canceled_orders
    async click_Order_dropdown_for_Active_orders(){
        const ele = this.page.locator(this.AttendeeInformation_elements.click_Order_dropdown).first()
        const ele2 = this.page.locator(this.AttendeeInformation_elements.click_Order_dropdown_container)
      try {

        await ele2.click()
        await ele.click({delay:1000}) 
      } catch (error) {
        throw new Error('Aloompa | admin | Attendee Information | Orders | Error occured:'+error)
  
      } 
      
    }

    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_Order_dropdown_for_Canceled_orders
    async click_Order_dropdown_for_Canceled_orders(){
        const ele = this.page.locator(this.AttendeeInformation_elements.click_Order_dropdown).last()
        const ele2 = this.page.locator(this.AttendeeInformation_elements.click_Order_dropdown_container)
      try {

        await ele2.click()
        await ele.click({delay:1000}) 
      } catch (error) {
        throw new Error(' Aloompa | admin | Attendee Information | Orders | Error occured'+error)
  
      } 
      
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: verify_active_orders
    async verify_active_orders(value1:string){
        const ele = this.page.locator(this.AttendeeInformation_elements.verify_active_orders)
        try {
            await expect.soft(ele).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: verify_Canceled_orders
    async verify_Canceled_orders(value1:string){
        const ele = this.page.locator(this.AttendeeInformation_elements.verify_Canceled_orders)
        try {
            await expect.soft(ele).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   sorting_status_svg
    async sorting_status_svg(){
        const ele1=this.page.locator(this.AttendeeInformation_elements.Validate_Status_Sorting)
        const ele2=this.page.locator(this.AttendeeInformation_elements.SVGAElement).first()
        try {
            await ele1.click()
            await expect(ele2).toBeVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   sorting_status_canceled
    async sorting_status_canceled(value1:string){
        const ele1=this.page.locator(this.AttendeeInformation_elements.Validate_Status_Sorting)
        const ele3=this.page.locator(this.AttendeeInformation_elements.click_to_next_page)
        const ele2=this.page.locator(this.AttendeeInformation_elements.sorting_status_canceled).last()
        try {
            await ele1.click()
            await ele1.scrollIntoViewIfNeeded()
            await ele3.click()
            await ele2.scrollIntoViewIfNeeded()
            await expect.soft(ele2).toHaveText(value1)
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in|  Error occured: '+error)         
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_on_actions_in_orders 
    async click_on_actions_in_orders(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_on_actions_in_orders).first()  
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_on_actions_in_orders 
    async click_on_Resend_tickets_in_actions(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_on_Resend_tickets_in_actions) 
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_on_actions_in_orders 
    async verify_tickets_resent_success(){
        const ele=this.page.locator(this.AttendeeInformation_elements.verify_tickets_resent_success) 
        try {
            await ele.isVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_on_actions_in_orders 
    async verify_cancel_ticket(){
        const ele=this.page.locator(this.AttendeeInformation_elements.verify_cancel_ticket) 
        try {
            await ele.isVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_on_add_notes_in_actions 
    async click_on_add_notes_in_actions(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_on_add_notes_in_actions)
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_on_manage_orders 
    async click_on_manage_orders(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_on_manage_orders)  
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  verify_manage_orders 
    async verify_manage_orders(){
        const ele=this.page.locator(this.AttendeeInformation_elements.verify_manage_orders)  
        try {
            await ele.isVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_on_Details 
    async click_on_Details(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_on_Details)  
        try {

            await ele.click()
            await ele.isVisible()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: verify_return_to_all_orders
    async verify_return_to_all_orders(value1:string){
        const ele = this.page.locator(this.AttendeeInformation_elements.verify_return_to_all_orders)
        const ele2 = this.page.locator(this.AttendeeInformation_elements.validate_Orders)
        try {

            await ele.click()
            await expect.soft(ele2).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_on_Tickets_in_manage_order
    async click_on_Tickets_in_manage_order(value1:string){
        const ele = this.page.locator(this.AttendeeInformation_elements.click_on_Tickets_in_manage_order)
        const ele2 = this.page.locator(this.AttendeeInformation_elements.validate_tickets_is_clicked)
        try {

            await ele.click()
            await expect.soft(ele2).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_on_Activity_in_manage_order
    async click_on_Activity_in_manage_order(value1:string){
        const ele = this.page.locator(this.AttendeeInformation_elements.click_on_Activity_in_manage_order)
        const ele2 = this.page.locator(this.AttendeeInformation_elements.OrderActivity)
        try {

            await ele.click()
            await expect.soft(ele2).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: current_value
    async current_value(value1:string){
        
        const ele2 = this.page.locator(this.AttendeeInformation_elements.current_value)
        try {

            
            await expect.soft(ele2).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click_on_add_notes_in_Activity
    async click_on_add_notes_in_Activity(){
        const ele = this.page.locator(this.AttendeeInformation_elements.click_on_add_notes_in_Activity)
      
        try {

            await ele.click()
    
        } catch (error) {
            throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:   type_on_add_notes_in_Activity
    async type_on_add_notes_in_Activity(value:string){
        const ele=this.page.locator(this.AttendeeInformation_elements.type_on_add_notes_in_Activity)
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
    // Description:   clear_and_type_first_name
    async clear_and_type_first_name(value:string){
        const ele=this.page.locator(this.AttendeeInformation_elements.clear_and_type_first_name)
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
    // Description:   clear_and_type_last_name
    async clear_and_type_last_name(value:string){
        const ele=this.page.locator(this.AttendeeInformation_elements.clear_and_type_last_name)
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
    // Description:   clear_and_type_email
    async clear_and_type_email(value:string){
        const ele=this.page.locator(this.AttendeeInformation_elements.clear_and_type_email)
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
    // Description:   clear_and_type_Phone_number
    async clear_and_type_Phone_number(value:string){
        const ele=this.page.locator(this.AttendeeInformation_elements.clear_and_type_Phone_number)
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
        const ele=this.page.locator(this.AttendeeInformation_elements.clear_and_type_State)
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
    // Description:   clear_and_type_ZipCode
    async clear_and_type_ZipCode(value:string){
        const ele=this.page.locator(this.AttendeeInformation_elements.clear_and_type_ZipCode)
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
    // Description:   savebtn_order_management
    async savebtn_order_management(){
        const ele=this.page.locator(this.AttendeeInformation_elements.savebtn_order_management)
        try {
            await ele.click()
            
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  savebtn_order_management_add_notes 
    async savebtn_order_management_add_notes(){
        const ele=this.page.locator(this.AttendeeInformation_elements.savebtn_order_management_add_notes)
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  click_added_notes_and_details_update_btn 
    async click_added_notes_and_details_update_btn(){
        const ele=this.page.locator(this.AttendeeInformation_elements.click_added_notes_and_details_update_btn)
        try {
            await ele.click()
        } catch (error) {
          throw new Error('Aloompa | admin | Attendee Information | Attendee Check-in |  Error occured: '+error)         
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: verify_added_notes
    async verify_added_notes(value1:string){
        const ele = this.page.locator(this.AttendeeInformation_elements.verify_added_notes)
        try {
            await expect.soft(ele).toHaveText(value1)
        } catch (error) {
            throw new Error('Aloompa | admin | Attendee Information | Orders |  Error occured: '+error)       
        }
    }







}