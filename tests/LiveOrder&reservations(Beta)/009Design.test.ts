import test, { expect } from "@fixtures/basePages"
import functions from "@helper-function/functions";
import AccountManagement from "@pages/AccountManagement.page";
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

    test("009Design_splash_page_001 | Clicking Design ", async ({Design, EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click_first_app_name', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })

        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })


        
       
    })
    test("009Design_splash_page_002 | Validate the upload image ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })

        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })

        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })

        await test.step('click_Splash_Page', async() =>{ 
            await Design.Splash_Page();
            
        })


        await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
            await Design.file_uploader_for_splash_page_logo_file('banner.png')
            
        })

        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            
        })
       
    })
    test("009Design_splash_page_003 | Validate the remove image ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_Splash_Page ', async() =>{ 
            await Design.Splash_Page();
            
        })
        await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
            await Design.file_uploader_for_splash_page_logo_file('banner.png')
            
        })
        await test.step('Change_image', async() =>{ 
            await Design.Change_image()
            
        })

        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            
        })
        await test.step('click_remove_image ', async() =>{ 
            await Design.remove_image();
            
        })
        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            
        })
       
    })
    test("009Design_splash_page_004 | Validate the background color of splash background color  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_Splash_Page ', async() =>{ 
            await Design.Splash_Page();
            await page.waitForTimeout(1000)
            
        })

        await test.step('fill_color_code ', async() =>{ 
            await Design.fill_color_code("#654321");
            await page.waitForTimeout(1000)
        })

        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            await page.waitForTimeout(1000)
        })
        await test.step('fill_color_code ', async() =>{ 
            await Design.fill_color_code("#123456");
            await page.waitForTimeout(1000)
        })
        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            await page.waitForTimeout(1000)
        })

        await test.step('splash_bg_color_code ', async() =>{ 
            await Design.splash_bg_color_code("rgb(18, 52, 86)");
            await page.waitForTimeout(1000)
        })
       
    })

    test("009Design_splash_page_005 | Validate the background color of event button color  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('Splash_Page ', async() =>{ 
            await Design.Splash_Page();
            await page.waitForTimeout(1000)
            
        })
        await test.step('type first name ', async() =>{ 
            await Design.firstName("First Name");
            
        })
        await test.step('type last name ', async() =>{ 
            await Design.lastname("lastName");
            
        })
        await test.step('type email ', async() =>{ 
            await Design.email("example@gmail.com");
            
        })
        await test.step('type phone number ', async() =>{ 
            await Design.phone("+880123456789");
            
        })
        

        await test.step('fill_color_code ', async() =>{ 
            await Design.events_button_color("#112233");
            await page.waitForTimeout(1000)
            
        })

        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            await page.waitForTimeout(3000)
            
        })
        await test.step('fill_color_code ', async() =>{ 
            await Design.events_button_color("#999999");
            await page.waitForTimeout(3000)
            
        })
        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            await page.waitForTimeout(3000)
            
        })
        

        await test.step('fill_color_code ', async() =>{ 
            await page.waitForTimeout(3000)
            await Design.events_buttton_color_code("rgb(153, 153, 153)");
            await page.waitForTimeout(1000)
            
        })

        
       
    })
    test("009Design_splash_page_006 | Validate the background color of event button text color  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.Splash_Page();
            
        })
        await test.step('type first name ', async() =>{ 
            await Design.firstName("First Name");
            
        })
        await test.step('type last name ', async() =>{ 
            await Design.lastname("lastName");
            
        })
        await test.step('type email ', async() =>{ 
            await Design.email("example@gmail.com");
            
        })
        await test.step('type phone number ', async() =>{ 
            await Design.phone("+880123456789");
            
        })

        await test.step('fill_color_code ', async() =>{ 
            await Design.events_button_text_color_fill("#74c107");
            
        })

        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            
        })
        await test.step('fill_color_code ', async() =>{ 
            await Design.events_button_text_color_fill("#FFFFFF");
            
        })
        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            
        })

        await test.step('fill_color_code ', async() =>{ 
            await Design.events_buttton_text_color_code("rgb(255, 255, 255)");
            
        })
       
    })
    test("009Design_splash_page_007 | Validate the text input section  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await page.waitForTimeout(1000)
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_Splash_page ', async() =>{ 
            await page.waitForTimeout(1000)
            await Design.Splash_Page();
            
        })

        await test.step('type first name ', async() =>{ 
            await Design.firstName("First Name");
            
        })
        await test.step('type last name ', async() =>{ 
            await Design.lastname("lastName");
            
        })
        await test.step('type email ', async() =>{ 
            await Design.email("example@gmail.com");
            
        })
        await test.step('type phone number ', async() =>{ 
            await Design.phone("+880123456789");
            
        })

        
       
    })
    test("009Design_Coming_soon_008 | Validate the coming soon section  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await page.waitForTimeout(1000)
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_comming_soon ', async() =>{ 
            await Design.comming_soon();
            await page.waitForTimeout(2000)
            
        })

        await test.step('validate_comming_soon ', async() =>{ 
            await Design.comming_soon_text();
            await page.waitForTimeout(2000)
            
        })

        

        
       
    })
    test("009Design_Coming_soon_009 | Validate that the preview section is visible  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_comming_soon ', async() =>{ 
            await Design.comming_soon();
            await page.waitForTimeout(2000)
            
        })

        await test.step('validate_comming_soon ', async() =>{ 
            await Design.comming_soon_text();
            await page.waitForTimeout(2000)
            
        })

        await test.step('preview_section ', async() =>{ 
            await Design.preview_section();
            await page.waitForTimeout(2000)
            
        })

        

        
       
    })
    test("009Design_Coming_soon_010 | Validate the title section  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_comming_soon ', async() =>{ 
            await Design.comming_soon();
            await page.waitForTimeout(2000)
            
        })

        await test.step('validate_comming_soon ', async() =>{ 
            await Design.comming_soon_text();
            await page.waitForTimeout(2000)
            
        })

        await test.step('title_clear_by_fill ', async() =>{ 
            await Design.title_clear_by_fill("");
            await page.waitForTimeout(2000)
            
        })

        await test.step('title_type_coming_soon ', async() =>{ 
            await Design.title_coming_soon("Coming Soon-1");
            await page.waitForTimeout(2000)
            
        })
        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            await page.waitForTimeout(2000)
            
        })

        await test.step('verify_title_text_in_preview ', async() =>{ 
            await Design.title_text_in_preview("Coming Soon-1");
            await page.waitForTimeout(2000)
            
        })

        

        

        
       
    })
    test("009Design_Coming_soon_011 | Validate the sub title section  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.waitForTimeout(1000)
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_comming_soon ', async() =>{ 
            await Design.comming_soon();
            await page.waitForTimeout(2000)
            
        })

        await test.step('verify_comming_soon ', async() =>{ 
            await Design.comming_soon_text();
            await page.waitForTimeout(2000)
            
        })

        await test.step('title_clear_by_fill ', async() =>{ 
            await Design.sub_title_clear_by_fill("");
            await page.waitForTimeout(2000)
            
        })

        await test.step('verify_title_coming_soon ', async() =>{ 
            await Design.sub_title_clear_by_fill("Check back later for more information.");
            await page.waitForTimeout(2000)
            
        })

        await test.step('sub_title_text_in_preview ', async() =>{ 
            await Design.sub_title_text_in_preview("Check back later for more information.");
            await page.waitForTimeout(2000)
            
        })

        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            await page.waitForTimeout(2000)
            
        })

        

        
       
    })
    test("009Design_Coming_soone_012 | Validate the Line 1 section  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_comming_soon ', async() =>{ 
            await Design.comming_soon();
            await page.waitForTimeout(2000)
            
        })

        await test.step('validate_comming_soon_text ', async() =>{ 
            await Design.comming_soon_text();
            await page.waitForTimeout(2000)
            
        })

        await test.step('line_1_clear_by_fill ', async() =>{ 
            await Design.line_1_clear_by_fill("");
            await page.waitForTimeout(2000)
            
        })

        await test.step('Line_1_coming_soon_text type ', async() =>{ 
            await Design.Line_1_coming_soon("Coming Soon-1");
            await page.waitForTimeout(2000)
            
        })
        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            await page.waitForTimeout(2000)
            
        })

        await test.step('line_1_text_in_preview ', async() =>{ 
            await Design.line_1_text_in_preview("Coming Soon-1");
            await page.waitForTimeout(2000)
            
        })

        

        

        
       
    })
    test("009Design_Coming_soon_013 | Validate the Line 2 section  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_comming_soon ', async() =>{ 
            await Design.comming_soon();
            await page.waitForTimeout(2000)
            
        })

        await test.step('validate_comming_soon_text ', async() =>{ 
            await Design.comming_soon_text();
            await page.waitForTimeout(2000)
            
        })

        await test.step('line_2_clear_by_fill ', async() =>{ 
            await Design.line_2_clear_by_fill("");
            await page.waitForTimeout(2000)
            
        })

        await test.step('line_2_clear_by_fill ', async() =>{ 
            await Design.line_2_clear_by_fill("Coming Soon-1");
            await page.waitForTimeout(2000)
            
        })

        await test.step('click_save_btn ', async() =>{ 
            await Design.save_btn();
            await page.waitForTimeout(2000)
            
        })

        await test.step('line_2_text_in_preview ', async() =>{ 
            await Design.line_2_text_in_preview("Coming Soon-1");
            await page.waitForTimeout(2000)
            
        })


        



        

        
       
    })
    test.skip("009Design_Coming_soon_014 | Validate the tool_tip  ", async ({ Design,EventdashboardPage, page,ReservationPage,AppsPage,AccountManagement }) => {

        await test.step('Navigate to apps directory', async() =>{ 
            await page.goto('/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click first app name   ', async() =>{ 
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async() =>{ 
            await AccountManagement.click_settings();
            
        })
        await test.step('click_design ', async() =>{ 
            await Design.click_design1();
            
        })
        await test.step('click_comming_soon ', async() =>{ 
            await Design.comming_soon();
            await page.waitForTimeout(2000)
            
        })

        


        await test.step('click_save_btn ', async() =>{ 
            await Design.click_tool_tip();
            
            await page.waitForTimeout(15000)
            
        })



        

        
       
    })

    //02/05/2024


   
   
   

    


    
})