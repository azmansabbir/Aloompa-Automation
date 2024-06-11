import test, { expect } from "@fixtures/basePages"
import functions from "@helper-function/functions";
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";
const authFile = 'user.json'

test("AccountManagement | Verify LiveOrder & Reservation (BETA) navigation is working properly", async ({ loginPage, page, AppsPage }) => {
    await test.step('Login as Admin', async () => {
        await page.goto('/#/apps/', { waitUntil: 'domcontentloaded' })
        //wait for login button
        await page.waitForSelector(`//img[@data-testid="app-factoryIcon"]`, { state: 'visible' });
        // Login with valid credentials
        await loginPage.login(data.username, data.password)


    })

    await test.step('Type search function ', async () => {
        await AppsPage.typeSearchFunction('2023 Unidev Test 0001')
    })

    await test.step('click on unidev test 001', async () => {
        await AppsPage.click_on_app('2023 UniDev Test 0001')
    })

    await test.step('click on 3 by 3 grid', async () => {
        await AppsPage.click_on_3_by_3_grid()
    })

    await test.step('click on live order reservations', async () => {
        await AppsPage.click_on_liveorder_reservations()

        await page.waitForLoadState('domcontentloaded')
        await page.context().storageState({ path: authFile })
    })
})


test.describe('use the same authentication mechanism', async () => {
    test.use({ storageState: authFile })

    test(`004_settings_001 | Verify "Open"  button working properly`, async ({ page, AppsPage, SettingsPage }) => {

        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async () => {
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async () => {
            await SettingsPage.click_settings()
        })

        await test.step('click on store settings', async () => {
            await SettingsPage.click_store_settings()
        })

        await test.step('check the open radio button', async () => {
            await SettingsPage.check_radio_button_open()
        })


    })

    test.skip(`004_settings_002 |  validate open radio button change is reflected on mobile`, async ({ page, AppsPage, SettingsPage }) => {

        await test.step('Navigate to apps directory', async () => {
            await page.setViewportSize({ width: 393, height: 851 })
            await page.goto('https://4ebbc834-5227-4a2e-b7d9-82ace92ed373.aloompaliveorderticketing-dev.loompavision.com/')
        })
        //need to move the following function to a mobile page
        await test.step('click on actions button', async () => {
            await SettingsPage.check_if_mobile_page_is_open()
        })



    })

    test(`004_settings_003 | Verify "close"  button working properly`, async ({ page, AppsPage, SettingsPage }) => {

        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async () => {
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async () => {
            await SettingsPage.click_settings()
        })

        await test.step('click on store settings', async () => {
            await SettingsPage.click_store_settings()
        })

        await test.step('check the open radio button', async () => {
            await SettingsPage.check_radio_button_close()
        })


    })

    test.skip(`004_settings_004 | validate close radio button change is reflected on mobile`, async ({ page, SettingsPage }) => {

        await test.step('Navigate to apps directory', async () => {
            await page.setViewportSize({ width: 393, height: 851 })
            await page.goto('https://4ebbc834-5227-4a2e-b7d9-82ace92ed373.aloompaliveorderticketing-dev.loompavision.com/')
        })

        await test.step('check the open radio button', async () => {
            await SettingsPage.check_if_mobile_page_is_close()
        })


    })

    test(`004_settings_005 | Verify to "Create New  Category" button is working properly`, async ({ page, AppsPage, SettingsPage, functions }) => {

        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async () => {
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async () => {
            await SettingsPage.click_settings()
        })
        await test.step('click on store settings', async () => {
            await SettingsPage.click_store_settings() 

        })
        await test.step('check the open radio button', async () => {
            await SettingsPage.click_new_category()
        })
        await test.step('now check if the new category popup is appearing', async () => {
            await SettingsPage.check_create_new_category_popup()
        })
        await test.step('04_Settings_006 | Verify to "Category name" takes input properly', async () => {
            await SettingsPage.input_category_name('Test category for automation')
        })
        // await test.step('04_Settings_007 | Verify to upload "Category Image." properly', async () => {
        //     await SettingsPage.upload_image()
        // })
         // await test.step('wait for image upload to complete', async () => {
        //     await SettingsPage.wait_for_image_upload()
        // })

        await test.step('file_uploader_for_splash_page_logo_file', async() =>{ 
            await SettingsPage.upload_image('banner.png')
            
        })
       
        await test.step('04_Settings_008 | verify The "Category Enabled" radio button is working', async () => {
            await SettingsPage.select_category_enabled_yesh()
            await page.waitForTimeout(2000)
            
        })
        await test.step('click save', async () => {
            await SettingsPage.SaveCate_Click()
            await page.waitForTimeout(2000)
            
           
            
        })
    })

    test(`004_settings_006 | verify the newly added category is visible in store settings`, async ({ page, AppsPage, SettingsPage }) => {

        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async () => {
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async () => {
            await SettingsPage.click_settings()
        })

        await test.step('click on store settings', async () => {
            await SettingsPage.click_store_settings()
        })

        await test.step('now check if the new category popup is appearing', async () => {
            await SettingsPage.check_the_newly_added_category()
        })


    })

    test(`04_Settings_007 | verify the newly added category is visible  in create new event`, async ({ page, AppsPage, EventdashboardPage }) => {

        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async () => {
            await AppsPage.click_first_app_name()
        })
        await test.step('click on event dashboard', async () => {
            await EventdashboardPage.click_event_dashBoard()

        })
        await test.step('click create new event', async () => {
            await EventdashboardPage.click_create_new_event()

        })

        await test.step('click on select category', async () => {
            await EventdashboardPage.click_select_category()

        })
        await test.step('click on category li item', async () => {
            await EventdashboardPage.check_category_li_item('Test category for automation')

        })

    })

    test(`04_Settings_008 | verify the newly added category can be disabled from store settings`, async ({ page, AppsPage, SettingsPage,functions}) => {

        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async () => {
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async () => {
            await SettingsPage.click_settings()
        })

        await test.step('click on store settings', async () => {
            await SettingsPage.click_store_settings()
        })
        await test.step('click on settings for the new event category', async() =>{ 
            await SettingsPage.click_settings_for_event_category_names('Test category for automation')
        })

        await test.step('Select the category enabled to off', async() =>{ 
            await SettingsPage.select_category_enabled_no()
        })
        await test.step('now click save', async() =>{ 
            await functions.click_save()
        })

    })

    test(`04_Settings_009 | verify the newly added category is not visible  in create new event`, async ({ page, AppsPage, EventdashboardPage }) => {

        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async () => {
            await AppsPage.click_first_app_name()
        })
        await test.step('click on event dashboard', async () => {
            await EventdashboardPage.click_event_dashBoard()

        })
        await test.step('click create new event', async () => {
            await EventdashboardPage.click_create_new_event()

        })

        await test.step('click on select category', async () => {
            await EventdashboardPage.click_select_category()

        })
        await test.step('click on category li item', async () => {
            await EventdashboardPage.check_category_li_item_not_visible('Test category for automation')

        })

    })

    test(`04_Settings_010 | validate delete new category is working properly`, async ({ page, AppsPage, SettingsPage }) => {

        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async () => {
            await AppsPage.click_first_app_name()
        })

        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async () => {
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async () => {
            await SettingsPage.click_settings()
        })

        await test.step('click on store settings', async () => {
            await SettingsPage.click_store_settings()
        })
        await test.step('click on settings for the new event category', async() =>{ 
            await SettingsPage.click_delete_for_event_category_names('Test category for automation')
        })     
        await test.step('click on confirm delete button failed', async() =>{ 
            await SettingsPage.click_confirm_delete_button()
        })
    })

