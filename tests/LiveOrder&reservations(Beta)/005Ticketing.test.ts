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
test.describe('use the same authentication mechanism',async()=>{
    test.use({storageState:authFile}) 

test(`005_Ticketing_001 | Validate The Admin Is Able To Navigate To the Ticketing Tab`, async ({ page, AppsPage, TicketingPage }) => {
    
            await test.step('Navigate to apps directory', async () => {
                await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
            })
            await test.step('click on The CMS Reservation', async () => {
                await TicketingPage.CMSEventClick()
            })
            await test.step('click Ticketing Tab', async () => {
                await TicketingPage.TicketingTabClick()
            })
    
    
    
        })
test(`005_Ticketing_002 | Verify "Export CSV"  button working properly`, async ({ page, AppsPage, TicketingPage }) => {
    
            await test.step('Navigate to apps directory', async () => {
                await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
            })
            await test.step('click on The CMS Reservation', async () => {
                await TicketingPage.CMSEventClick()
            })
            await test.step('click Ticketing Tab', async () => {
                await TicketingPage.TicketingTabClick()
            })
            await test.step('click On the Export CSV Button', async () => {
                await TicketingPage.ExportCSVClick()
            })
           

    
    
    
        })
test(`005_Ticketing_003 | Verify "Import CSV"  functionalities are working properly`, async ({ page, AppsPage, TicketingPage }) => {
    
            await test.step('Navigate to apps directory', async () => {
                await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
            })
            await test.step('click on The CMS Reservation', async () => {
                await TicketingPage.CMSEventClick()
            })
            await test.step('click Ticketing Tab', async () => {
                await TicketingPage.TicketingTabClick()
            })
            await test.step('Verify the import CSV button is clickable', async () => {
                await TicketingPage.ImportCSVClick()
            })
            await test.step('Verify the Timezone dropdown is clickable', async () => {
                await TicketingPage.TimezoneDRpdwnClick()
            })
            await test.step('Verify the Timezone option is clickable', async () => {
                await TicketingPage.TimezoneoptionClick()
            })
            await test.step('Verify the unix checkbox is clickable', async () => {
                await TicketingPage.UnixCheckboxClick()
            })
            await test.step('Verify the Multi Value dropdown is clickable', async () => {
                await TicketingPage.MultiValueDRopdownClick()
            })
            await test.step('Verify the Multi Value Options are clickable', async () => {
                await TicketingPage.MultiValueOptionClick()
            })
            await test.step('Verify the Select File button is clickable', async () => {
                await TicketingPage.SelectFileBtnClick()
            })
            await test.step('Verify the Parse button is clickable', async () => {
                await TicketingPage.ParseBtnClick()
            })
                


            })
           

    
    
    
    
test(`005_Ticketing_004 | Verify "Create Ticket Type"  functionalities are working properly`, async ({ page, AppsPage, TicketingPage }) => {
    
            await test.step('Navigate to apps directory', async () => {
                await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
            })
            await test.step('click on The CMS Reservation', async () => {
                await TicketingPage.CMSEventClick()
            })
            await test.step('click Ticketing Tab', async () => {
                await TicketingPage.TicketingTabClick()
            })
            await test.step('Verify the create ticket type functionalities', async () => {
                await TicketingPage.CreateTicketTypeBtnClick()
            })
            await test.step('Verify the ticket name input field is functional', async () => {
                await TicketingPage.InputTicketName()
            })
            await test.step('Verify the ticket name input field is functional', async () => {
                await TicketingPage.TicketSupport()
            })
            await test.step('Verify the Description input field is functional', async () => {
                await TicketingPage.InputDescription()
            })
            await test.step('Verify the Price per ticket input field is functional', async () => {
                await TicketingPage.InputPricePerTicket()
            })
            await test.step('Verify the inventory dropdown is clickable', async () => {
                //await TicketingPage.InventoryDropdownClick()
            })
            await test.step('Verify the inventory is selectable', async () => {
                //await TicketingPage.InventoryOptionClick()
            })
            await test.step('Verify the create new button is clickable', async () => {
                await TicketingPage.ClickCreateNewBtn()
            })
            await test.step('Verify the inventory name input field is functional', async () => {
                await TicketingPage.InputInventoryName()
            })
            await test.step('Verify the inventory quantity input field is functional', async () => {
                await TicketingPage.InputInventoryQuantity()
            })
            await test.step('Verify the ticket name input field is functional', async () => {
                await TicketingPage.TicketSupport()
            })
            await test.step('Verify the save inventory button is functional', async () => {
                await TicketingPage.ClickSaveInventoryBtn()
            })
            
            await test.step('Verify the sale start input field is functional', async () => {
                await TicketingPage.saleStartDateINput()
            })
            await test.step('Verify the sale start time input field is functional', async () => {
                await TicketingPage.saleStartTimeINput()
            })
             await test.step('Verify the sale start time input field is functional', async () => {
                await TicketingPage.saleStartTimeINput()
            })
            await test.step('Verify the sale ends date input field is functional', async () => {
                await TicketingPage.saleEndsDateINput()
            })
            await test.step('Verify the sale ends time input field is functional', async () => {

                await TicketingPage.saleEndTimeINput()
            })
            await test.step('Verify the minimum input field is functional', async () => {
                await TicketingPage.MinimumINput()
            })
            await test.step('Verify the maximum input field is functional', async () => {

                await TicketingPage.MaximumINput()
            })
            await test.step('Verify the sale in group input field is functional', async () => {

                await TicketingPage.SellInGroupINput()
            })
            await test.step('Verify the  require password field is functional', async () => {

                await TicketingPage.RequirePassword()
            })
            await test.step('Verify the  require password input field is functional', async () => {

                await TicketingPage.InputPassword()
            })
            await test.step('Verify the advance setting button is functional', async () => {

                await TicketingPage.ClickAdvanceSetting()
            })
            await test.step('Verify the password bank button is functional', async () => {

                //await TicketingPage.ClickPasswordBank()
            })
            await test.step('Verify the save button is functional', async () => {

                
                await TicketingPage.ClickSaveBtn()
            })



    })


test(`005_Ticketing_005 | Verify the "Created Ticket Type" is visible on the system`, async ({ page, AppsPage, TicketingPage }) => {
    
    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
    })
    await test.step('click on The CMS Reservation', async () => {
        await TicketingPage.CMSEventClick()
    })
    await test.step('click Ticketing Tab', async () => {
        await TicketingPage.TicketingTabClick()
    })
    await test.step('Verify the create ticket type is visible', async () => {
        await TicketingPage.VisibilityOfCreatedTicketType()


    })
})
test.skip(`005_Ticketing_006 | Verify the "Created Ticket Type" is visible on the system`, async ({ page, AppsPage, TicketingPage }) => {
    
    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
    })
    await test.step('click on The CMS Reservation', async () => {
        await TicketingPage.CMSEventClick()
    })
    await test.step('click Ticketing Tab', async () => {
        await TicketingPage.TicketingTabClick()
    })
    await test.step('Verify the create ticket type is visible', async () => {
        await TicketingPage.VisibilityOfCreatedTicketType()




    })
})
test(`005_Ticketing_007 | Verify the "Created Ticket Type" is editable`, async ({ page, AppsPage, TicketingPage }) => {
    
    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
    })
    await test.step('click on The CMS Reservation', async () => {
        await TicketingPage.CMSEventClick()
    })
    await test.step('click Ticketing Tab', async () => {
        await TicketingPage.TicketingTabClick()
    })
    await test.step('Verify the action button is clickable', async () => {
        await page.waitForTimeout(1000)
        await TicketingPage.ClickActions()
        await page.waitForTimeout(1000)
    })
    await test.step('Verify the edit action button is clickable', async () => {
        await page.waitForTimeout(1000)
        await TicketingPage.ClickEditActions()
        await page.waitForTimeout(1000)
    })
    await test.step('Verify the ticket name is editable', async () => {
        await page.waitForTimeout(1000)
        await TicketingPage.InputTicketNameEdit()
    })
    await test.step('Verify the save button is clickable', async () => {
     
        await TicketingPage.ClickSaveBtn()
    })



    })
