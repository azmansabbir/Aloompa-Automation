import test, { expect } from "@fixtures/basePages"
import functions from "@helper-function/functions";
import ReservationPage from "@pages/Reservations.page";
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";
const authFile='user.json'

test("002EventDashboard001 | Verify LiveOrder & Reservation (BETA) navigation is working properly", async ({ loginPage, page, AppsPage }) => {
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
    //  await AppsPage.waitForElementTovisible('2023 Unidev Test 0001')
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
    // await context.tracing.stop({ path: 'trace0.zip' });
})
test.describe('use the same authentication mechanism',async()=>{
    test.use({storageState:authFile}) 

    test("003_Event_Dashboard_001 | Validate the Event dashboard from app directory ", async ({ EventdashboardPage, page,ReservationPage,AppsPage }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test.only("003_Event_Dashboard_002 | Verify the App directory's apps shows in dropdown lists are working", async ({ EventdashboardPage, page,ReservationPage,AppsPage }) => {
    
       
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
    
        await test.step('check hidden visiblity', async() =>{ 
            await AppsPage.click_first_app_name()
        })
    
        await test.step('check if the visiblity is working properly', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        // this to should be moved to AppsPage. 
        await test.step('click on app dropdowns in header', async() =>{ 
            await ReservationPage.click_app_dropdowns_in_header()
            await page.waitForTimeout(2000)
        })


    
        await test.step('check the header element from top', async() =>{ 
            await ReservationPage.check_header_element()
        })
        
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test("003_Event_Dashboard_003 | Check the Functionality of Import CSV button", async ({ EventdashboardPage, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test("003_Event_Dashboard_004 | Check the Functionality of Export CSV button", async ({ EventdashboardPage, page,ReservationPage,AppsPage }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await ReservationPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await ReservationPage.click_export_csv_button() 
        })
        
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    //this module contains some event related test scenarios
    test("003_Event_Dashboard_005 | Check the Functionality of Create New Event", async ({ EventdashboardPage, page,ReservationPage,AppsPage,functions }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await ReservationPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_create_new_event()
        })
    
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_new_event() 
        })
    
        await test.step('input add name', async() =>{ 
            await ReservationPage.input_add_name('Only For automation')
        })
    
        await test.step('click on dummy subtitles', async () => {
            await ReservationPage.input_event_subtitle('This is a dummy subtitle we are adding')
        })
        // await test.step('click create new location', async () => {
        //     await ReservationPage.click_create_new_location()
        // })
        // await test.step('input location name', async () => {
    
        //     await ReservationPage.input_location_name("Testers dane")
    
        // })
        // await test.step('fill input address 1 field', async () => {
        //     await ReservationPage.input_address_1('23, Motijheel outer road')
        // })
    
        // await test.step('fill input address 2 field ', async () => {
        //     await ReservationPage.input_address_2('24, Motijheel inner road')
        // })
    
        // await test.step('fill input city', async () => {
        //     await ReservationPage.input_city('Dhaka')
    
        // })
        // await test.step('select a country name', async () => {
        //     await ReservationPage.select_country('Bangladesh')
        // })
        await test.step('click on testers dane', async() =>{ 
            await ReservationPage.click_select_location('Testers dane')
        })
    
        await test.step('Select first category', async() =>{ 
            await AppsPage.select_first_category("Testing purpose")
        })
    
        await test.step('select date input', async() =>{ 
            await ReservationPage.select_date('02/21/2024')
        })


        await test.step('click save on button element', async() =>{ 
            await ReservationPage.save_button_for_create_event()
        })
    
        await test.step('click Event dashboard', async() =>{ 
            await ReservationPage.click_event_dashBoard()
        })
    
        await test.step('check event visibility', async() =>{ 
            ReservationPage.check_event_in_explore_all_events('Only For automation')
         })
    
    
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test(`003_Event_Dashboard_006 | Check the search filters by "Looking for" is working`, async ({ EventdashboardPage, page,ReservationPage,AppsPage }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await ReservationPage.click_event_dashBoard()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        }) 
        await test.step('looking for event name only', async() =>{ 
            await ReservationPage.type_search_in_looking_for_event_name('001')
        })
        await test.step('check event visibility', async() =>{ 
            ReservationPage.check_event_in_explore_all_events('001 test')
         })
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test("003_Event_Dashboard_007 | Validate There is no data that matches the search terms for no match found", async ({ EventdashboardPage, page,ReservationPage,AppsPage }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
      
        await test.step('looking for event name only', async() =>{ 
            await ReservationPage.type_search_in_looking_for_event_name('No event')
        })
        await test.step('check event visibility', async() =>{ 
            ReservationPage.check_event_in_explore_all_events('There is no data that matches the search terms.')
         })
        
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    //work from here
    test(`003_Event_Dashboard_008 |Check the search filters by date field "On" is working`, async ({ EventdashboardPage,functions, page,ReservationPage,AppsPage }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        await test.step('click calendar button', async() =>{ 
            await ReservationPage.click_calendar_button()
        })
        await test.step('looking for event name only', async() =>{ 
            await ReservationPage.year_input_by_calendar('2024')
        })
        await test.step('input month ', async() =>{ 
            await ReservationPage.month_input_by_calendar('December 2023')
            await page.waitForTimeout(2000)
        })
        await test.step('Input date', async() =>{ 
            await ReservationPage.date_input_by_calendar('1')
            await page.waitForTimeout(2000)
        })
        await test.step('click on ok button', async() =>{ 
            await ReservationPage.click_ok_button()
        })
        await test.step('check event visibility', async() =>{ 
            ReservationPage.check_event_in_explore_all_events('001 test')
        })
        
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    //
    test(`003_Event_Dashboard_009 |Validate there is no event on that particular date you provided`, async ({ EventdashboardPage, page,ReservationPage,AppsPage }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
      
        await test.step('looking for event name only', async() =>{ 
            await ReservationPage.input_date_on_field('22/02/2022')
        })
        await test.step('check event visibility', async() =>{ 
            ReservationPage.check_event_in_explore_all_events('no event scheduled on that date provided')
        })
        
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test(`003_Event_Dashboard_0010 | Check the search filters by location "Where" is working`, async ({ EventdashboardPage,functions, page,ReservationPage,AppsPage }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        await test.step('type search place', async() =>{ 
            await ReservationPage.input_search_place('Dhaka')
        })
    
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    
    test(`003_Event_Dashboard_0011 | Validate "There is no event on  that location" for no match found`, async ({ EventdashboardPage,functions, page,ReservationPage,AppsPage }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        await test.step('type search place', async() =>{ 
            await ReservationPage.input_search_place('Dhaka')
        })
    
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    
    test(`003_Event_Dashboard_0012 | Check the search filter by all at once "Looking for", "On" and "Where"`, async ({ EventdashboardPage,functions, page,ReservationPage,AppsPage }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        await test.step('looking for event name only', async() =>{ 
            await ReservationPage.type_search_in_looking_for_event_name('Only')
        })
        await test.step('click calendar button', async() =>{ 
            await ReservationPage.click_calendar_button()
        })
        await test.step('looking for event name only', async() =>{ 
            await ReservationPage.year_input_by_calendar('2024')
        })
        await test.step('input month ', async() =>{ 
            await ReservationPage.month_input_by_calendar('June 2023')
            await page.waitForTimeout(2000)
        })
        await test.step('Input date', async() =>{ 
            await ReservationPage.date_input_by_calendar('20')
            await page.waitForTimeout(2000)
        })
        await test.step('click on ok button', async() =>{ 
            await ReservationPage.click_ok_button()
        })
        await test.step('type search place', async() =>{ 
            await ReservationPage.input_search_place('Dhaka')
        })
    
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    
    test(`003_Event_Dashboard_0013 | Validate "There is no data that matches the search terms" for no match found all at once "Looking for", "On" and "Where"`, async ({ EventdashboardPage,functions, page,ReservationPage,AppsPage }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        await test.step('looking for event name only', async() =>{ 
            await ReservationPage.type_search_in_looking_for_event_name('Nope')
        })
        await test.step('click calendar button', async() =>{ 
            await ReservationPage.click_calendar_button()
        })
        await test.step('looking for event name only', async() =>{ 
            await ReservationPage.year_input_by_calendar('2024')
        })
        await test.step('input month ', async() =>{ 
            await ReservationPage.month_input_by_calendar('June 2023')
            await page.waitForTimeout(2000)
        })
        await test.step('Input date', async() =>{ 
            await ReservationPage.date_input_by_calendar('25')
            await page.waitForTimeout(2000)
        })
        await test.step('click on ok button', async() =>{ 
            await ReservationPage.click_ok_button()
        })
        await test.step('type search place', async() =>{ 
            await ReservationPage.input_search_place('shahjahanpur')
        })
    
        await test.step('check event visibility', async() =>{ 
            ReservationPage.check_event_in_explore_all_events('no event scheduled on that date provided')
        })
        
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test(`003_Event_Dashboard_0014 | Check dropdown for "All Events" category is working`, async ({ EventdashboardPage,functions, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click all events', async() =>{ 
            await page.waitForTimeout(1000)
            await ReservationPage.click_All_events()
            await page.waitForTimeout(1000)

        })
    
        await test.step('check if all event type is visible', async() =>{ 
            await page.waitForTimeout(1000)
            await ReservationPage.check_if_all_event_type_is_visible_1()
        })
        await test.step('check if all event type is visible', async() =>{ 
            await page.waitForTimeout(1000)
            await ReservationPage.check_if_all_event_type_is_visible_2()
        })
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test(`003_Event_Dashboard_0015 | Check the "Clear search filter" is working`, async ({ EventdashboardPage,functions, page,ReservationPage,AppsPage }) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        
        await test.step('looking for event name only', async() =>{ 
            await ReservationPage.type_search_in_looking_for_event_name('Only')
        })
        await test.step('click calendar button', async() =>{ 
            await functions.click_calendar_button()
        })
        await test.step('looking for event name only', async() =>{ 
            await functions.year_input_by_calendar('2024')
        })
        await test.step('input month ', async() =>{ 
            await functions.month_input_by_calendar('June 2023')
            await page.waitForTimeout(2000)
        })
        await test.step('Input date', async() =>{ 
            await ReservationPage.date_input_by_calendar('20')
            await page.waitForTimeout(2000)
        })
        await test.step('click on ok button', async() =>{ 
            await ReservationPage.click_ok_button()
        })
        await test.step('click clear search filters', async() =>{ 
            await EventdashboardPage.click_clear_search_filters()
        })
    
        await test.step('check if clear event name is working properly', async() =>{ 
            await EventdashboardPage.check_if_clear_event_name_is_working_properly()
        })
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test(`003_Event_Dashboard_0016 | Verity the Ascending/Decending order is working properly`, async ({ EventdashboardPage,functions, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })

        //
        await test.step('click actions button', async() =>{
            await page.waitForTimeout(1000) 
             await EventdashboardPage.click_actions_button_for_delete()
             await page.waitForTimeout(2000)
        })
        await test.step('check on delete', async() =>{ 
            await EventdashboardPage.click_delete_event()
        })
        await test.step('click on delete event warning', async() =>{ 
            await EventdashboardPage.delete_event_warning_checker()
            await page.waitForTimeout(4000)
        })




        //
        await test.step('click again to reverse the order', async() =>{ 
            await EventdashboardPage.click_event_header()
        })
    
        await test.step('click on event header and verify if order changed', async() =>{ 
            await EventdashboardPage.click_event_header_and_verify()
            
        })
    
        await test.step('click again to reverse the order', async() =>{ 
            await EventdashboardPage.click_event_header()
        })
        await test.step('click on event header and verify if order changed', async() =>{ 
            await EventdashboardPage.click_event_header_and_verify()
            
        })
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    
    test(`003_Event_Dashboard_0017 |  Validate clicking on a Events  name  move to Event details page working properly`, async ({ EventdashboardPage,functions, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
    
        await test.step('click on event header ', async() =>{ 
            await EventdashboardPage.click_event_name('Only For automation(Do not delete)')
    
        })
        await test.step('check the new event ', async() =>{ 
            await EventdashboardPage.validate_Manage_Event_visible_after_clicking_on_event()
        })
        
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test(`003_Event_Dashboard_0018 |  Check the "Visibility" button is working porperly`, async ({ EventdashboardPage,functions, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
    
        await test.step('click on event header ', async() =>{ 
            await EventdashboardPage.click_visibility_icon()
    
        })
        await test.step('check the new event ', async() =>{ 
            await EventdashboardPage.check_if_visibility_toggled_off()
        })
    
        await test.step('click on event header ', async() =>{ 
            await EventdashboardPage.click_visibility_toggled_off_icon()
    
        })
        
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test(`003_Event_Dashboard_0019 | Check the "Action" button working properly`, async ({ EventdashboardPage,functions, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
    
        
        await test.step('click actions button', async() =>{ 
             await EventdashboardPage.click_actions_button()
        })
        
        await test.step('check lists under actions', async() =>{ 
            await EventdashboardPage.check_lists_under_actions()
        })
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test(`003_Event_Dashboard_0020 | Validate the "Make Hidden" under "Action" button is working properly`, async ({ EventdashboardPage,functions, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
            await page.waitForTimeout(1000)

        })
        
        await test.step('click actions button', async() =>{ 
             await EventdashboardPage.click_actions_button()
             await page.waitForTimeout(1000)

        })
        
        await test.step('click on make hidden', async() =>{ 
            await EventdashboardPage.click_make_hidden()
        })
    
        await test.step('Now check if the visibility is toggled off in UI', async() =>{ 
            await EventdashboardPage.check_if_visibility_toggled_off()
        })
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test(`003_Event_Dashboard_0021 | Validate the "Make Visiable" under "Action" button is working properly`, async ({ EventdashboardPage,functions, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click actions button', async() =>{ 
            await page.waitForTimeout(1000)
             await EventdashboardPage.click_actions_button()
        })
        


        await test.step('check on make visible option', async() =>{ 
            await EventdashboardPage.click_make_visible()
            await page.waitForTimeout(3000)
        })
    
        await test.step('Now check if the visibility is toggled off in UI', async() =>{ 
            await EventdashboardPage.check_if_visibility_toggled_on()
        })
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    //need to add code from manage event there
    test(`003_Event_Dashboard_0022 | Validate the "Edit Event Details" under "Action" button is working properly`, async ({ EventdashboardPage,ManageEventPage, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click actions button', async() =>{ 
             await EventdashboardPage.click_actions_button()
        })
        await test.step('check on edit event details option', async() =>{ 
            await EventdashboardPage.click_edit_event_details()
        })
    
        await test.step('check the navigation for changing page is not sucessful', async() =>{ 
            await ManageEventPage.Validate_edit_event_detailsPage()
        })
    
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    //need to add Edit attendee information code
    test(`003_Event_Dashboard_0023 | Validate the "Edit Attendee Info" under "Action" button is working properly`, async ({ EventdashboardPage,AttendeeInformationPage, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click actions button', async() =>{ 
             await EventdashboardPage.click_actions_button()
        })
        await test.step('check on edit event attendee infor', async() =>{ 
            await EventdashboardPage.click_edit_attendee_information()
        })
    
        await AttendeeInformationPage.validate_attendeeInformationPage()
    
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test(`003_Event_Dashboard_0024 | Validate the "Add Attedndee" under "Action" button is working properly`, async ({ EventdashboardPage,functions, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.waitForTimeout(1000)

            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click actions button', async() =>{ 
             await EventdashboardPage.click_actions_button()
             await page.waitForTimeout(1000)
        })
        await test.step('check on add attendee information', async() =>{ 
            await EventdashboardPage.click_add_attendee_information()
            await page.waitForTimeout(1000)
        })
    
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    //need to add Delete event. 
    test(`003_Event_Dashboard_0025 | Validate delete event under "Action" button is working properly`, async ({ EventdashboardPage,functions, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await ReservationPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await ReservationPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_create_new_event()
        })
    
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_new_event() 
        })
    
        await test.step('input add name', async() =>{ 
            await ReservationPage.input_add_name('Only For automation')
        })
    
        
        
        await test.step('click on testers dane', async() =>{ 
            await ReservationPage.click_select_location_2()
            await ReservationPage.click_select_location_2()
        })
        await test.step('click on testers dane', async() =>{ 
            await ReservationPage.click_select_location_3('Testers dane')
        })
    
        await test.step('Select first category', async() =>{ 
            await AppsPage.select_first_category("Testing purpose")
        })
    
        


        await test.step('click save on button element', async() =>{ 
            await ReservationPage.save_button_for_create_event()
            await page.waitForTimeout(2000)
        })

        await test.step('click event dashboard', async() =>{ 
            await ReservationPage.click_event_dashBoard()
            await page.waitForTimeout(1000)
            await ReservationPage.click_event_dashBoard()
        })
        
        
        await test.step('click actions button', async() =>{
            await page.waitForTimeout(1000) 
             await EventdashboardPage.click_actions_button_for_delete()
             await page.waitForTimeout(2000)
        })
        await test.step('check on delete', async() =>{ 
            await EventdashboardPage.click_delete_event()
        })
        await test.step('click on delete event warning', async() =>{ 
            await EventdashboardPage.delete_event_warning_checker()
            await page.waitForTimeout(4000)
        })
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test("003_Event_Dashboard_0026 |  Velidate target field is fixed with current events for IMport csv Page", async ({ EventdashboardPage, page,ReservationPage ,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })

        await test.step('click on target page', async() =>{ 
            await EventdashboardPage.click_target()
        })
        
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })

    test('003_Event_Dashboard_0027 | Check "Timezone" field dropdown is working for selection ', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })

        await test.step('click on target page', async() =>{ 
            await EventdashboardPage.click_timezone()
         
        })


        await test.step('clcik on select timezone failed', async() =>{ 
            await functions.select_timezone('Asia/Dhaka')
        })
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test('003_Event_Dashboard_028 | Validate selction box for "Times are Unix time stamps"', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        await test.step("check on times are unix time stamps",async()=>{
            await EventdashboardPage.check_times_are_unix_timeStamps()
        })

        await test.step("check on times are unix time stamps",async()=>{
            await EventdashboardPage.check_unix_times_stamps_are_in_milliseconds()
        })
    })
    test('003_Event_Dashboard_029 |  Validate selction box for "Unix Time Stamps are in Milliseconds"', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        await test.step('click on target page', async() =>{ 
            await EventdashboardPage.click_timezone()
        })

        await test.step('clcik on select timezone failed', async() =>{ 
            await functions.select_timezone('Asia/Dhaka')
        })
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test('003_Event_Dashboard_030 | Check "Multi-Value Separator" field dropdown is working for selection "', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })  
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        await test.step('Click multi value separator', async() =>{ 
                await EventdashboardPage.click_multi_value_separator()
        })
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test('003_Event_Dashboard_031 |  Check "Select file" button is working porperly', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })

        await test.step('click select file button', async() =>{ 
            await EventdashboardPage.file_uploader_for_csv_file('reservations-events-export.csv')
        })
    
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test('003_Event_Dashboard_032 |  Check/uncheck "First Row is Header" select box', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
       
        })

        await test.step('check the first row header', async() =>{ 
            await EventdashboardPage.check_first_row_is_header_import_box()
          
        })

        await test.step('uncheck the first row header', async() =>{ 
            await EventdashboardPage.uncheck_first_row_is_header_import_box()
        })
        
    
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test('003_Event_Dashboard_033 |  Verify "Parse" button is disabled', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })

        await test.step('check if the parse button is disabled', async() =>{ 
            await EventdashboardPage.check_parse_button_disabled()
        })
        
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test('003_Event_Dashboard_034 |  Verify "Parse" button is enabled', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })

        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })

        await test.step('click select file button', async() =>{ 
            await EventdashboardPage.file_uploader_for_csv_file('reservations-events-export.csv')
        })

        await test.step('check if the parse button is disabled', async() =>{ 
            await EventdashboardPage.check_parse_button_enabled()
        })
        
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    //need to work to find what happend in this test case
    test('003_Event_Dashboard_035 |  Check "Parse" button for details view', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        await test.step('click on target page', async() =>{ 
            await EventdashboardPage.click_timezone()
        })

        await test.step('clcik on select timezone failed', async() =>{ 
            await functions.select_timezone('Asia/Dhaka')
        })

        await test.step('click select file button', async() =>{ 
            await EventdashboardPage.file_uploader_for_csv_file('reservations-events-export.csv')
        })

        await test.step('check the first row header', async() =>{ 
            await EventdashboardPage.check_first_row_is_header_import_box()
        })

        await test.step('check if the parse button is disabled', async() =>{ 
            await EventdashboardPage.click_parse_button()
        })

        await test.step('check if the parsing worked correctly', async() =>{ 
            await EventdashboardPage.check_if_parse_worked_correctly()
        })

        
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test('003_Event_Dashboard_036 |  Verify the details of CSV file is perfectly capture in parse', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        await test.step('click on target page', async() =>{ 
            await EventdashboardPage.click_timezone()
        })

        await test.step('clcik on select timezone failed', async() =>{ 
            await functions.select_timezone('Asia/Dhaka')
        })

        await test.step('click select file button', async() =>{ 
            await EventdashboardPage.file_uploader_for_csv_file('reservations-events-export.csv')
        })

        await test.step('check the first row header', async() =>{ 
            await EventdashboardPage.check_first_row_is_header_import_box()
        })

        await test.step('check if the parse button is disabled', async() =>{ 
            await EventdashboardPage.click_parse_button()
        })

        await test.step('check if the parsing worked correctly', async() =>{ 
            await EventdashboardPage.check_if_parse_captured_Contents_of_csv_correctly('2a308b94-c9d3-4ec6-916e-756243a2c1a8','001 test')
        })

        
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    //need to understand what this dropdowns actually say
    test('003_Event_Dashboard_037 | Check the dropdown for import data is showing all the option', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        await test.step('click on target page', async() =>{ 
            await EventdashboardPage.click_timezone()
        })

        await test.step('clcik on select timezone failed', async() =>{ 
            await functions.select_timezone('Asia/Dhaka')
        })

        await test.step('click select file button', async() =>{ 
            await EventdashboardPage.file_uploader_for_csv_file('reservations-events-export.csv')
        })

        await test.step('check the first row header', async() =>{ 
            await EventdashboardPage.check_first_row_is_header_import_box()
        })

        await test.step('check if the parse button is disabled', async() =>{ 
            await EventdashboardPage.click_parse_button()
        })

        await test.step('check if the parsing worked correctly', async() =>{ 
            await EventdashboardPage.check_if_parse_captured_Contents_of_csv_correctly('2a308b94-c9d3-4ec6-916e-756243a2c1a8','001 test')
        })

        //need to implement dropdown functions
        await test.step('click on first dropdown on first data is failed', async() =>{ 
            await EventdashboardPage.click_first_drop_down_on_parsed_data()
        })
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test('003_Event_Dashboard_038 |Check the "Return to Upload Option" button is working', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        await test.step('click on target page', async() =>{ 
            await EventdashboardPage.click_timezone()
        })

        await test.step('clcik on select timezone failed', async() =>{ 
            await functions.select_timezone('Asia/Dhaka')
        })

        await test.step('click select file button', async() =>{ 
            await EventdashboardPage.file_uploader_for_csv_file('reservations-events-export.csv')
        })

        await test.step('check the first row header', async() =>{ 
            await EventdashboardPage.check_first_row_is_header_import_box()
        })

        await test.step('check if the parse button is disabled', async() =>{ 
            await EventdashboardPage.click_parse_button()
        })

        await test.step('check if the parsing worked correctly', async() =>{ 
            await EventdashboardPage.check_if_parse_captured_Contents_of_csv_correctly('2a308b94-c9d3-4ec6-916e-756243a2c1a8','001 test')
        })

        await test.step('click on return to upload button ', async() =>{ 
            await EventdashboardPage.click_return_to_upload_button()
        })
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    //need to change the CSV for the following file
    test('003_Event_Dashboard_039 | Validate "Import" button is working ', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        await test.step('click on target page', async() =>{ 
            await EventdashboardPage.click_timezone()
        })

        await test.step('clcik on select timezone failed', async() =>{ 
            await functions.select_timezone('Asia/Dhaka')
        })

        await test.step('click select file button', async() =>{ 
            await EventdashboardPage.file_uploader_for_csv_file('reservations-events-export.csv')
        })

        await test.step('check the first row header', async() =>{ 
            await EventdashboardPage.check_first_row_is_header_import_box()
        })

        await test.step('check if the parse button is disabled', async() =>{ 
            await EventdashboardPage.click_parse_button()
        })

        await test.step('check if the parsing worked correctly', async() =>{ 
            await EventdashboardPage.check_if_parse_captured_Contents_of_csv_correctly('2a308b94-c9d3-4ec6-916e-756243a2c1a8','001 test')
        })

        await test.step('click on return to upload button ', async() =>{ 
            await EventdashboardPage.click_import_button()
        })

        await test.step('now check if the csv uploaded text is visible', async() =>{ 
            await EventdashboardPage.check_csv_uploaded_text()
        })
        // await context.tracing.stop({ path: 'trace0.zip' });
    })
    test('003_Event_Dashboard_041 |  Validate "Upload another" button is working ', async ({ EventdashboardPage, page,functions,AppsPage}) => {
    
        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        await test.step('click event dashboard', async() =>{ 
            await EventdashboardPage.click_event_dashBoard()
        })
    
        await test.step('check all events header', async() =>{ 
            await EventdashboardPage.check_explore_all_events_visiblity()
        })
        
        await test.step('click on import csv button failed', async() =>{ 
            await EventdashboardPage.click_import_csv_button()
        })
        
        await test.step('check new Event', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        await test.step('click on target page', async() =>{ 
            await EventdashboardPage.click_timezone()
        })

        await test.step('clcik on select timezone failed', async() =>{ 
            await functions.select_timezone('Asia/Dhaka')
        })

        await test.step('click select file button', async() =>{ 
            await EventdashboardPage.file_uploader_for_csv_file('reservations-events-export.csv')
        })

        await test.step('check the first row header', async() =>{ 
            await EventdashboardPage.check_first_row_is_header_import_box()
        })

        await test.step('check if the parse button is disabled', async() =>{ 
            await EventdashboardPage.click_parse_button()
        })

        await test.step('check if the parsing worked correctly', async() =>{ 
            await EventdashboardPage.check_if_parse_captured_Contents_of_csv_correctly('2a308b94-c9d3-4ec6-916e-756243a2c1a8','001 test')
        })

        await test.step('click on return to upload button ', async() =>{ 
            await EventdashboardPage.click_import_button()
        })

        await test.step('now check if the csv uploaded text is visible', async() =>{ 
            await EventdashboardPage.check_csv_uploaded_text()
        })
        await test.step('click on upload another button element is missing', async() =>{ 
            await EventdashboardPage.click_upload_another()
        })

        await test.step('check if the site is reverted to import CSV', async() =>{ 
            await EventdashboardPage.check_import_CSV()
        })
        // await context.tracing.stop({ path: 'trace0.zip' });
    })

    //02/05/2024
})