test(`04_Settings_0014 | validate the store setting  landing page checkbox is working properly`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on store settings', async () => {
        await SettingsPage.click_store_settings()
    })
    await test.step('click on landing page Checkbox', async () => {
        await SettingsPage.click_Landing_Page_Checkbox()
    })
})

test(`04_Settings_0015 | validate the store setting Cart timer input is successful`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on store settings', async () => {
        await SettingsPage.click_store_settings()
    })
    await test.step('cart timer input', async () => {
        await SettingsPage.cart_Timer_Input()
    })





})

test(`04_Settings_0016 | validate the create new fee functionalities are working properly`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on store settings', async () => {
        await SettingsPage.click_store_settings()
    })
    await test.step('Create new fee hyperlink text click', async () => {
        await SettingsPage.Create_New_fee_Click()
    })
    await test.step('Create new fee Name input', async () => {
        await SettingsPage.FeeNameInput()
    })
    await test.step('Create new fee amount input', async () => {
        await SettingsPage.FeeAmountInput()
    })
    await test.step('Create new fee apply fee click', async () => {
        await SettingsPage.ApplyFee()
    })
    await test.step('Create new fee save button click', async () => {
        await SettingsPage.SaveFeeClick()
    })
    await test.step('Created new fee edit button click', async () => {
        await SettingsPage.EditFeeClick()
    })
    await test.step('Created new fee edit input', async () => {
        await SettingsPage.EditFeeNameInput()
        await SettingsPage.SaveFeeClick()
    })

})

