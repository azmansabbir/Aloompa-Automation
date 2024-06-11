import test, { expect } from "@fixtures/basePages"
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
test("001_LiveOrder&R_CMS_ 001 | Check the functionality of Create New App is working properly and delete properly", async ({ page,ReservationPage, AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })

    await test.step('Validate "Create New App" adding page', async() =>{ 
        await AppsPage.click_create_new_app()
    })

    

    

    await test.step('Check the functionality of textbox and dropdown field', async() =>{ 
        await AppsPage.input_app_name('A_Test_app_name')
    })

    

    

    await test.step('input app slug', async() =>{ 
        await AppsPage.input_app_slug('Test_app_slug')
        await AppsPage.input_app_slug('Test_app_slug')
    })
    await test.step('click app type dropdown f', async() =>{ 
        await AppsPage.click_app_type_dropdown()
    })
    await test.step('input app type reservation', async() =>{ 
        await AppsPage.select_app_type('RESERVATIONS')
    })
    await test.step('click timezone dropdown', async() =>{ 
        await AppsPage.click_timezone_dropdown()
    })
    await test.step('select time zone', async() =>{ 
        await AppsPage.select_timezone('Asia/Dhaka')
    })
    
    
    await test.step('Check the functionality of textbox and dropdown field', async() =>{ 
        await AppsPage.select_Cancle()

        await page.waitForTimeout(3000)
    })

    


    // await context.tracing.stop({ path: 'trace0.zip' });
})
//search results baki ache
test("001_LiveOrder&R_CMS_ 002 | Validate No result found for search functionality in case of no match", async ({  page,ReservationPage ,AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })

    await AppsPage.type_search_in_field('Sddd')

    await AppsPage.check_no_match_found()
    
})
test.skip("001_LiveOrder&R_CMS_ 005 | Check the Pagination is working properly", async ({ loginPage, page, AppsPage}) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })

    await test.step('Validate "Create New App" adding page', async() =>{ 
        await AppsPage.click_Next_btn()
    })
    await test.step('Validate "Create New App" adding page', async() =>{ 
        await AppsPage.Validate_next_page()
    })
    await test.step('Validate "Create New App" adding page', async() =>{ 
        await AppsPage.click_Previous_btn()
    })
    await test.step('Validate "Create New App" adding page', async() =>{ 
        await AppsPage.Validate_Previous_page()
    })
    


   

})
//pagination here
test("001_LiveOrder&R_CMS_ 004 | Check the Action button working properly", async ({  page,ReservationPage ,AppsPage}) => {

   

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })

    await test.step('click on actions button', async() =>{ 
        await AppsPage.click_on_actions_button()

        await AppsPage.click_on_actions_button()
        await page.waitForTimeout(2000)
        //there is a loading issue . thats why we used two action button.
    })

    await test.step('check make hidden visiblity', async() =>{
        await AppsPage.click_on_actions_button() 
        await page.waitForTimeout(2000)
        await AppsPage.check_make_hidden_visiblity()
    })

   
})
test("001_LiveOrder&R_CMS_ 005 | Validate Make Hidden under Action button is working properly", async ({  page,ReservationPage,AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async() =>{ 
        await AppsPage.click_on_actions_button()
        await page.waitForTimeout(1000)
    })
    await test.step('click on actions button', async() =>{ 
        await AppsPage.click_on_actions_button()
        await page.waitForTimeout(1000)
    })
    
    await test.step('check make hidden visiblity', async() =>{ 
        await AppsPage.click_make_hidden()
    })
    await test.step('Check the "Status" column change according after "Make Hidden" is clicked', async() =>{ 
        await AppsPage.check_hidden_visiblity()
    })
    
    


    // await context.tracing.stop({ path: 'trace0.zip' });
})
test("001_LiveOrder&R_CMS_ 006 | Validate the Make Visible under Action button is working properly", async ({  page,ReservationPage,AppsPage }) => {

   
    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async() =>{ 
        await AppsPage.click_on_actions_button()
        await page.waitForTimeout(2000)
    })
    await test.step('click on actions button', async() =>{ 
        await AppsPage.click_on_actions_button()
        await page.waitForTimeout(2000)
    })
    await test.step('check make hidden visiblity', async() =>{ 
        await AppsPage.click_make_visible()
    })
    await test.step('Check the "Status" column change according after "Make Visible" is clicked', async() =>{ 
        await AppsPage.check_hidden_invisiblity()
    })
    
    


    // await context.tracing.stop({ path: 'trace0.zip' });
})
test("001_LiveOrder&R_CMS_ 007 | Verify App Name is clickable and working properly", async ({  page,ReservationPage,AppsPage }) => {

   
    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })

    await test.step('check hidden visiblity', async() =>{ 
        await AppsPage.click_first_app_name()
    })

    await test.step('check if the visiblity is working properly', async() =>{ 
        await ReservationPage.check_explore_all_events_visiblity()
    })
    
    


    // await context.tracing.stop({ path: 'trace0.zip' });
})
test("001_LiveOrder&R_CMS_ 008 | Validate the Edit Details under Action button is working properly", async ({  page,ReservationPage,AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async() =>{ 
        await AppsPage.click_on_actions_button()
    })

    await test.step('click on actions button', async() =>{ 
        await AppsPage.click_on_actions_button()
    })
    
    
    await test.step('check make hidden visiblity', async() =>{ 
        await AppsPage.click_Manage_Store()
        await page.waitForTimeout(2000)
    })


    await test.step('check hidden visiblity', async() =>{ 
        await ReservationPage.check_explore_all_events_visiblity()
    })
    
    


    // await context.tracing.stop({ path: 'trace0.zip' });
})
test("001_LiveOrder&R_CMS_ 009 | Check the mandatory textbox field", async ({  page,ReservationPage,AppsPage }) => {

    await test.step('Navigate to apps directory', async() =>{ 
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })

    await test.step('Validate "Create New App" adding page', async() =>{ 
        await AppsPage.click_create_new_app()
    })

    await test.step('Check the functionality of textbox and dropdown field', async() =>{ 
        await AppsPage.input_app_name_for_required(' ')
    })
    
    await test.step('select time zone', async() =>{ 
        await AppsPage.select_Create()
    })



    await test.step('app name required visibility', async() =>{ 
        await AppsPage.validate_app_name_required_visiblity()
    })
    await test.step('app slug required visibility', async() =>{ 
        await AppsPage.validate_app_slug_required_visiblity()
    })
    await test.step('app type required visibility', async() =>{ 
        await AppsPage.validate_app_type_required_visiblity()
    })
    await test.step('app timezone required visibility', async() =>{ 
        await AppsPage.validate_app_timezone_required_visiblity()
    })
    
})

//02/05/2024
})



