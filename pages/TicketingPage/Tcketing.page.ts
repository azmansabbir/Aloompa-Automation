import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";

export default class TicketingPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }



    private CMS_page_elements = {
        CMSReservationEvent:"//a[contains(text(),'001 test arif')]",
        AutomationEvent:"//p[text()='Testing automation']",
        TicketingTab:"//a[@title='Ticketing']//span[1]",
        ExportCSVBTn:"//span[text()='Export CSV']",
        ImportCSVBTN:"//span[text()='Import CSV']",
        TimeZoneDropdown:"//p[text()='Africa/Cairo']",
        TimezoneOption:"//li[@data-value='Asia/Dhaka']",
        UnixChecklbox:"(//input[@type='checkbox'])[1]",
        MultiValueDropdown:"//p[text()=',']",
        MultiValueOption:"//li[@data-value='1']",
        SelectFileBtn:"//span[text()='Select File']",
        ParseBTN:"//span[text()='Parse']",
        CreateTicketType:"//a[contains(text(),'Create Ticket Type')]",
        TicketName:"//input[@placeholder='General Admission']",
        Description:"//textarea[@placeholder='Enter description here...']",
        PricePerTicket:"(//input[@min='0'])[1]",
        InventoryDropdown:"//ul[@role='listbox']",
        INventoryOption:"//li[@role='option']",
        InventoryClose:"//button[@class='sc-fHuLdG ktbFdU']",
        SaleStartDate:"(//input[@placeholder='06/01/2022'])[1]",
        SaleStartTime:"(//input[@placeholder='08:00 AM'])[1]",
        SaleEnddate:"(//label[text()='Sale Ends']/following::input)[1]",
        saleEndsTime:"(//label[text()='Sale Ends']/following::input)[2]",
        Minimum:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[2]",
        Maximum:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[3]",
        SellInGroup:"(//label[text()='Sell In Groups Of']/following::input)[1]",
        RequirePassword:"//label[text()='Password Protection']/following::input",
        ShowAdvanceSetting:"//span[text()='+ Show Advanced Settings']",
        PasswordBank:"input.jss2474",
        SaveBTn:"//span[text()='Save']",
        CreateNew:"//span[text()='+ Create New']",
        InventoryName:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[1]",
        InventoryQuantity:"(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[2]",
        SaveInventory:"//span[text()='Save Inventory']",
        Password:"//label[text()='Password']/following::input",
        CreatedTicketType:"(//a[@title='Demo Ticket'])[1]",
        NavigateInventory:"//a[contains(.,'Inventory')]",
        CreateInventory:"//a[normalize-space()='Create Inventory']",
        InventoryNameinput:"(//label[text()='Inventory Name']/following::input)[1]",
        CapacityInput:"(//input[@type='number'])[1]",
        Name:"(//label[text()='Total']/following::input)[1]",
        Total:"(//label[text()='Total']/following::input)[2]",
        SaveBtn:"//button[@type='submit']",
        CreatedInventory:"//a[contains(text(),'Demo Inventory Name')]",
        Actions:"//span[text()='Actions']",
        EditDetails:"//p[text()='Edit Details']",
        DeleteInventory:"//p[text()='Delete Inventory']",
        Yes:"//span[contains(text(),'Yes')]",
        deleteTicketType:"//p[text()='Delete Ticket Type']",
        CreateTickettypedescription:"//textarea[@placeholder='Enter description here...']",
        ClickActionsForDelete:"(//a[@title='Demo Ticket'])/parent::td/following-sibling::td[3]/div/button[1]",
        TicketSupport:"//span[text()='Support']",
        TicketSupport2:"//span[text()='Support']"

    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: This is a Click function to navigate to a CMS Reservation Event.
    async CMSReservationEventClick(){
        const ele = this.page.locator(this.CMS_page_elements.CMSReservationEvent)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Reservation | CMS Reservation Element Not Found : Error occured'+error)
       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Navigate to the Automation Event.

    async CMSEventClick(){
        const ele = this.page.locator(this.CMS_page_elements.AutomationEvent)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Reservation | Event | Event Element Not Found : Error occured'+error)
       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Navigate to the Ticketing Tab.
    async TicketingTabClick(){
        const ele = this.page.locator(this.CMS_page_elements.TicketingTab)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Reservation | Event | Ticketing Tab Element Not Found : Error occured'+error)
       
        }
    }
        // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Export CSV Button.
    async ExportCSVClick(){
        const ele = this.page.locator(this.CMS_page_elements.ExportCSVBTn)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Export CSV Button Element Not Found : Error occured'+error)
       
        }
    }

     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Import CSV Button.
    async ImportCSVClick(){
        const ele = this.page.locator(this.CMS_page_elements.ImportCSVBTN)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Import CSV Button Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the TimeZone Dropdown.
    async TimezoneDRpdwnClick(){
        const ele = this.page.locator(this.CMS_page_elements.TimeZoneDropdown)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Import CSV | Timezone Dropdown Element Not Found : Error occured'+error)
       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the TimeZone option from the Dropdown.
    async TimezoneoptionClick(){
        const ele = this.page.locator(this.CMS_page_elements.TimezoneOption)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Import CSV | Timezone Option Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Unix Times Checkbox.
    async UnixCheckboxClick(){
        const ele = this.page.locator(this.CMS_page_elements.UnixChecklbox)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Import CSV | Unix Checkbox Element Not Found : Error occured'+error)
       
        }
    }
      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Multi-Value Separator Dropdown.
    async MultiValueDRopdownClick(){
        const ele = this.page.locator(this.CMS_page_elements.MultiValueDropdown)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Import CSV | MultiValue Dropdown Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Multi-Value Separator Option.
    async MultiValueOptionClick(){
        const ele = this.page.locator(this.CMS_page_elements.MultiValueOption)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Import CSV | MultiValue option Element Not Found : Error occured'+error)
       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Select File Button.
    async SelectFileBtnClick(){
        const ele = this.page.locator(this.CMS_page_elements.SelectFileBtn)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Import CSV | Select File Button Element Not Found : Error occured'+error)
       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Parse Button.
    async ParseBtnClick(){
        const ele = this.page.locator(this.CMS_page_elements.ParseBTN)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Import CSV | Parse Button Element Not Found : Error occured'+error)
       
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Create Ticket Type Button.
    async CreateTicketTypeBtnClick(){
        const ele = this.page.locator(this.CMS_page_elements.CreateTicketType)
        try {
            await ele.click({force: true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing  | Create Ticket Type Button Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the Ticket Name Input Field.
    async InputTicketName(){
        const ele = this.page.locator(this.CMS_page_elements.TicketName)
        try {
            await ele.fill("Demo Ticket")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Ticket Name Input Field Element Not Found : Error occured'+error)
       
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the Ticket Name Input Field.
    async TicketSupport(){
        const ele = this.page.locator(this.CMS_page_elements.TicketSupport).isVisible()
        const ele2 = this.page.locator(this.CMS_page_elements.TicketSupport2)
        try {

            if (await ele==true) {

                ele2.click()
                
            }
            else{
                await this.page.waitForTimeout(1000)
            }
            
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Ticket Name Input Field Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the Description Input Field.
    async InputDescription(){
        const ele = this.page.locator(this.CMS_page_elements.Description)
        try {
            await ele.fill("This a dummy ticket description")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Description Input Field Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the Price Per Ticket Input Field.
    async InputPricePerTicket(){
        const ele = this.page.locator(this.CMS_page_elements.PricePerTicket)
        try {
            await ele.clear()
            await ele.fill("100")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Price Per Ticket Input Field Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click On the inventory dropdown.
    async InventoryDropdownClick(){
        const ele = this.page.locator(this.CMS_page_elements.InventoryDropdown)
        try {
            await ele.click({force:true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | The Inventory Dropdown Field Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click On the inventory Option.
    async InventoryOptionClick(){
        const ele = this.page.locator(this.CMS_page_elements.INventoryOption)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | The Inventory option Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the sale start date .
    async saleStartDateINput(){
        const ele = this.page.locator(this.CMS_page_elements.SaleStartDate)
        try {
            await ele.clear()
            await ele.fill("05/08/2023")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | The sale start date input Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the sale start time .
    async saleStartTimeINput(){
        const ele = this.page.locator(this.CMS_page_elements.SaleStartTime)
        try {
            await ele.fill("10.00 AM")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | The sale start time input Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the sale start Date .
    async saleEndsDateINput(){
        const ele = this.page.locator(this.CMS_page_elements.SaleEnddate)
        try {
            await ele.fill("06/09/2023")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | The sale end date input Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the sale end time .
    async saleEndTimeINput(){
        const ele = this.page.locator(this.CMS_page_elements.saleEndsTime)
        try {
            await ele.fill("10.00 AM")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | The sale end time input Element Not Found : Error occured'+error)
       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the minimum input field.
    async MinimumINput(){
        const ele = this.page.locator(this.CMS_page_elements.Minimum)
        try {
            await ele.fill("2")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | The Minimum input Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the maximum input field.
    async MaximumINput(){
        const ele = this.page.locator(this.CMS_page_elements.Maximum)
        try {
            await ele.fill("8")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | The Maximum input Element Not Found : Error occured'+error)
       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the maximum input field.
    async SellInGroupINput(){
        const ele = this.page.locator(this.CMS_page_elements.SellInGroup)
        try {
            await ele.fill("8")
            await this.page.waitForTimeout(6000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | The Sell In Group input Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the require password checkbox.
    async RequirePassword(){
        const ele = this.page.locator(this.CMS_page_elements.RequirePassword)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | The Require Password Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the show advance setting.
    async ClickAdvanceSetting(){
        const ele = this.page.locator(this.CMS_page_elements.ShowAdvanceSetting)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Show Advance Settings Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Password Bank.
    async ClickPasswordBank(){
        const ele = this.page.locator(this.CMS_page_elements.PasswordBank)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Password Bank Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Save Button.
    async ClickSaveBtn(){
        const ele = this.page.locator(this.CMS_page_elements.SaveBTn).first()
        try {
            await ele.click()
            await this.page.waitForTimeout(200)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Save Button Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Create New.
    async ClickCreateNewBtn(){
        const ele = this.page.locator(this.CMS_page_elements.CreateNew)
        try {
            await ele.click()
            await this.page.waitForTimeout(5000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Create New Button Element Not Found : Error occured'+error)
       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill The Inventory Name.
    async InputInventoryName(){
        const ele = this.page.locator(this.CMS_page_elements.InventoryName)
        try {
            await ele.fill("Dummy Inventory")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Inventory Name Input Element Not Found : Error occured'+error)
       
        }
    }
      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill The Inventory Quantity.
    async InputInventoryQuantity(){
        const ele = this.page.locator(this.CMS_page_elements.InventoryQuantity)
        try {
            await ele.fill("50")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Inventory Quantity Input Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Save Inventory.
    async ClickSaveInventoryBtn(){
        const ele = this.page.locator(this.CMS_page_elements.SaveInventory)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Save Inventory Element Not Found : Error occured'+error)
       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Close modal button.
    async ClickCloseBtn(){
        const ele = this.page.locator(this.CMS_page_elements.InventoryClose)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Close modal Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Password Input on the password input field.
    async InputPassword(){
        const ele = this.page.locator(this.CMS_page_elements.Password)
        try {
            await ele.fill("Random")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Password Input Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Verify the created ticket type is visible.
    async VisibilityOfCreatedTicketType(){
        const ele = this.page.locator(this.CMS_page_elements.CreatedTicketType)
        try {
            await ele.isVisible()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Created Ticket Type Element Not Found : Error occured'+error)
       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Inventory Navigation Button.
    async inventoryBtnClick(){
        const ele = this.page.locator(this.CMS_page_elements.NavigateInventory)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Inventory Button Element Not Found : Error occured'+error)
       
        }
    }
      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the Create Inventory Button.
    async createInventoryBtnClick(){
        const ele = this.page.locator(this.CMS_page_elements.CreateInventory)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Create Inventory Button Element Not Found : Error occured'+error)
       
        }
    }
       // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the inventory name input field.
    async inventoryNameInput(){
        const ele = this.page.locator(this.CMS_page_elements.InventoryNameinput)
        try {
            await ele.fill("Demo Inventory Name")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Inventory Name Input Element Not Found : Error occured'+error)
       
        }
    }
       // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the inventory capacity input field.
    async inventoryCapacityInput(){
        const ele = this.page.locator(this.CMS_page_elements.CapacityInput)
        try {
            await ele.clear()
            await ele.fill("5")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Inventory Capacity Input Element Not Found : Error occured'+error)
       
        }
    }
        // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the Name input field.
    async NameInput(){
        const ele = this.page.locator(this.CMS_page_elements.Name)
        try {
            await ele.clear()
            await ele.fill("Demo name")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Name Input Element Not Found : Error occured'+error)
       
        }
    }
        // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the total input field.
    async TotalInput(){
        const ele = this.page.locator(this.CMS_page_elements.Total)
        try {
            await ele.clear()
            await ele.fill("5")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Total Input Element Not Found : Error occured'+error)
       
        }
    }
        // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click on the save button.
    async ClickonTheSaveBtn(){
        const ele = this.page.locator(this.CMS_page_elements.SaveBtn)
        try {
            
            await ele.click()
            await this.page.waitForTimeout(20000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Save Button Element Not Found : Error occured'+error)
       
        }
    }
      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Verify the created Inventory.
    async VerifyCreatedInventoryIsvisible(){
        const ele = this.page.locator(this.CMS_page_elements.CreatedInventory)
        try {
            
            await ele.isVisible()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Created Inventory Element Not Found : Error occured'+error)
       
        }
    }
      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click On the actions.
    async ClickActions(){
        const ele = this.page.locator(this.CMS_page_elements.Actions).last()
        try {
            
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Actions Element Not Found : Error occured'+error)
       
        }
    }


       // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click On the actions.
    async ClickActionsForDelete(){
        const ele = this.page.locator(this.CMS_page_elements.ClickActionsForDelete).first()
        try {
            
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Actions Element Not Found : Error occured'+error)
       
        }
    }
      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click On the Edit Details.
    async ClickEditActions(){
        const ele = this.page.locator(this.CMS_page_elements.EditDetails)
        try {
            
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Edit Actions Element Not Found : Error occured'+error)
       
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the inventory name input field.
    async inventoryNameInputEdit(){
        const ele = this.page.locator(this.CMS_page_elements.InventoryNameinput)
        try {
            await ele.fill("Demo Inventory Names")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Inventory Name Input Element Not Found : Error occured'+error)
       
        }
    }
      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click On the Delete Inventory.
    async ClickDeeleteInventory(){
        const ele = this.page.locator(this.CMS_page_elements.DeleteInventory)
        try {
            
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type |  Delete Actions Element Not Found : Error occured'+error)
       
        }
    }
      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click On the yes button from the Delete Modal.
    async ClickYes(){
        const ele = this.page.locator(this.CMS_page_elements.Yes)
        try {
            
            await ele.dblclick({force : true})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Yes Element Not Found : Error occured'+error)
       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Fill the Ticket Name Input Field.
    async InputTicketNameEdit(){
        const ele = this.page.locator(this.CMS_page_elements.TicketName)
        try {
            await ele.fill("Demo Tickets")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type | Ticket Name Input Field Element Not Found : Error occured'+error)
       
        }
    }

      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Click On the Delete Created Ticket.
    async ClickDeeleteTickeType(){
        const ele = this.page.locator(this.CMS_page_elements.deleteTicketType)
        try {
            
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error('Aloompa|admin | Ticketing | Create Ticket Type |  Delete Actions Element Not Found : Error occured'+error)
       
        }
    }

    
}