test(`04_Settings_0017 | validate the Event time zone functionalities are working properly`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on store settings', async () => {
        await SettingsPage.click_store_settings()
    })
    await test.step('click on the event time zone dropdown', async () => {
        await SettingsPage.EventTimeZoneDropdownClick()
    })
    await test.step('Selec the event time zone from the dropdown', async () => {
        await SettingsPage.EventTimeZoneClick()
    })
    

})

test(`04_Settings_0018 | validate the Store currency functionalities are working properly`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on store settings', async () => {
        await SettingsPage.click_store_settings()
    })
    await test.step('click on the Store currency dropdown', async () => {
        await SettingsPage.StoreCurrencyDropdownClick()
    })
    await test.step('Selec the store currency from the dropdown', async () => {
        await SettingsPage.StoreCurrencyClick()
    })
    

})

test(`04_Settings_0019 | validate the Store country functionalities are working properly`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on store settings', async () => {
        await SettingsPage.click_store_settings()
    })
    await test.step('click on the Store country dropdown', async () => {
        await SettingsPage.StoreCountryDRopdownClick()
    })
    await test.step('Selec the store country from the dropdown', async () => {
        await SettingsPage.StoreCountryClick()
    })
    

})
test(`04_Settings_0020 | validate thePassword Protection functionalities are working properly`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on store settings', async () => {
        await SettingsPage.click_store_settings()
    })
    await test.step('click on the password protection checkbox', async () => {
        await SettingsPage.PasswordProtectionClick()
    })
   
    

})

test(`04_Settings_0021 | validate the access tickets message functionalities are working properly`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on store settings', async () => {
        await SettingsPage.click_store_settings()
    })
    await test.step('Access tickets Messages Input', async () => {
        await SettingsPage.AccessTicketsMessageInput()
    })
   
    

})

test(`04_Settings_0022 | validate the Copy link functionalities are working properly`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on store settings', async () => {
        await SettingsPage.click_store_settings()
    })
    await test.step('Click on the copy link button', async () => {
        await SettingsPage.CopyLinkClick()
    })
   
    

})


test(`04_Settings_0023 | validate the Save functionalities are working properly`, async ({ page, AppsPage, SettingsPage }) => {


    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on store settings', async () => {
        await SettingsPage.click_store_settings()
    })
    await test.step('click on the password protection checkbox', async () => {
        await SettingsPage.PasswordProtectionClick()
    })
    await test.step('Click on the Save button', async () => {
        await SettingsPage.SaveClick()
        
    })
   
    

})

test(`04_Settings_0024 | validate the Sqaure Integration Button Is functional from the Navigation Panel`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })

    await test.step('click on square integration settings', async () => {
        await SettingsPage.SquareIntegrationNavClick()
    })

   
    

})

test(`04_Settings_0025 | validate the Ingrate radio button is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on square integration settings', async () => {
        await SettingsPage.SquareIntegrationNavClick()
    })

    await test.step('click on square integration settings', async () => {
        await SettingsPage.Integrate_Click()
    })

   
    

})
test(`04_Settings_0026 | validate the square application id input field is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on square integration settings', async () => {
        await SettingsPage.SquareIntegrationNavClick()
    })

    await test.step('click on square integration settings', async () => {
        await SettingsPage.Integrate_Click()
    })
    await test.step('Input the square application id', async () => {
        await SettingsPage.SquareAppId_Input()
    })

   
    

})


test(`04_Settings_0027 | validate the square access token input field is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on square integration settings', async () => {
        await SettingsPage.SquareIntegrationNavClick()
    })

    await test.step('click on square integration settings', async () => {
        await SettingsPage.Integrate_Click()
    })
    await test.step('Input the square application id', async () => {
        await SettingsPage.SquareAccessTKN_Input()
    })

   
    

})

test(`04_Settings_0028 | validate the square location ID input field is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on square integration settings', async () => {
        await SettingsPage.SquareIntegrationNavClick()
    })

    await test.step('click on square integration settings', async () => {
        await SettingsPage.Integrate_Click()
    })
    await test.step('Input the square application id', async () => {
        await SettingsPage.SquareLocationID_Input()
    })

   
    

})

