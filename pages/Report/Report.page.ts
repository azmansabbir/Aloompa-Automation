import { expect, Page } from "@playwright/test";
import { existsSync } from "fs";

export default class Report {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }



    private Report_page_elements = {
        three_by_three_grid:"(//div)[11]",
        Reservation_Navigation:"//img[@src='/images/reservations-menu-item.png']",
        CMSSelection:"//a[contains(text(),'2023 Coachella Festival Store')]",
        searchBox:"//input[@placeholder='Search for an app...']",
        ReportsBTN:"//span[text()='Reports']",
        TicketsCountTab:"//button[@title='Ticket Counts (w/ Fees)']",
        ExportCustomData:"//input[@type='checkbox']",
        TicketsCountViewMenue:"//div[contains(@class,'MuiSelect-root jss3355')]",
        ViewAll:"//p[text()='View All']",
        TicketsCountExportCSV:"//span[text()='Export CSV']",
        ExportPDF:"//span[text()='Export PDF']",
        TicketCountWithoutFees:"//button[@title='Ticket Counts (w/o Fees)']",
        Event_Audit:"//button[@title='Event Audit']",
        EventDRopdown:"//p[text()='Select Event']",
        EventSlection:"//li[@data-value='28f09dec-3d7f-40ec-a23f-8b2cebe6f89e']//p[1]",
        SalesByDate:"//button[@title='Sales by Date']",
        TransectionDetails:"//button[@title='Transaction Details']",
        ShowFilter:"//span[text()='+ Show Filter Options']",
        ClearAllFilter:"//span[text()='Clear All Filters']",
        MaeketingReport:"//button[@title='Marketing Report']",
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicking menu button on "2023 UniDev Test 0001"
    async click_on_3_by_3_grid(){
        const ele=this.page.locator(this.Report_page_elements.three_by_three_grid)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Three dot element not found, click failed|  Error occured: '+error)       
        }
    }
    
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the reservation button"
    async click_on_the_Reservation(){
       
        const ele = this.page.locator(this.Report_page_elements.Reservation_Navigation)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Reservation element not found, click failed|  Error occured: '+error)       
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Searched CMS"
    async CMS_Selection(){
        const ele = this.page.locator(this.Report_page_elements.CMSSelection)
        try {
            await this.page.waitForTimeout(3000)
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | CMS element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the search input field"
    async Input_Search(){
        const ele = this.page.locator(this.Report_page_elements.searchBox)
        try {
            await this.page.waitForTimeout(3000)
            await this.page.waitForTimeout(3000)
            await ele.fill("2023 Coachella Festival Store")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Search box element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Reports Button"
    async Reports_Click(){
        const ele = this.page.locator(this.Report_page_elements.ReportsBTN)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Reports Button element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Tickets Count Tab Button"
    async TicketsCount_Click(){
        const ele = this.page.locator(this.Report_page_elements.TicketsCountTab)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Tickets Count Button element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Export Custom data checkbox"
    async ExportCustomData_Click(){
        const ele = this.page.locator(this.Report_page_elements.ExportCustomData)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Export Custom Data Checkbox element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Page Size Dropdown"
    async PageSize_Click(){
        const ele = this.page.locator(this.Report_page_elements.TicketsCountViewMenue)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Page Size dropdown element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Page Size Dropdown"
    async ViewAll_Click(){
        const ele = this.page.locator(this.Report_page_elements.ViewAll)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | View All Option from the dropdown element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Export CSV Button"
    async ExportCSV_Click(){
        const ele = this.page.locator(this.Report_page_elements.TicketsCountExportCSV)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Export CSV button element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Export PDF Button"
    async ExportPDF_Click(){
        const ele = this.page.locator(this.Report_page_elements.ExportPDF)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Export PDF Button element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Tickets Count without Fees"
    async TicketsCountWithoutFees_Click(){
        const ele = this.page.locator(this.Report_page_elements.TicketCountWithoutFees)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Tickets Count Without Fees Button element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Event Audit Click"
    async EventAudit_Click(){
        const ele = this.page.locator(this.Report_page_elements.Event_Audit)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Event Audit Button element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Event Dropdown Click"
    async Eventdropdown_Click(){
        const ele = this.page.locator(this.Report_page_elements.EventDRopdown)
        try {
            await this.page.waitForTimeout(2000)
            await ele.click({force: true})
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Event Dropdownelement not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Event Click"
    async Eventoption_Click(){
        const ele = this.page.locator(this.Report_page_elements.EventSlection)
        try {
            await this.page.waitForTimeout(3000)
            await ele.dblclick()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Event element not found, click failed|  Error occured: '+error)       
        }

    }
        // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Sales By Date Click"
    async SalesByDate_Click(){
        const ele = this.page.locator(this.Report_page_elements.SalesByDate)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Sales By Date Button element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Transaction Details Click"
    async TransactionDetails_Click(){
        const ele = this.page.locator(this.Report_page_elements.TransectionDetails)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Transaction Details Button element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Show Filter options hyperlink text Click"
    async ShowFilterOptions_Click(){
        const ele = this.page.locator(this.Report_page_elements.ShowFilter)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Show Filter options hyperlink text element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Clear Filter hyperlink text Click"
    async ClearAllFilter_Click(){
        const ele = this.page.locator(this.Report_page_elements.ClearAllFilter)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Clear Filter hyperlink text element not found, click failed|  Error occured: '+error)       
        }

    }
    // Module Name: Aloompa | Admin
    // Feature Name: Mobile App
    // Screen Type: Desktop
    // Description: Clicking on the Marketing Report Button Click"
    async MarketingReport_Click(){
        const ele = this.page.locator(this.Report_page_elements.MaeketingReport)
        try {
            await this.page.waitForTimeout(3000)
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Aloompa|admin | Apps directory | Marketing Report Button element not found, click failed|  Error occured: '+error)       
        }

    }
    
}