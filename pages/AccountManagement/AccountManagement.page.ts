import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";
export default class AccountManagement{
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private Account_Management_elements = {
        button_ele:'//button[@data-testid="button"]',
        input_ele_form:'//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        settings_button:"//a[@title='Settings']//span[1]",
        Account_Management_btn:"//a[@title='Account Management']//span[1]",
        User_Management_text:"//h1[text()='User Management']",
        User_Management:"//a[@title='User Management']",
        add_account_btn:"//span[text()='Add Account']",
        action_btn:"(//span[text()='Actions'])[1]",
        action_btn_by_value:'//p[text()="${value1}"]//parent::td//following-sibling::td[2]//button',
        Account_status:"(//p[text()='Not Confirmed'])[1]",
        resend_code:"//ul[@id='menu-list-grow']//li[1]",
        remove_button:"//p[text()='Remove']",
        resend_button:"//p[text()='Resend Code']",
        Email_Address:"//input[@class='MuiInputBase-input MuiOutlinedInput-input']",
        radio_button_full_admin_checked:"(//span[@class='MuiIconButton-label']//input)[1]",
        radio_button_selected_access_checked:"(//input[@type='radio'])[2]",
        save_btn:"//button[@type='submit']",
        yes_btn_for_remove:"(//button[@data-testid='button'])[3]",
        selected_access_app_admin_btn:"(//input[@type='checkbox'])[1]",
        selected_access_LiveOrder_admin_btn:"(//input[@type='checkbox'])[2]",
        selected_access_Order_Management_admin_btn:"(//input[@type='checkbox'])[3]",
        selected_access_Access_Control_admin_btn:"(//input[@type='checkbox'])[4]",
        invalid_email_warning:"//div[text()='Email address not valid']",
        Verify_down_arrow_button_is_working:"(//div[@role='button']//div)[2]",
        Verify_next_button_is_working:"//span[text()='Next']",
        Verify_previous_button_is_working:"//span[text()='Previous']", 
        User_Activity:"//a[@title='User Activity']",
        account_exist_or_not:"//p[text()='talhahabib715@gmail.com']",
        cross_btn:"//button[@data-testid='modal-close-button']",





       

       

    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click settings on top right

    async click_settings(){
        const ele = this.page.locator(this.Account_Management_elements.settings_button)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | click faild |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: click Account Management in settings
    async click_Account_Management(){
        const ele = this.page.locator(this.Account_Management_elements.Account_Management_btn)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | click faild |  Error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate Account Management is visible
    async validate_Account_Management(){
        const ele = this.page.locator(this.Account_Management_elements.User_Management_text)
        try {
            await ele.isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management |  Error occured: '+error)       
        }
    }




    // // Module Name: Aloompa | Admin
    // // Feature Name: LiveOrder&reservations
    // // Screen Type: Desktop
    // // Description: verify Account Status is "not confirmed"
    // async  Account_Status(){
    //     const suggestedName=this.page.locator(this.Account_Management_elements.Account_status).textContent()

       
    //       try {
    //          expect(await suggestedName==="Not Confirmed").toBeTruthy()
    //       } catch (error) {
    //         throw new Error("Aloompa|admin | App directory | 001 test arif | settings | account management | error occured:" + error)
    //       }
    // }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: verify invalid email warning
    async  invalid_email_warning(){
        const invalid_email_warning=this.page.locator(this.Account_Management_elements.invalid_email_warning).textContent()

       
          try {
             expect(await invalid_email_warning==="Email address not valid")
          } catch (error) {
            throw new Error("Aloompa|admin | App directory | 001 test arif | settings | account management | error occured:" + error)
          }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: verify Add acount
    async Add_acount(){
        const ele = this.page.locator(this.Account_Management_elements.action_btn)
        try {
            await ele.isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+error)       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click Add account
    async Click_Add_account(){
        const ele = this.page.locator(this.Account_Management_elements.add_account_btn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+error)       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: type "add_Account" Email Address
    async type_add_Account_Email_Address    (value:string){
        const ele = this.page.locator(this.Account_Management_elements.Email_Address)
        try {
            await ele.type(value,{delay:100})
            await this.page.waitForLoadState('networkidle')
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+error)       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: type "add_Account" Email Address
    async type_add_Account_Email_Address_for_resend    (value:string){
        const ele = this.page.locator(this.Account_Management_elements.Email_Address)
        const ele2 = this.page.locator(this.Account_Management_elements.account_exist_or_not)
        const ele3 = this.page.locator(this.Account_Management_elements.save_btn)
        const ele4 = this.page.locator(this.Account_Management_elements.cross_btn)
        try {

            if (await ele2.isVisible()) {
                await this.page.waitForTimeout(2000)
                await ele4.click()
            }
            else{
                
                await ele.type(value,{delay:100})
            await this.page.waitForLoadState('networkidle')
            await ele3.click()
            }



            // await ele.type(value,{delay:100})
            // await this.page.waitForLoadState('networkidle')
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+error)       
        }
    }


    



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: delete added account delete
    async  added_account_delete_action_btn(value1:string){
        
        const ele_4=this.page.locator(`//p[text()="${value1}"]//parent::td//following-sibling::td[2]//button`)
        
       
          try {
         
                
                ele_4.click()
                
                
                
                

          } catch (error) {
            throw new Error("Aloompa|admin | App directory | 001 test arif | settings | account management | error occured:" + error)
          }
    }


     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: delete added account delete
    async  added_account_delete_remove_btn(){
        
  
        const ele_5=this.page.locator(this.Account_Management_elements.remove_button)
       
       
          try {
         
                ele_5.click({timeout:2000})
               
                // ele_5.click()
                
               
                

          } catch (error) {
            throw new Error("Aloompa|admin | App directory | 001 test arif | settings | account management | error occured:" + error)
          }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: delete added account delete
    async  added_account_delete_yes_btn(){
        
       
        const ele_7=this.page.waitForSelector(this.Account_Management_elements.yes_btn_for_remove)
       
          try {
         
                
                
                (await ele_7).click()
                

          } catch (error) {
            throw new Error("Aloompa|admin | App directory | 001 test arif | settings | account management | error occured:" + error)
          }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: delete added account delete
    async resend_button_1(){
        
        const ele_4=this.page.locator(`//p[text()="talhahabib715@gmail.com"]//parent::td//following-sibling::td[2]//button`)
        const ele_5=this.page.locator(this.Account_Management_elements.resend_button)
        
        
       
          try {
         
                
                ele_4.click({timeout:3000})
                ele_5.click()
                
                await this.page.waitForTimeout(5000)
                
                
                

          } catch (error) {
            throw new Error("Aloompa|admin | App directory | 001 test arif | settings | account management | error occured:" + error)
          }
    }

    

    




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check add_account full_admin radio btn selected by default
    async check_add_account_full_admin_radio_btn_selected_by_default(){
        const ele=this.page.locator(this.Account_Management_elements.radio_button_full_admin_checked)
        try {
           await expect (ele).toBeChecked()
        } catch (error) {
          throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+ error)  
          
          
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check add_account full_admin radio btn
    async check_add_account_full_admin_radio_btn(){
        const ele=this.page.locator(this.Account_Management_elements.radio_button_full_admin_checked)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured:'+ error)  
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check add_account full_admin radio btn
    async check_add_account_full_admin_radio_btn_for_resend(){
        const ele=this.page.locator(this.Account_Management_elements.radio_button_full_admin_checked)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured:'+ error)  
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check add_account selected_access radio btn
    async check_add_account_selected_access_radio_btn(){
        const ele=this.page.locator(this.Account_Management_elements.radio_button_selected_access_checked)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+ error)  
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check  selected_access "app_admin" btn in "add_account" section
    async check_add_account_selected_access_app_admin_btn(){
        const ele=this.page.locator(this.Account_Management_elements.selected_access_app_admin_btn)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+ error)  
        }
    }





    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description:  check  selected_access "LiveOrder_adminn" btn in "add_account" section
    async check_add_account_selected_access_LiveOrder_admin_btn(){
        const ele=this.page.locator(this.Account_Management_elements.selected_access_LiveOrder_admin_btn)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+ error)  
        }
    }






    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check  selected_access "Order_Management_admin" btn in "add_account" section
    async check_add_account_selected_access_Order_Management_admin_btn(){
        const ele=this.page.locator(this.Account_Management_elements.selected_access_Order_Management_admin_btn)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+ error)  
        }
    }






    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check  selected_access "Access_Control" btn in "add_account" section
    async check_add_account_selected_access_Access_Control_admin_btn(){
        const ele=this.page.locator(this.Account_Management_elements.selected_access_Access_Control_admin_btn)
        try {
            if(!await ele.isChecked()){
                await ele.check()
            }
        } catch (error) {
          throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+ error)  
        }
    }


 


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click save button
    async Click_save_button(){
        const ele = this.page.locator(this.Account_Management_elements.save_btn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Account Status Check
    async  Account_Status_Check(value1:string){
        const ele_2=this.page.locator(`//p[text()="${value1}"]`)
        const ele_3=this.page.locator(this.Account_Management_elements.resend_code)
        const ele_4=this.page.locator(this.Account_Management_elements.action_btn)
        const ele_5=this.page.locator(this.Account_Management_elements.remove_button)
        
       
          try {
            
            
            if (await ele_2.isVisible()) {
                ele_4.click()

                ele_3.isVisible()
                ele_5.isVisible()
                
            }

          } catch (error) {
            throw new Error("Aloompa|admin | App directory | 001 test arif | settings | account management | error occured:" + error)
          }
    }








    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate "Actions" button
    async validate_Actions_btn(){
        const ele = this.page.locator(this.Account_Management_elements.action_btn)
        try {
            await ele.isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+error)       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: validate_Add_Account_btn
    async validate_Add_Account_btn(){
        const ele = this.page.locator(this.Account_Management_elements.add_account_btn)
        try {
            await ele.isVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking_Add_Account_btn
    async Clicking_Add_Account_btn(){
        const ele = this.page.locator(this.Account_Management_elements.add_account_btn)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+error)       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking_User_Activity
    async Clicking_User_Activity(){
        const ele = this.page.locator(this.Account_Management_elements.User_Activity)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking_down_arrow_button_is_working
    async Clicking_down_arrow_button_is_working (){
        const ele = this.page.locator(this.Account_Management_elements.Verify_down_arrow_button_is_working)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | User Management | error occured: '+error)       
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking_next_button_is_working
    async Clicking_next_button_is_working (){
        const ele = this.page.locator(this.Account_Management_elements.Verify_next_button_is_working)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | User Management | error occured: '+error)       
        }
    }




    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking_previous_button_is_working
    async Clicking_previous_button_is_working (){
        const ele = this.page.locator(this.Account_Management_elements.Verify_previous_button_is_working)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | User Management | error occured: '+error)       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking_User_Management
    async Clicking_User_Management (){
        const ele = this.page.locator(this.Account_Management_elements.User_Management)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | App directory | 001 test arif | settings | account management | User Management | error occured: '+error)       
        }
    }





}
    