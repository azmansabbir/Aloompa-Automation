import test, { expect } from "@fixtures/basePages"
import functions from "@helper-function/functions";
import AccountManagement from "@pages/AccountManagement.page";
import AttendeeInformationPage from "@pages/AttendeeInformation.page";
import Design from "@pages/Design.page";
import ReservationPage from "@pages/Reservations.page";
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";
const authFile='user.json'

test(" Design | Verify LiveOrder & Reservation (BETA) navigation is working properly", async ({ loginPage, page, AppsPage }) => {
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


    test("007Attendee_Information_Page_Attendee_Check-In_001 |  validate Attendee Information Page ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step('click on event name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('Test Event Name')
            await page.waitForTimeout(3000)
    
        })

        await test.step('validate attendee Information Page', async() =>{ 
            await AttendeeInformationPage.validate_attendeeInformationPage()
            await page.waitForTimeout(3000)
    
        })


        
       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_002 |  Click on event name ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step('  ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_003 |  Click on attendee information and attendee check-in ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await page.waitForTimeout(1000)
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('Test Event Name')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_004 |  validate Attendee check_in ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('Test Event Name')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' validate_Attendee_check_in ', async() =>{ 
            await AttendeeInformationPage.validate_Attendee_check_in()
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_005 |  validate fresh cms without data ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await page.waitForTimeout(1000)
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 New Event')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' validate_fresh_cms_Attendee_check_in_without_data ', async() =>{ 
            await AttendeeInformationPage.validate_fresh_cms_Attendee_check_in_without_data()
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_006 |  validate export csv functionality for attendee check-in ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' export_csv_for_attendee_check_in ', async() =>{ 
            await AttendeeInformationPage.export_csv_for_attendee_check_in()
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_007 |  validate search functionality visible or not  ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' search_fucntionality_visibility ', async() =>{ 
            await AttendeeInformationPage.search_fucntionality_visibility()
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_008 |  validate search functionality ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' search_fucntionality_type ', async() =>{ 
            await AttendeeInformationPage.search_fucntionality_type("bce376b7")
            await page.waitForTimeout(3000)
    
        })

        await test.step(' search_fucntionality_validation ', async() =>{ 
            await AttendeeInformationPage.search_fucntionality_validation("bce376b7")
            await page.waitForTimeout(3000)
    
        })


        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_009 |  validate 'return to all events' for attendee check-in ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })
        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_Return_to_all_events ', async() =>{ 
            await AttendeeInformationPage.click_Return_to_all_events()
            await page.waitForTimeout(3000)
    
        })
       


        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_010 |  validate 'Next' button ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })
        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_to_next_page ', async() =>{ 
            await AttendeeInformationPage.click_to_next_page()
            await page.waitForTimeout(3000)
    
        })
       


        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_011 |  validate 'previous' button ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await page.waitForTimeout(1000)
            await AttendeeInformationPage.click_3rd_app_name_c()
        })
        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })

        await test.step(' click_to_next_page ', async() =>{ 
            await AttendeeInformationPage.click_to_next_page()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_to_previous_page ', async() =>{ 
            await AttendeeInformationPage.click_to_previous_page()
            await page.waitForTimeout(3000)
    
        })
       


        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_012 |  validate 'total count' is visible ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })
        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })

        await test.step(' validate_to_total_count ', async() =>{ 
            await AttendeeInformationPage.validate_to_total_count()
            await page.waitForTimeout(3000)
    
        })
        
       


        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_013 |  validate 'count of Checked in' is visible ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })
        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })

        await test.step(' Validate_count_of_Checked_in ', async() =>{ 
            await AttendeeInformationPage.Validate_count_of_Checked_in ()
            await page.waitForTimeout(3000)
    
        })
        
       


        


       
    })
    test("007Attendee_Information_Page_Attendee_Check-In_014 |  validate 'attendee name,Ticket Type ,Ticket#,Status' Sorting is Clickeble ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })
        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })

        await test.step(' Validate_Sorting_is_Clickable ', async() =>{ 
            await AttendeeInformationPage.Validate_Sorting_is_Clickable ()
            await page.waitForTimeout(3000)
    
        })
        
       


        


       
    })
    test("007Attendee_Information_Page_Orders_015 |  Click on Orders ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('Test Event Name')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Orders_016 |  validate Orders ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await page.waitForTimeout(1000)
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('Test Event Name')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' validate_Orders ', async() =>{ 
            await AttendeeInformationPage.validate_Orders()
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Orders_017 |  validate 'return to all events' for Orders ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })
        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_Return_to_all_events ', async() =>{ 
            await AttendeeInformationPage.click_Return_to_all_events()
            await page.waitForTimeout(3000)
    
        })
       


        


       
    })
    test("007Attendee_Information_Page_Orders_018 |  validate export csv functionality for Orders ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' export_csv_for_orders ', async() =>{ 
            await AttendeeInformationPage.export_csv_for_orders()
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Orders_019 |  click drop down and verify active orders ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_Order_dropdown_for_Active_orders ', async() =>{ 
            await AttendeeInformationPage.click_Order_dropdown_for_Active_orders()
            await page.waitForTimeout(3000)
    
        })

        await test.step(' verify_active_orders ', async() =>{ 
            await AttendeeInformationPage.verify_active_orders("Cancel Order")
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Orders_020 |  click drop down and verify Canceled orders ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
            
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_Order_dropdown_for_Canceled_orders ', async() =>{ 
            await AttendeeInformationPage.click_Order_dropdown_for_Canceled_orders()
            await page.waitForTimeout(3000)
    
        })

        await test.step(' verify_Canceled_orders ', async() =>{ 
            await AttendeeInformationPage.verify_Canceled_orders("Order Canceled")
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Orders_021 |  validate order search functionality visible or not  ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' Order_search_fucntionality_visibility ', async() =>{ 
            await AttendeeInformationPage.Order_search_fucntionality_visibility()
            await page.waitForTimeout(3000)
    
        })
        


       
    })
    test("007Attendee_Information_Page_Orders_022 |  validate search functionality ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await page.waitForTimeout(1000)
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' search_Order_fucntionality_type ', async() =>{ 
            await AttendeeInformationPage.search_Order_fucntionality_type("6C682528")
            await page.waitForTimeout(3000)
    
        })

        await test.step(' search_Order_fucntionality_validation ', async() =>{ 
            await AttendeeInformationPage.search_Order_fucntionality_validation("6C682528")
            await page.waitForTimeout(3000)
    
        })


        


       
    })
    test("007Attendee_Information_Page_Orders_023 |  validate sorting for 'checked in' functionality ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step('  ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step('  ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step('  ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })


        await test.step('  ', async() =>{ 
            await AttendeeInformationPage.sorting_status_svg()
            await page.waitForTimeout(3000)
           
    
        })
        


        


       
    })
    test.skip("007Attendee_Information_Page_Orders_024 |  validate sorting for 'Canceled' functionality ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
        await test.step(' click_on_attendee_Check_in ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_Check_in()
            await page.waitForTimeout(3000)
    
        })


        await test.step(' sorting_status_canceled ', async() =>{ 
            await AttendeeInformationPage.sorting_status_canceled("Canceled")
    
        })
        


        


       
    })
    test("007Attendee_Information_Page_Orders_025 |  validate action button on orders ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })
        


        


       
    })
    test("007Attendee_Information_Page_Orders_026 |  Clicking manage order ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
    
        })
        


        


       
    })
    test("007Attendee_Information_Page_Orders_027 |  verify manage order ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await page.waitForTimeout(1000)
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' verify_manage_orders ', async() =>{ 
            await AttendeeInformationPage.verify_manage_orders()
            await page.waitForTimeout(2000)
    
        })
        


        


       
    })
    test("007Attendee_Information_Page_Orders_028 |  verify return to all orders ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await page.waitForTimeout(1000)
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' verify_return_to_all_orders ', async() =>{ 
            await AttendeeInformationPage.verify_return_to_all_orders("Orders")
            await page.waitForTimeout(2000)
    
        })
        


        


       
    })
    test("007Attendee_Information_Page_Orders_029 |  verify Details in manage order ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' verify_manage_orders ', async() =>{ 
            await AttendeeInformationPage.verify_manage_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_Details ', async() =>{ 
            await AttendeeInformationPage.click_on_Details()
            await page.waitForTimeout(2000)
    
        })
        


        


       
    })
    test("007Attendee_Information_Page_Orders_030 |  clear and type first name,Last name,Email,Phone,Sate,Zipcode,and click save btn ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' verify_manage_orders ', async() =>{ 
            await AttendeeInformationPage.verify_manage_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_Details ', async() =>{ 
            await AttendeeInformationPage.click_on_Details()
           
            
    
        })


        await test.step(' clear_and_type_first_name ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_first_name("First Name")
            await page.waitForTimeout(2000)

        })


        
        await test.step(' clear_and_type_last_name ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_last_name("Last Name")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' clear_and_type_email ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_email("test@example.com")
            await page.waitForTimeout(2000)
    
        })
        await test.step(' clear_and_type_Phone_number ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_Phone_number("01521330869")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' clear_and_type_State ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_State("State")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' clear_and_type_ZipCode ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_ZipCode("1230")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' savebtn_order_management ', async() =>{ 
            await AttendeeInformationPage.savebtn_order_management()
            await page.waitForTimeout(2000)
    
        })
        

       
    })
    test("007Attendee_Information_Page_Orders_031 |  validate tickets is clicked from Manage Order ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' verify_manage_orders ', async() =>{ 
            await AttendeeInformationPage.verify_manage_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_Tickets_in_manage_order ', async() =>{ 
            await AttendeeInformationPage.click_on_Tickets_in_manage_order("Tickets")
            await page.waitForTimeout(2000)
    
        })
        


        


       
    })
    test("007Attendee_Information_Page_Orders_032 |  validate Activity is clicked from Manage Order ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' verify_manage_orders ', async() =>{ 
            await AttendeeInformationPage.verify_manage_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_Activity_in_manage_order ', async() =>{ 
            await AttendeeInformationPage.click_on_Activity_in_manage_order("Order Activity")
            await page.waitForTimeout(2000)
    
        })
        


        


       
    })
    test("007Attendee_Information_Page_Orders_033 |   add notes is clicked from Manage Order ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
    
        })


        await test.step(' click_on_Activity_in_manage_order ', async() =>{ 
            await AttendeeInformationPage.click_on_Activity_in_manage_order("Order Activity")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_add_notes_in_Activity ', async() =>{ 
            await AttendeeInformationPage.click_on_add_notes_in_Activity()
            await page.waitForTimeout(2000)
    
        })
        


        


       
    })
    test("007Attendee_Information_Page_Orders_034 |  type on add notes from Manage Order  ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
    
        })


        await test.step(' click_on_Activity_in_manage_order ', async() =>{ 
            await AttendeeInformationPage.click_on_Activity_in_manage_order("Order Activity")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_add_notes_in_Activity ', async() =>{ 
            await AttendeeInformationPage.click_on_add_notes_in_Activity()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' type_on_add_notes_in_Activity ', async() =>{ 
            await AttendeeInformationPage.type_on_add_notes_in_Activity("Add Notes")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' savebtn_order_management_add_notes ', async() =>{ 
            await AttendeeInformationPage.savebtn_order_management_add_notes()
            await page.waitForTimeout(2000)
    
        })



       
    })
    test("007Attendee_Information_Page_Orders_035 |  verify added notes from Manage Order  ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
    
        })


        await test.step(' click_on_Activity_in_manage_order ', async() =>{ 
            await AttendeeInformationPage.click_on_Activity_in_manage_order("Order Activity")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_add_notes_in_Activity ', async() =>{ 
            await AttendeeInformationPage.click_on_add_notes_in_Activity()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' type_on_add_notes_in_Activity ', async() =>{ 
            await AttendeeInformationPage.type_on_add_notes_in_Activity("Add Notes")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' savebtn_order_management_add_notes ', async() =>{ 
            await AttendeeInformationPage.savebtn_order_management_add_notes()
            await page.waitForTimeout(2000)
    
        })


        await test.step(' click_added_notes_and_details_update_btn ', async() =>{ 
            await AttendeeInformationPage.click_added_notes_and_details_update_btn()
            await page.waitForTimeout(2000)
    
        })
        await test.step(' verify_added_notes ', async() =>{ 
            await AttendeeInformationPage.verify_added_notes("Add Notes")
            await page.waitForTimeout(2000)
    
        })





       
    })
    test("007Attendee_Information_Page_Orders_036 |  validate Order Details in activity ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })
        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
        })
        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
        })
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
        })
        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
        })
        await test.step(' click_on_manage_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_manage_orders()
            await page.waitForTimeout(2000)
        })
        await test.step(' verify_manage_orders ', async() =>{ 
            await AttendeeInformationPage.verify_manage_orders()
            await page.waitForTimeout(2000)
        })
        await test.step(' click_on_Details ', async() =>{ 
            await AttendeeInformationPage.click_on_Details()
        })
        await test.step(' clear_and_type_first_name ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_first_name("First Name - (for validation)")
            await page.waitForTimeout(2000)
        })
        await test.step(' clear_and_type_last_name ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_last_name("Last Name")
            await page.waitForTimeout(2000)
        })
        await test.step(' clear_and_type_email ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_email("test@example.com")
            await page.waitForTimeout(2000)
        })
        await test.step(' clear_and_type_Phone_number ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_Phone_number("01521330869")
            await page.waitForTimeout(2000)
        })
        await test.step(' clear_and_type_State ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_State("State")
            await page.waitForTimeout(2000)
        })
        await test.step(' clear_and_type_ZipCode ', async() =>{ 
            await AttendeeInformationPage.clear_and_type_ZipCode("1230")
            await page.waitForTimeout(2000)
        })
        await test.step(' savebtn_order_management ', async() =>{ 
            await AttendeeInformationPage.savebtn_order_management()
            await page.waitForTimeout(2000)
        })
        await test.step(' click_on_Activity_in_manage_order ', async() =>{ 
            await AttendeeInformationPage.click_on_Activity_in_manage_order("Order Activity")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_added_notes_and_details_update_btn ', async() =>{ 
            await AttendeeInformationPage.click_added_notes_and_details_update_btn()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' current_value ', async() =>{ 
            await page.waitForTimeout(1000)
            await AttendeeInformationPage.current_value("Current Value: First Name - (for validation)")
            await page.waitForTimeout(2000)
    
        })


        

    })
    test("007Attendee_Information_Page_Orders_037 |  type on add notes from actions  ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_add_notes_in_actions ', async() =>{ 
            await AttendeeInformationPage.click_on_add_notes_in_actions()
            await page.waitForTimeout(2000)
    
        })


        await test.step(' type_on_add_notes_in_Activity ', async() =>{ 
            await AttendeeInformationPage.type_on_add_notes_in_Activity("Add Notes")
            await page.waitForTimeout(2000)
    
        })

        await test.step(' savebtn_order_management_add_notes ', async() =>{ 
            await AttendeeInformationPage.savebtn_order_management_add_notes()
            await page.waitForTimeout(2000)
    
        })



       
    })
    test("007Attendee_Information_Page_Orders_038 |  Click on resend from actions  ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        await test.step(' click_on_add_notes_in_actions ', async() =>{ 
            await AttendeeInformationPage.click_on_Resend_tickets_in_actions()
            await page.waitForTimeout(5000)
    
        })
        await test.step(' click_on_add_notes_in_actions ', async() =>{ 
            await AttendeeInformationPage.verify_tickets_resent_success()
            
    
        })





       
    })
    test("007Attendee_Information_Page_Orders_039 |  verify cancel tickets is visible  ", async ({AttendeeInformationPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {  

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_3rd_app_name_c', async() =>{ 
            await page.waitForTimeout(1000)
            await AttendeeInformationPage.click_3rd_app_name_c()
        })


        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })


        await test.step(' click_on_attendee_info ', async() =>{ 
            await AttendeeInformationPage.click_on_attendee_info()
            await page.waitForTimeout(3000)
    
        })
       
        await test.step(' click_on_Orders ', async() =>{ 
            await AttendeeInformationPage.click_on_Orders()
    
        })

        await test.step(' click_on_actions_in_orders ', async() =>{ 
            await AttendeeInformationPage.click_on_actions_in_orders()
            await page.waitForTimeout(2000)
    
        })

        
        await test.step(' click_on_add_notes_in_actions ', async() =>{ 
            await AttendeeInformationPage.verify_cancel_ticket()
            
    
        })





       
    })

     //02/05/2024

})