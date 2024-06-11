import test, { expect } from "@fixtures/basePages"
import functions from "@helper-function/functions";
import AccountManagement from "@pages/AccountManagement.page";
import ReservationPage from "@pages/Reservations.page";
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";
const authFile='user.json'

test("AccountManagement | Verify LiveOrder & Reservation (BETA) navigation is working properly", async ({ loginPage, page, AppsPage }) => {
    await test.step('Login as Admin', async() =>{ 
        await page.goto('/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        await page.waitForSelector(`//img[@data-testid="app-factoryIcon"]`,{state:'visible'});
        // Login with valid credentials
        await loginPage.login(data.username, data.password)

        
    })

    await test.step('Type search function ', async() =>{ 
        await AppsPage.typeSearchFunction('2023 Unidev Test 0001')
    })

    await test.step('click on unidev test 001', async() =>{ 
        await AppsPage.click_on_app('2023 UniDev Test 0001')
    })

    await test.step('click on 3 by 3 grid', async() =>{ 
        await AppsPage.click_on_3_by_3_grid()
    })

    await test.step('click on live order reservations', async() =>{ 
        await AppsPage.click_on_liveorder_reservations()

        await page.waitForLoadState('domcontentloaded')
        await page.context().storageState({ path: authFile })
    })
})


test.describe('use the same authentication mechanism',async()=>{
    test.use({storageState:authFile}) 

    test("011AccountManagement_User_Management_001 | Validate the settings from app directory ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_first_app_name', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })


        
       
    })
    test("011AccountManagement_User_Management_002 | Validate the Account Management and  User Management from settings ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('validate Account Management  ', async() =>{ 
            await AccountManagement.validate_Account_Management();
            
            
        })
        await test.step('Clicking User Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })


        
       
    })
    test("011AccountManagement_User_Management_003 | Validate the actions button is visible ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking User Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })
        await test.step('validate actions button  ', async() =>{ 
            await AccountManagement.validate_Actions_btn();
            
            
        })


        
       
    })
    test("011AccountManagement_User_Management_004 | Validate the add account button is clickeble ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking User Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })
        await test.step('click add account', async() =>{ 
            await AccountManagement.Click_Add_account();
            
            
        })
       
    })
    test("011AccountManagement_User_Management_005 | Validate the full admin radio button is selected by default ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking User Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })
        await test.step('click add account', async() =>{ 
            await AccountManagement.Click_Add_account();
            
            
        })
        await test.step('verify add_account full_admin radio button selected by default', async() =>{ 
            await AccountManagement.check_add_account_full_admin_radio_btn_selected_by_default();
            
            
        })
       
    })
    test("011AccountManagement_User_Management_006 | Validate the add account section is not accepting invalid email ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking User Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })
        await test.step('Click Add account', async() =>{ 
            await AccountManagement.Click_Add_account();
            
        })

        await test.step('type add account email  ', async() =>{ 
            await AccountManagement.type_add_Account_Email_Address('invalid email');
             
        })

        await test.step(' Click save button  ', async() =>{ 
            await AccountManagement.Click_save_button()
            
        })

        await test.step('invalid email warning  ', async() =>{ 
            await AccountManagement.invalid_email_warning();
             
        })

       
    })
    test("011AccountManagement_User_Management_007 | Validate the add account  is working with 'Full Admin Access' & Email Address Section is accepting valid inputs as email. ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
             
        })
        await test.step('Clicking User Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })
        await test.step('Click Add account', async() =>{ 
            await AccountManagement.Click_Add_account();
             
        })

        await test.step('type add account email  ', async() =>{ 
            await AccountManagement.type_add_Account_Email_Address('test.by.arif.1@gmail.com');
             
        })
        await test.step('check add_account full_admin radio_btn   ', async() =>{ 
            await AccountManagement.check_add_account_full_admin_radio_btn()

        })

        await test.step(' Click save button  ', async() =>{ 
            await AccountManagement.Click_save_button()
            await page.waitForTimeout(2000)
            
        })
       
    })
    test("011AccountManagement_User_Management_008 | Validate the add account  is working with 'Selected Access Only' ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
             
        })
        await test.step('Clicking User Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })
        await test.step('click Add Account ', async() =>{ 
            await AccountManagement.Click_Add_account();
             
        })

        await test.step('type add account email  ', async() =>{ 
            await AccountManagement.type_add_Account_Email_Address('talhahabib715@gmail.com');
             
        })
        await test.step('check add_account selected_access radio button   ', async() =>{ 
            await AccountManagement.check_add_account_selected_access_radio_btn()

        })

        await test.step('check_add_account_selected_access_app_admin_btn   ', async() =>{ 
            await AccountManagement.check_add_account_selected_access_app_admin_btn()

        })
        await test.step('check_add_account_selected_access_LiveOrder_admin_btn   ', async() =>{ 
            await AccountManagement.check_add_account_selected_access_LiveOrder_admin_btn()

        })
        await test.step('check_add_account_selected_access_Order_Management_admin_btn   ', async() =>{ 
            await AccountManagement.check_add_account_selected_access_Order_Management_admin_btn()

        })
        await test.step('check_add_account_selected_access_Access_Control_admin_btn   ', async() =>{ 
            await AccountManagement.check_add_account_selected_access_Access_Control_admin_btn()

        })

        await test.step(' Click_save_button  ', async() =>{ 
            await AccountManagement.Click_save_button()
            
        })
       
    })
    test("011AccountManagement_User_Management_009 | Validate the account status & Action button is functional ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking User Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })
        // await test.step(' Check Account_Status', async() =>{ 
        //     await AccountManagement.Account_Status();
            
        // })


        await test.step('Account Status ', async() =>{ 
            await AccountManagement.Account_Status_Check('Not Confirmed');
            
        })
        await test.step('validate actions button  ', async() =>{ 
            await AccountManagement.validate_Actions_btn();
            
        })
       
    })
    test("011AccountManagement_User_Management_010 | Verify Add Account button is functional ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking_User_Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })
        await test.step('validate add account button ', async() =>{ 
            await AccountManagement.validate_Add_Account_btn();
         
            
        })


        
       
    })
    test("011AccountManagement_User_Management_011 | clicking the add account button ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking_User_Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })
        await test.step('Clicking_Add_Account_btn', async() =>{ 
            await AccountManagement.Clicking_Add_Account_btn();
            
            
        })


        
       
    })
    test("011AccountManagement_User_Management_012 | Validate the 'added account' is removed (full admin access) & Remove button is functional. And the user got removed ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking_User_Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
        })
        
        await test.step('added_account_delete', async() =>{ 
            await AccountManagement.added_account_delete_action_btn('test.by.arif.1@gmail.com');
            await AccountManagement.added_account_delete_remove_btn();
            await page.waitForTimeout(1000)
            
            
        })
        
        await test.step('added_account_delete', async() =>{ 
            
            await AccountManagement.added_account_delete_yes_btn();
            await page.waitForTimeout(2000)
            
            
        })
        
       
    })
    test("011AccountManagement_User_Management_013 | Validate the 'added account'   is removed ('Selected Access Only')", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking_User_Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            await page.waitForTimeout(1000)
            
            
            
        })
        
        await test.step('added_account_delete', async() =>{ 
            await page.waitForTimeout(1000)
            await AccountManagement.added_account_delete_action_btn('talhahabib715@gmail.com');
            await page.waitForTimeout(1000)
            await AccountManagement.added_account_delete_remove_btn();
            await page.waitForTimeout(1000)
            await AccountManagement.added_account_delete_yes_btn();
            
            
        })


        
       
    })
    test("011AccountManagement_User_Management_014 | Verify Resend button is functional. ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking_User_Management', async() =>{ 
            await AccountManagement.Clicking_User_Management();
            
            
            
        })

        // await test.step('Click Add account', async() =>{ 
        //     await AccountManagement.Click_Add_account();
             
        // })


        // await test.step('type add account email  ', async() =>{ 
        //     await AccountManagement.type_add_Account_Email_Address_for_resend('talhahabib715@gmail.com');
            
             
        // })


        // await test.step('check add_account full_admin radio_btn   ', async() =>{ 
        //     await AccountManagement.check_add_account_full_admin_radio_btn_for_resend()

        // })

        // await test.step(' Click save button  ', async() =>{ 
        //     await AccountManagement.Click_save_button()
            
        // })

        await test.step('resend_button', async() =>{ 
            await AccountManagement.resend_button_1();
            
            
        })
        
        
        
        
        
       
    })
    test("011AccountManagement_User__Activity__015 | Verify down arrow button is working ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        await test.step('Clicking_User_Activity', async() =>{ 
            await AccountManagement.Clicking_User_Activity();
            
            
        })
        await test.step('Clicking_down_arrow_button_is_working', async() =>{ 
            await AccountManagement.Clicking_down_arrow_button_is_working();
            
            
        })
        await test.step('Clicking_down_arrow_button_is_working', async() =>{ 
            await AccountManagement.Clicking_down_arrow_button_is_working();
            
            
        })


        
       
    })
    test("011AccountManagement_User__Activity__016 | Verify next button is working  ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        
        await test.step('Clicking_User_Activity', async() =>{ 
            await AccountManagement.Clicking_User_Activity();
            
            
        })

        await test.step('Clicking_next_button_is_working', async() =>{ 
            await AccountManagement.Clicking_next_button_is_working();
            
            
        })


        
       
    })
    test("011AccountManagement_User__Activity__017 | Verify previous button is working ", async ({ EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings  ', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click Account Management  ', async() =>{ 
            await AccountManagement.click_Account_Management();
            
            
        })
        
        await test.step('Clicking_User_Activity', async() =>{ 
            await AccountManagement.Clicking_User_Activity();
            
            
        })

        await test.step('Clicking_next_button_is_working', async() =>{ 
            await AccountManagement.Clicking_next_button_is_working();
            
            
        })

        await test.step('Clicking_previous_button_is_working', async() =>{ 
            await AccountManagement.Clicking_previous_button_is_working();
            
            
        })


        
       
    })

    //02/05/2024


    
})