test(`04_Settings_0029 | validate the sandbox checkbox is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on square integration settings', async () => {
        await SettingsPage.SquareIntegrationNavClick()
    })

    await test.step('click on square integration settings', async () => {
        await SettingsPage.Integrate_Click()
    })
    await test.step('Click on the sandbox checkbox', async () => {
        await SettingsPage.SandBoxCheckbox_Click()
    })

   
    

})


test(`04_Settings_0030 | validate the authorized button is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on square integration settings', async () => {
        await SettingsPage.SquareIntegrationNavClick()
    })

    await test.step('click on square integration settings', async () => {
        await SettingsPage.Integrate_Click()
    })
    await test.step('Click on the save button', async () => {
        await SettingsPage.Authirized_Click()
    })

   
    

})





test(`04_Settings_0031 | validate the save button is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on square integration settings', async () => {
        await SettingsPage.SquareIntegrationNavClick()
    })

    await test.step('click on square integration settings', async () => {
        await SettingsPage.Integrate_Click()
    })
    await test.step('Click on the save button', async () => {
        await SettingsPage.Save_Click()
    })

   
    

})

test(`04_Settings_0032 | validate the Disable radio button is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on square integration settings', async () => {
        await SettingsPage.SquareIntegrationNavClick()
    })

    await test.step('click on square integration settings', async () => {
        await SettingsPage.Integrate_Click()
        await SettingsPage.Disable_Click()
    })
    await test.step('Click on the save button', async () => {
        await SettingsPage.Save_Click()
    })


   
    

})

test(`04_Settings_0033 | Validate the navigation of the privacy policy setting page`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Privacypolicy_Click()
    })


   
    

})

test(`04_Settings_0034 | validate the sms disclaimer input field is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Privacypolicy_Click()
    })
    await test.step('Fill the SMS Desclaimer input field', async () => {
        await SettingsPage.SMS_Input()
    })


   
    

})

test(`04_Settings_0035 | Validate the purchase disclaimer input field is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Privacypolicy_Click()
    })
    await test.step('Fill the Purchase Desclaimer input field', async () => {
        await SettingsPage.Purchase_Input()
    })


   
    

})
test(`04_Settings_0036 | Validate the Privacy Policy input field is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Privacypolicy_Click()
    })
    await test.step('Fill the Privacy policy input field', async () => {
        await SettingsPage.Privacy_Policy_Input()
    })


   
    

})
test(`04_Settings_0038 | Validate the "upload your own font" hyperlink text is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Privacypolicy_Click()
    })
    await test.step('Click on the upload your own font hyperlink and validate the upload functionality', async () => {
        await functions.fontUploadFunction()
        await SettingsPage.Privacy_Policy_Font_Upload_Click()
    })


   
    

})

test(`04_Settings_0039 | Validate the terms of service  input field is functional`, async ({ page, AppsPage, SettingsPage }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Privacypolicy_Click()
    })
    await test.step('Fill the terms and conditions input field', async () => {
        await SettingsPage.TermsandCondition_Input()
    })
})



test(`04_Settings_0040 | Validate the "upload your own font" hyperlink text is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Privacypolicy_Click()
    })
    await test.step('Click on the upload your own font hyperlink and validate the upload functionality', async () => {
        await functions.fontUploadFunction()
        await SettingsPage.Terms_Font_Upload_Click()
    })


   
    

})
// issue on save button

test(`04_Settings_0041 | Validate the save button is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Privacypolicy_Click()
    })
    await test.step('Fill the Privacy policy input field', async () => {
        await SettingsPage.Privacy_Policy_Input()
        
    })
    await test.step('Fill the terms and conditions input field', async () => {
        await SettingsPage.TermsandCondition_Input()
    })
    await test.step('Click on the Save button and validate the save functionality', async () => {
        await page.waitForTimeout(2000)
        await SettingsPage.PrivacySave_Click()
        await page.waitForTimeout(2000)
        await SettingsPage.PrivacySave_Click()
        
    })


   
    

})
test(`04_Settings_0043 | Validate the navigation of the messaging setting page`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Messaging_Click()
    })
   


   
    

})
test(`04_Settings_0044 | Validate the sign up greeting message input field is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Messaging_Click()
    })
    await test.step('Sign up Greeting Messaging Input', async () => {
        await SettingsPage.GreeetingMsg_Input()
    })
   


   
    

})
test(`04_Settings_0045 | Validate the  Order complete input field is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Messaging_Click()
    })
    await test.step('Order complete input', async () => {
        await SettingsPage.OrderCompleteMsg_Input()
    })
   


   
    

})
test(`04_Settings_0046 | Validate the Order Confirmation Email Subject input field is functiona`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Messaging_Click()
    })
    await test.step('Order Confirmation Email Subject input', async () => {
        await SettingsPage.OrderConfirmation_Input()
    })
   


   
    

})

