import test, { expect } from "@fixtures/basePages"
import functions from "@helper-function/functions";
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";
const authFile = 'user.json'

test("AccountManagement | Verify LiveOrder & Reservation (BETA) navigation is working properly", async ({ loginPage, page, AppsPage, Report }) => {
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

    // await test.step('click on live order reservations', async () => {
    //     await AppsPage.click_on_liveorder_reservations()

    //     await page.waitForLoadState('domcontentloaded')
    //     await page.context().storageState({ path: authFile })
    // })
})


test(`0012_Ticketing_001 | Validate The Admin Is Able To Navigate To the Reports Tab`, async ({ page, AppsPage, Report, loginPage }) => {

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
        await Report.click_on_3_by_3_grid()
    })


    await test.step('click on the reservation', async () => {
        await Report.click_on_the_Reservation()
    })
    await test.step('click on the CMS', async () => {
        await Report.Input_Search()
        await Report.CMS_Selection()
        await Report.Reports_Click()
    })


})

test(`0012_Ticketing_002 | Validate The Admin Is Able To Navigate To the Tickets Count Tab And Validate functionalities`, async ({ page, AppsPage, Report, loginPage }) => {

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
        await Report.click_on_3_by_3_grid()
    })


    await test.step('click on the reservation', async () => {
        await Report.click_on_the_Reservation()
    })
    await test.step('click on the CMS', async () => {
        await Report.Input_Search()
        await Report.CMS_Selection()
        await Report.Reports_Click()
    })
    await test.step('click on the Tickets Count Tab', async () => {
        await Report.TicketsCount_Click()
    })
    await test.step('click on the Export Custom data Checkbox', async () => {
        await Report.TicketsCount_Click()
    })
    //     await test.step('click on the Page Size Dropdown', async () => {
    //     await Report.PageSize_Click()
    //     await Report.ViewAll_Click()
    // })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportCSV_Click()
    })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportPDF_Click()
    })

})
test(`0012_Ticketing_003 | Validate The Admin Is Able To Navigate To the Tickets Count Without Fees Tab And validate the functionalities`, async ({ page, AppsPage, Report, loginPage }) => {

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
        await Report.click_on_3_by_3_grid()
    })


    await test.step('click on the reservation', async () => {
        await Report.click_on_the_Reservation()
    })
    await test.step('click on the CMS', async () => {
        await Report.Input_Search()
        await Report.CMS_Selection()
        await Report.Reports_Click()
    })
    await test.step('click on the Tickets Count Without fees Tab', async () => {
        await Report.TicketsCountWithoutFees_Click()
    })
    await test.step('click on the Export Custom data Checkbox', async () => {
        await Report.ExportCustomData_Click()
    })
    //     await test.step('click on the Page Size Dropdown', async () => {
    //     await Report.PageSize_Click()
    //     await Report.ViewAll_Click()
    // })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportCSV_Click()
    })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportPDF_Click()
    })

})
test(`0012_Reports_004 | Validate The Admin Is Able To Navigate To the Event Audit Tab And validate the functionalities`, async ({ page, AppsPage, Report, loginPage }) => {

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
        await Report.click_on_3_by_3_grid()
    })


    await test.step('click on the reservation', async () => {
        await Report.click_on_the_Reservation()
    })
    await test.step('click on the CMS', async () => {
        await Report.Input_Search()
        await Report.CMS_Selection()
        await Report.Reports_Click()
    })
    await test.step('click on the Event Audit Tab', async () => {
        await Report.EventAudit_Click()
    })
    await test.step('click on the Event Dropdown and selection of the event', async () => {
        await Report.Eventdropdown_Click()
        await Report.Eventoption_Click()
    })
    //     await test.step('click on the Page Size Dropdown', async () => {
    //     await Report.PageSize_Click()
    //     await Report.ViewAll_Click()
    // })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportCSV_Click()
    })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportPDF_Click()
    })

})
test(`0012_Ticketing_005 | Validate The Admin Is Able To Navigate To the Sales By Date And validate the functionalities`, async ({ page, AppsPage, Report, loginPage }) => {

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
        await Report.click_on_3_by_3_grid()
    })


    await test.step('click on the reservation', async () => {
        await Report.click_on_the_Reservation()
    })
    await test.step('click on the CMS', async () => {
        await Report.Input_Search()
        await Report.CMS_Selection()
        await Report.Reports_Click()
    })
    await test.step('click on the  Sales By Date Tab', async () => {
        await Report.SalesByDate_Click()
    })
    await test.step('click on the Export Custom data Checkbox', async () => {
        await Report.ExportCustomData_Click()
    })
    //     await test.step('click on the Page Size Dropdown', async () => {
    //     await Report.PageSize_Click()
    //     await Report.ViewAll_Click()
    // })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportCSV_Click()
    })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportPDF_Click()
    })

})

test(`0012_Ticketing_006 | Validate The Admin Is Able To Navigate To the Transaction Details And validate the functionalities`, async ({ page, AppsPage, Report, loginPage }) => {

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
        await Report.click_on_3_by_3_grid()
    })


    await test.step('click on the reservation', async () => {
        await Report.click_on_the_Reservation()
    })
    await test.step('click on the CMS', async () => {
        await Report.Input_Search()
        await Report.CMS_Selection()
        await Report.Reports_Click()
    })
    await test.step('click on the Transaction Details', async () => {
        await Report.TransactionDetails_Click()
    })
    await test.step('click on the Show All the filter hyperlink text and clear all the filters', async () => {
        await Report.ShowFilterOptions_Click()
        await Report.ClearAllFilter_Click()
    })
    await test.step('click on the Export Custom data Checkbox', async () => {
        await Report.ExportCustomData_Click()
    })
    //     await test.step('click on the Page Size Dropdown', async () => {
    //     await Report.PageSize_Click()
    //     await Report.ViewAll_Click()
    // })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportCSV_Click()
    })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportPDF_Click()
    })

})

test(`0012_Reports_007 | Validate The Admin Is Able To Navigate To the Marketing Details And validate the functionalities`, async ({ page, AppsPage, Report, loginPage }) => {

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
        await Report.click_on_3_by_3_grid()
    })


    await test.step('click on the reservation', async () => {
        await Report.click_on_the_Reservation()
    })
    await test.step('click on the CMS', async () => {
        await Report.Input_Search()
        await Report.CMS_Selection()
        await Report.Reports_Click()
    })
    await test.step('click on the Marketing Details', async () => {
        await Report.MarketingReport_Click()
    })
    await test.step('click on the Show All the filter hyperlink text and clear all the filters', async () => {
        await Report.ShowFilterOptions_Click()
        await Report.ClearAllFilter_Click()
    })
    await test.step('click on the Export Custom data Checkbox', async () => {
        await Report.ExportCustomData_Click()
    })
    //     await test.step('click on the Page Size Dropdown', async () => {
    //     await Report.PageSize_Click()
    //     await Report.ViewAll_Click()
    // })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportCSV_Click()
    })
    await test.step('click on the Export CSV Button', async () => {
        await Report.ExportPDF_Click()
    })

})

//02/05/2024