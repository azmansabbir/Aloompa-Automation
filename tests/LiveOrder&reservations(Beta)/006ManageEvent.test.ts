import test, { expect } from "@fixtures/basePages"
import functions from "@helper-function/functions";
import AccountManagement from "@pages/AccountManagement.page";
import Design from "@pages/Design.page";
import ReservationPage from "@pages/Reservations.page";
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";
const authFile='user.json'

test(" MangeEventPage | Verify LiveOrder & Reservation (BETA) navigation is working properly", async ({ loginPage, page, AppsPage }) => {
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

    test("006MangeEventPage_Event_Details_001 | Clicking Manage event ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })

       

        
       
    })
    test("006MangeEventPage_Event_Details_002 | Clicking event details ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })


       

       

        
       
    })

    test("006MangeEventPage_Event_Details_003 | type event name ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_event_name("Event Name")
            await page.waitForTimeout(2000)

        }) 
       
    })
    test("006MangeEventPage_Event_Details_004 | type event subtitle ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_Subtitle("Event Subtitle")
            await page.waitForTimeout(2000)

        })


        
        




       

       

        
       
    })
    
    test("006MangeEventPage_Event_Details_005 | Click create new location ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_Cerate_new_location()
        })

        


       
    })

    test("006MangeEventPage_Event_Details_006 | Fill info on 'create new location' ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_Cerate_new_location()
        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_location_name("location 001")
            await page.waitForTimeout(2000)

        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Address_1("Address 1")
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Address_2("Address 2")
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_City("City")
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_State("State")
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Zip("1230")
            await page.waitForTimeout(2000)

        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.click_select_country()
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.select_1st_country()
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.click_save_btn()
            await page.waitForTimeout(2000)

        })

        


       
    })

    test("006MangeEventPage_Event_Details_007 | Verify Use Existing Location properly. ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })

        await test.step('click_manage_event', async() =>{ 
            await page.waitForTimeout(2000)
            await ManageEventPage.click_location()
            await page.waitForTimeout(2000)
        })
        await test.step('click_manage_event', async() =>{ 
            await page.waitForTimeout(1000)
            await ManageEventPage.select_location()
            await page.waitForTimeout(2000)
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_edit_location()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_Use_existing_location()
        })

        

        


       
    })
    test("006MangeEventPage_Event_Details_008 | Delete 'location' ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
            await page.waitForTimeout(3000)
        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_location()
            await page.waitForTimeout(3000)
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.select_location()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_Edit_location_btn()
            await page.waitForTimeout(1000)

        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_remove_location_btn()
            await page.waitForTimeout(1000)
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_yes_btn()
            await page.waitForTimeout(3000)
        })

       

        


       
    })

    test("006MangeEventPage_Event_Details_009 | type start and end date ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_Start_date("04/01/2021")
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_Start_time("09:51 AM")
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_end_date("04/21/2024")
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_end_time("10:51 AM")
            await page.waitForTimeout(2000)

        })


       
    })

    test("006MangeEventPage_Event_Details_010 | event image upload ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })
        await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
            await ManageEventPage.file_uploader_for_image_file('banner.png')
            await page.waitForTimeout(3000)
             
            
        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.save_btn_for_event_details()
        })


       

       

        
       
    })

    test("006MangeEventPage_Event_Details_011 | type event description ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_description("Event description")
            await page.waitForTimeout(2000)

        })


        
        




       

       

        
       
    })
    test("006MangeEventPage_Event_Details_012 | description font upload ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_event_name("001 Event name test")
            await page.waitForTimeout(2000)

        })
        
        await test.step('font_uploader_for_description', async() =>{ 
            await ManageEventPage.font_uploader_for_description('Midnight.ttf')
            await page.waitForTimeout(3000)
             
            
        })
        
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.save_btn_for_event_details()
        })
        


        


       

       

        
       
    })

    test("006MangeEventPage_Event_Details_013 | click create category ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_create_new_category()
        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_category_name("Category Name")
            await page.waitForTimeout(2000)

        })

       


        
        




       

       

        
       
    })
    test("006MangeEventPage_Event_Details_014 | create new category ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_create_new_category()
        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_category_name("Category Name")
            await page.waitForTimeout(2000)

        })
        await test.step('file_uploader_category_image_file', async() =>{ 
            await ManageEventPage.file_uploader_category_image_file('banner.png')
            await page.waitForTimeout(3000)
             
            
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_create_new_category_enabled_btn()
        })
        // await test.step('click_manage_event', async() =>{ 
        //     await ManageEventPage.click_create_new_category_save_btn()
        // })
       
    })
    test("006MangeEventPage_Event_Details_015 | edit full event details ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_event_name("001 Event name test")
            

        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_Subtitle("Event Subtitle")
            await page.waitForTimeout(2000)
            

        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_Cerate_new_location()
            await page.waitForTimeout(2000)
        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_location_name("location 001")
            

        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Address_1("Address 1")
           

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Address_2("Address 2")
           

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_City("City")
            

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_State("State")
            

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Zip("1230")
            

        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.click_select_country()
            

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.select_1st_country()
            

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.click_save_btn()
            

        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await page.waitForTimeout(2000)
            await ManageEventPage.clear_and_type_Event_Start_date("04/01/2021")
            

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_Start_time("09:51 AM")
            

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_end_date("04/21/2022")
            

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_end_time("10:51 AM")
            

        })

        await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
            await ManageEventPage.file_uploader_for_image_file('banner.png')
            
             
            
        })

        // await test.step('click_manage_event', async() =>{ 
        //     await ManageEventPage.save_btn_for_event_details()
        // })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_description("Event description")
            

        })




       
       
    })
    


    test("006MangeEventPage_Event_Details_016 | select location 002  ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })
        await test.step('click_manage_event', async() =>{ 
            await page.waitForTimeout(2000)
            await ManageEventPage.click_location()
            await page.waitForTimeout(2000)
        })

        await test.step('click_manage_event', async() =>{ 
            await page.waitForTimeout(2000)
            await ManageEventPage.click_location_2()
            await page.waitForTimeout(2000)
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.save_btn_for_event_details()
        })
        

        


       
       
    })
    test.skip("006MangeEventPage_Event_Details_017 | delete location ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_details()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_location()
            await page.waitForTimeout(3000)
        })

        await test.step('click_manage_event', async() =>{ 
            await page.waitForTimeout(2000)
            await ManageEventPage.click_location_002()
            await page.waitForTimeout(2000)
            
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.save_btn_for_event_details()
            
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_location()
            await page.waitForTimeout(3000)
        })

        await test.step('click_manage_event', async() =>{ 
            await page.waitForTimeout(2000)
            await ManageEventPage.click_location_1()
            await page.waitForTimeout(2000)
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_Edit_location_btn()
            

        })
        await test.step('click_manage_event', async() =>{ 
            
            await ManageEventPage.click_remove_location_btn()
            await page.waitForTimeout(2000)
            
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_yes_btn()
            
        })

        


       
       
    })


    test("006MangeEventPage_Event_Settings_018 | Clicking event settings ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_settings()
        })


       

       

        
       
    })

    test("006MangeEventPage_Event_Settings_019 | Clicking include sponsor image ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_settings()
        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_include_sponsor_image()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_dont_include_sponsor_image()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_include_sponsor_image()
        })


       

       

        
       
    })
    test("006MangeEventPage_Event_Settings_0120 | clear and type Event banner text ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_settings()
        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_include_sponsor_image()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_dont_include_sponsor_image()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_include_sponsor_image()
        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_banner_text("Event banner text")
            await page.waitForTimeout(2000)

        })


       

       

        
       
    })
    test("006MangeEventPage_Event_Settings_021 | select event banner color ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_settings()
        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_include_sponsor_image()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_dont_include_sponsor_image()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_include_sponsor_image()
        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_banner_text("Event banner text")
            await page.waitForTimeout(2000)

        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.click_event_banner_color()
           

        })
        
        await test.step(' clear_and_type_event_name ', async() =>{ 
      
            await ManageEventPage.click_event_banner_color()
            await ManageEventPage.select_event_banner_color("grey")
            await page.waitForTimeout(2000)

        })
        
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.click_event_banner_color()
            await ManageEventPage.select_event_banner_color("green")
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.click_event_banner_color()
            await ManageEventPage.select_event_banner_color("yellow")
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.click_event_banner_color()
            await ManageEventPage.select_event_banner_color("red")
            await page.waitForTimeout(2000)

        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.save_btn_for_event_settings()
            await page.waitForTimeout(2000)

        })


       

       

        
       
    })
    test("006MangeEventPage_Event_Settings_022 | select event ticket limit ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_settings()
        })

        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_include_sponsor_image()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_dont_include_sponsor_image()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_include_sponsor_image()
        })
        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_banner_text("Event banner text")
            await page.waitForTimeout(2000)

        })


        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.clear_and_type_Event_ticket_limit("10")
            await page.waitForTimeout(2000)

        })
       

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.save_btn_for_event_settings()
            await page.waitForTimeout(2000)

        })


       

       

        
       
    })
    test("006MangeEventPage_Event_Settings_023 | click Visibility in App ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })


        await test.step('click_3rd_app_name_2023_coachella', async() =>{ 
            await ManageEventPage.click_3rd_app_name_2023_coachella()
        })

        await test.step(' click_event_name ', async() =>{ 
            await AttendeeInformationPage.click_event_name('001 Event name test')
            await page.waitForTimeout(3000)
    
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_manage_event()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_event_settings()
        })
        await test.step('click_manage_event', async() =>{ 
            await ManageEventPage.click_Visibility_in_App()
            await page.waitForTimeout(1000)
            await ManageEventPage.click_Visibility_in_App()
        })

        await test.step(' clear_and_type_event_name ', async() =>{ 
            await ManageEventPage.save_btn_for_event_settings()
            await page.waitForTimeout(2000)

        })

        


       

       

        
       
    })
     test("006MangeEventPage_Event_Details_024| delete created category  ", async ({AttendeeInformationPage,ManageEventPage,Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order/813f5a41-545f-4b51-84c6-c2dc6e75a384/store-settings')
        })


        
        

       
        await test.step('click_manage_event', async() =>{ 
            
            await ManageEventPage.delete_created_event_category()
            
        })
        await test.step('click_manage_event', async() =>{ 
            
            await ManageEventPage.click_delete_btn_on_created_event_category()
            
        })
        
        // await test.step('click_manage_event', async() =>{ 
        //     await ManageEventPage.save_btn_for_event_details()
        // })
        

        


       
       //02/05/2024
    })

 





   

    





    
   
   
    
})