test(`04_Settings_0047 | Validate the Order Confirmation Email Body input field is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Messaging_Click()
    })
    await test.step(' Order Confirmation Email Body input', async () => {
        await SettingsPage.OrderConfirmation_Email_Body_Input()
    })
   


   
    

})
test(`04_Settings_0048 | Validate the "upload your own font" hyperlink text is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Messaging_Click()
    })
    await test.step('Click on the upload your own font hyperlink and validate the upload functionality', async () => {
        await functions.fontUploadFunction()
        await SettingsPage.Upload_Your_font_Click()
    })
   


   
    

})
test(`04_Settings_0049 | Validate the Order Confirmation SMS Message input field is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Messaging_Click()
    })
    await test.step('Order Confirmation SMS Message input and validate the input functionality', async () => {
        await SettingsPage.OrderConfirmation_MSG_Input()
    })
   


   
    

})
//issue on save button
test(`04_Settings_0050 | Validate the save button is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.Messaging_Click()
    })
    await test.step('Order Confirmation SMS Message input and validate the input functionality', async () => {
        await SettingsPage.OrderConfirmation_MSG_Input()
        
    })
    await test.step('Sign up Greeting Messaging Input', async () => {
        await SettingsPage.GreeetingMsg_Input()
    })
    await test.step(' Validate the save button is functional', async () => {
        
        await SettingsPage.MSGSave_Click()
        await page.waitForTimeout(2000)
        await SettingsPage.MSGSave_Click()
        
    })
   


   
    

})

test(`04_Settings_0052 | Validate the navigation of the translation setting page`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on privacy policy settings', async () => {
        await SettingsPage.TransLation_Click()
    })
    

})

test(`04_Settings_0053 | Validate the language dropdown is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on Translation settings', async () => {
        await SettingsPage.TransLation_Click()
    })
    await test.step('click on the language dropdown', async () => {
        await SettingsPage.Language_drpdwn_Click()
    })
    await test.step('Select the option from the language dropdown', async () => {
        await SettingsPage.Select_Eng()
    })

})

test(`04_Settings_0054 | Validate the store data event dropdown is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on Translation settings', async () => {
        await SettingsPage.TransLation_Click()
    })
    await test.step('click on the Store data dropdown', async () => {
        await SettingsPage.Store_Data_Click()
    })
    await test.step('Validate the Events Functionalities', async () => {
        await SettingsPage.Events_Click()
        await SettingsPage.BrowseEvents_Input()
        await SettingsPage.AllEvents_Input()
        await SettingsPage.Searchevent_Input()
        await SettingsPage.Select_Category_Input()
        await SettingsPage.Get_tickets_Input()
        await SettingsPage.About_Input()
        await SettingsPage.Free_Input()
    })
    
})
test(`04_Settings_0055 | Validate the store data tickets dropdown is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
        })
        await test.step('click on actions button', async () => {
            await AppsPage.click_first_app_name()
        })
        await test.step('click settings', async () => {
            await SettingsPage.click_settings()
        })
        await test.step('click on Translation settings', async () => {
            await SettingsPage.TransLation_Click()
        })
        await test.step('click on the Store data dropdown', async () => {
            await SettingsPage.Store_Data_Click()
        })
        await test.step('Validate the Tickets Functionalities', async () => {
            await SettingsPage.Tickets_Click()
            await SettingsPage.No_TicketMsg_Input()
            await SettingsPage.Ticket_Input()
            
            await SettingsPage.Tickets_Input()
            await SettingsPage.Order_Input()
            await SettingsPage.Name_Input()
            await SettingsPage.SelectTickets_Input()
            await SettingsPage.SalesClosd_Input()
            await SettingsPage.Notvailable_Input()
            await SettingsPage.ComingSoon_Input()
            await SettingsPage.SoldOut_Input()
            await SettingsPage.AddTCArt_Input()
            await SettingsPage.TickAddTCArt_Input()
            await SettingsPage.MAxTicketEventReached_Input()
            await SettingsPage.MAxTicketInventReached_Input()
 
        })
    })
test(`04_Settings_0056 | Validate the store data accounts dropdown is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

            await test.step('Navigate to apps directory', async () => {
                await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
            })
            await test.step('click on actions button', async () => {
                await AppsPage.click_first_app_name()
            })
            await test.step('click settings', async () => {
                await SettingsPage.click_settings()
            })
            await test.step('click on Translation settings', async () => {
                await SettingsPage.TransLation_Click()
            })
            await test.step('click on the Store data dropdown', async () => {
                await SettingsPage.Store_Data_Click()
            })
            await test.step('Validate the Accounts Functionalities', async () => {
                await SettingsPage.Accounts_Click()
                //await SettingsPage.Account_Input()
                await SettingsPage.Account_Info_Input()
                await SettingsPage.Upadate_Input()
                await SettingsPage.FName_Input()
                await SettingsPage.LName_Input()
                await SettingsPage.Email_Input()
                await SettingsPage.Mobile_Input()
                await SettingsPage.Ship_Add_Input()
                await SettingsPage.Address1_Input()
                await SettingsPage.City_Input()
                await SettingsPage.State_Input()
                await SettingsPage.Postal_Input()
                // await SettingsPage.Shipping_info_Input()
                // await SettingsPage.Order_p_Input()
                // await SettingsPage.Confirmation_sent_toInput()
                


            })
          


})