test(`005_Ticketing_008 | Validate The Created Ticket delete functionalities are working Fine`, async ({ page, AppsPage, TicketingPage }) => {
    
    await test.step('Navigate to apps directory', async () => {
        await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
    })
    await test.step('click on The CMS Reservation', async () => {
        await TicketingPage.CMSEventClick()
    })
    await test.step('click Ticketing Tab', async () => {
        await TicketingPage.TicketingTabClick()
        await page.waitForTimeout(1000)
    })
    await test.step('Verify the action button is clickable', async () => {
        await page.waitForTimeout(1000)
        await TicketingPage.ClickActionsForDelete()
        await page.waitForTimeout(1000)
    })
    await test.step('Verify the delete action button is clickable', async () => {
        await page.waitForTimeout(1000)
        await TicketingPage.ClickDeeleteTickeType()
        await page.waitForTimeout(1000)
    })
    await test.step('Verify the yes button is clickable', async () => {
        await TicketingPage.ClickYes()


    })
})
    
    test(`005_Ticketing_009 | Validate The Inventory Navigation button is function`, async ({ page, AppsPage, TicketingPage }) => {
    
        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
        })
        await test.step('click on The CMS Reservation', async () => {
            await TicketingPage.CMSEventClick()
        })
        await test.step('click Ticketing Tab', async () => {
            await TicketingPage.TicketingTabClick()
        })
        await test.step('Verify the inventory button is functional', async () => {
            await TicketingPage.inventoryBtnClick()
    
    
    
    
        })
    })
    test(`005_Ticketing_0010 | Validate The Create Inventory functionalities are working`, async ({ page, AppsPage, TicketingPage }) => {
    
        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
        })
        await test.step('click on The CMS Reservation', async () => {
            await TicketingPage.CMSEventClick()
        })
        await test.step('click Ticketing Tab', async () => {
            await TicketingPage.TicketingTabClick()
        })
        await test.step('Verify the inventory button is functional', async () => {
            await TicketingPage.inventoryBtnClick()
        })
        await test.step('Verify the create inventory button is functional', async () => {
            await TicketingPage.createInventoryBtnClick()
        })
        await test.step('Verify the inventory name input field is functional', async () => {
            await TicketingPage.inventoryNameInput()
        })
        await test.step('Verify the inventory capacity input field is functional', async () => {
            await TicketingPage.inventoryCapacityInput()
        })
        await test.step('Verify the name input field is functional', async () => {
            await TicketingPage.NameInput()
        })
        await test.step('Verify the total input field is functional', async () => {
            await TicketingPage.TotalInput()
        })
        await test.step('Verify the save button is functional', async () => {
            await TicketingPage.ClickonTheSaveBtn()
    
    
    
    
        })
    })
    test(`005_Ticketing_0011 | Validate The Created Inventory Edit functionalities are working Fine`, async ({ page, AppsPage, TicketingPage }) => {
    
        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
        })
        await test.step('click on The CMS Reservation', async () => {
            await TicketingPage.CMSEventClick()
        })
        await test.step('click Ticketing Tab', async () => {
            await TicketingPage.TicketingTabClick()
        })
        await test.step('Verify the inventory tab button is functional', async () => {
            await TicketingPage.inventoryBtnClick()
        })
        await test.step('Verify the Actions button is functional', async () => {
            await TicketingPage.ClickActions()
        })
        await test.step('Verify the Edit Action button is functional', async () => {
            await TicketingPage.ClickEditActions()
        })
        await test.step('Verify the inventory name input field is functional', async () => {
            await TicketingPage.inventoryNameInputEdit()
        })
        await test.step('Verify the save button is functional', async () => {
            await TicketingPage.ClickonTheSaveBtn()
    
    
        })
    })
    test(`005_Ticketing_0012 | Validate The Created Inventory delete functionalities are working Fine`, async ({ page, AppsPage, TicketingPage }) => {
    
        await test.step('Navigate to apps directory', async () => {
            await page.goto('https://dragonflyadmin-dev.loompavision.com/#/apps/2caecfa3-efec-4f00-82eb-5b8963cf62b5/78f793ad-2c16-425e-ae03-2eb734390278/live-order/7b8a3a5e-3c88-49b0-9da8-c2d3d8f523e6/events')
        })
        await test.step('click on The CMS Reservation', async () => {
            await TicketingPage.CMSEventClick()
        })
        await test.step('click Ticketing Tab', async () => {
            await TicketingPage.TicketingTabClick()
        })
        await test.step('Verify the inventory Tab Button is functional', async () => {
            await TicketingPage.inventoryBtnClick()
        })
        await test.step('Verify the Actions button is functional', async () => {
            await TicketingPage.ClickActions()
        })
        await test.step('Verify the delete inventory button is functional', async () => {
            await TicketingPage.ClickDeeleteInventory()
        })
        await test.step('Verify the Yes button is functional', async () => {
            await TicketingPage.ClickYes()
    
    
        })
    })
    //02/05/2024
})