test(`04_Settings_0057 | Validate the store data cart dropdown is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on Translation settings', async () => {
        await SettingsPage.TransLation_Click()
    })
    await test.step('click on the Store data dropdown', async () => {
        await SettingsPage.Store_Data_Click()
    })
    await test.step('Validate the Cart Functionalities', async () => {
        await SettingsPage.Cart_Click()
        await SettingsPage.Cart_Input()
        await SettingsPage.Empty_Cart_Input()
        
        
        
        await SettingsPage.Subtotal_Input()
        await SettingsPage.Fees_Input()
        await SettingsPage.Total_Input()
        
        


    })
  


})
test(`04_Settings_0058 | Validate the general navigation dropdown is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on Translation settings', async () => {
        await SettingsPage.TransLation_Click()
    })
    await test.step('click on the Store data dropdown', async () => {
        await SettingsPage.Store_Data_Click()
    })
    await test.step('Validate the Navigations Functionalities', async () => {
        await SettingsPage.NavigationDRopdwn_Click()
        await SettingsPage.General_Click()
        await SettingsPage.Expevent_Input()
        await SettingsPage.SeeAll_Input()
        await SettingsPage.KeepBrwsing_Input()
        await SettingsPage.ConChekout_Input()
        await SettingsPage.Cancel_Input()
        await SettingsPage.SaveTransition_Click()
        
        
        


    })
  


})
test(`04_Settings_0059 | Validate the import csv button is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on Translation settings', async () => {
        await SettingsPage.TransLation_Click()
    })
    // await test.step('click on the Import CSV Button', async () => {
        
    //     await SettingsPage.IMportCSV_Click()
    //     await SettingsPage.upload_CSV()
    // })
    await test.step('click select file button', async() =>{ 
        await SettingsPage.upload_CSV('reservations-events-export.csv')
        await page.waitForTimeout(2000)
    })


})
test(`04_Settings_0060 | Validate the Export csv button is functional`, async ({ page, AppsPage, SettingsPage,functions, }) => {

    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/792353d2-b992-4760-85a9-09570f1fc77c/0b6fcffd-e117-43dd-8403-28688baa5ff7/live-order')
    })
    await test.step('click on actions button', async () => {
        await AppsPage.click_first_app_name()
    })
    await test.step('click settings', async () => {
        await SettingsPage.click_settings()
    })
    await test.step('click on Translation settings', async () => {
        await SettingsPage.TransLation_Click()
    })
    await test.step('click on the Import CSV Button', async () => {
        
        await SettingsPage.ExportCSV_Click()
        
    })


})

//02/05/2024

})