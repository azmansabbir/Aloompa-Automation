import { expect, Page } from "@playwright/test";

export default class SettingsPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }

    private settings_page_elements = {
        settings_navigator: '//a[@title="Settings"]',
        store_settings: '//a[@title="Store Settings"]',
        radio_element: '//input[@type="radio"]',
        save_button: '//span[text()="Save"]//parent::span//parent::button',
        create_new_category_button: '//span[text()="+ Create new category"]//parent::span//parent::button',
        create_new_category_header: '//div[text()="Create New Category"]',
        category_name: '//input[@class="MuiInputBase-input MuiOutlinedInput-input"]',
        remove_image_ele: '//span[text()="Remove Image"]',
        yes_radio_button: '//span[text()="Yes"]//preceding-sibling::span//input',
        no_radio_button: '//span[text()="No"]//preceding-sibling::span//input',
        confirm_delete_button: '//span[text()="Delete"]//parent::span//parent::button',
        Landing_PAGE_Checkbox: "(//label[text()='Landing Page']/following::input)[1]",
        Cart_timer: "(//label[text()='Cart Timer (in minutes)']/following::input)[1]",
        Create_new_Fee_button: "//span[text()='+ Create New Fee']",
        Fee_name: "(//span[text()='Tax']/following::input)[1]",
        fee_Amount: "//input[@max='100']",
        Apply_Fee: "(//label[text()='Tax Exempt']/following::input)[1]",
        Save_fee: "//span[text()='Save']",
        Edit_Created_Fee: "(//span[text()='Edit'])[2]",
        EventZone: "//p[text()='Select One']",
        TiemZone: "//li[@data-value='America/Antigua']",
        Store_Currency: "//li[@data-value='USD']//p[1]",
        Store_Currency_Dropdown: "//p[text()='USD']",
        Store_Country: "//p[text()='United States']",
        Store_Country_US: "//li[@data-value='US']//p[1]",
        Password_Protection_Checkboix: "(//label[text()='Password Protection']/following::input)[1]",
        Access_ticket_Message: "(//label[text()='Access Tickets Message']/following::input)[1]",
        Copy_link: "//span[text()='Copy Link']",
        SAVE: "(//button[@data-testid='button']//span)[1]",
        SquareINNav: "//a[.='Square Integration']",
        Integrateradio: "//input[@value='true']",
        Disable: "//input[@value='false']",
        SquareAppID: "(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[1]",
        squareaccesstoken: "(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[2]",
        squareLocation: "(//input[@class='MuiInputBase-input MuiOutlinedInput-input'])[3]",
        sandbocchkbx: "//input[@type='checkbox']",
        SaveBTnSquare: "(//button[@data-testid='button']//span)[1]",
        AuthorizedBtn: "//span[text()='Authorize With Square']",
        PrivacypolicyNav: "//a[.='Privacy Policies']",
        SMS_Input: "(//label[text()='SMS Disclaimer']/following::textarea)[1]",
        Purchase_INput: "//label[text()='Purchase Disclaimer']/following::textarea",
        Privacy_policy_input: "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]",
        Privacy_FontUpload: "(//span[text()='Upload Your Own Font'])[1]",
        Terms_input: "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]",
        Terms_FontUpload: "(//span[text()='Upload Your Own Font'])[2]",
        SaveBTNPri: "(//span[text()='Save'])[2]",
        MessagingNav: "//a[.='Messaging']",
        SignupGMSG: "(//label[text()='Sign Up Greeting']/following::textarea)[1]",
        OrderCompleteMSg: "(//label[text()='Order Complete']/following::textarea)[1]",
        OrderConfirmation: "(//label[text()='Order Confirmation Email Subject']/following::input)[1]",
        OrderConfirnEmailb: "//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
        uploadyourownfont: "//span[text()='Upload Your Own Font']",
        Order_Confirmationmsg: "//label[text()='Order Confirmation SMS Message']/following::textarea",
        MSG_SAve: "(//span[text()='Save'])[2]",
        TranslationMAv: "//a[.='Translations']",
        Lannguagedrpdwn: "//p[text()='English (en)']",
        EngSelect: "(//p[text()='English (en)'])[2]",
        Store_Data: "//p[text()='Store Details']",
        Events: "(//div[@class='MuiExpansionPanelSummary-content'])[1]",
        Browse_Evnt: "//input[@placeholder='Explore All Events']",
        All_Events:"//input[@placeholder='All Events']",
        SearchEvent_Placeholder:"//input[@placeholder='Search events by name or venue']",
        Select_Category: "//input[@placeholder='Select Category']",
        Get_Tickets: "//input[@placeholder='Get Tickets']",
        About: "//input[@placeholder='About']",
        Free: "//input[@placeholder='FREE']",
        Tickets: "(//h2[text()='Tickets'])[1]",
        My_tickets: "//input[@placeholder='Ticket']",
        NoTick_Msg: "(//label[text()='No Tickets Message']/following::input)[1]",
        TicketsInput: "//input[@placeholder='Tickets']",
        Order: "//input[@placeholder='ORDER']",
        Name: "//input[@placeholder='NAME']",
        Select_Tick:"//input[@placeholder='Select Tickets']",
        Sales_closed:"//input[@placeholder='SALE CLOSED']",
        Not_Available:"//input[@placeholder='NOT AVAILABLE']",
        Coming_Soon:"//input[@placeholder='COMING SOON']",
        SoldOUt:"//input[@placeholder='SOLD OUT']",
        Addtocart:"//input[@placeholder='Add to Cart']", 
        Accounts: "(//h2[text()='Account'])[1]",
        Account_input: "//input[@placeholder='Account']",
        Account_Info: "//input[@placeholder='Account Information']",
        Update: "//input[@placeholder='Update']",
        First_Name: "//input[@placeholder='First Name']",
        LName: "//input[@placeholder='Last Name']",
        Email: "//input[@placeholder='Email']",
        MNum: "//input[@placeholder='Mobile Number']",
        Ship_Add: "//input[@placeholder='Shipping Address']",
        Address1: "//input[@placeholder='Address 1']",
        City: "//input[@placeholder='City']",
        State: "//input[@placeholder='State']",
        Postal: "//input[@placeholder='Postal']",
        Shipping_info: "//input[@placeholder='Shipping Information']",
        Order_placed_on: "//input[@placeholder='Order placed on']",
        confirmation_Sent: "//input[@placeholder='Confirmation sent to']",
        cart:"//h2[text()='Cart']",
        Cart_Input:"//input[@placeholder='Cart']",
        Empty_Cart_MSG:"//input[@placeholder='Your cart is currently empty']",
        Add_to_cart:"//input[@placeholder='Add to Cart']",
        TicketsAddedTCart:"//input[@placeholder='Tickets Added To Cart']",
        tickets_Added_To_cart:"//input[@placeholder='Tickets Added To Cart']",
        MAXEventickreached:"//input[@placeholder='You have reached the maximum number of tickets available for this event']",
        MAXInventory:"//input[@placeholder='You have reached the meaximum number of tickets available for this inventory']",
        Complete_Order:"//input[@placeholder='Complete Order']",
        Subtotal:"//input[@placeholder='Subtotal']",
        Fees:"//input[@placeholder='Fees']",
        Total:"//input[@placeholder='Total']",
        Navigation_Drpdwn:"//p[text()='Navigation']",
        general:"//h2[normalize-space()='General']",
        Explore_event:"//input[@placeholder='Browse Events']",
        SeeAll:"//input[@placeholder='See All']",
        Keep_Browsing:"//input[@placeholder='Keep Browsing']",
        continue_To_Chkout:"//input[@placeholder='Continue To Checkout']",
        Cancel:"//input[@placeholder='Cancel']",
        Save_Transition:"(//span[text()='Save Translations'])[2]",
        CategorySAveBTN:"//span[text()='Save']",
        Import_CSV:"//span[text()='Import CSV']",
        Export_CSV:"//span[text()='Export CSV']",
        Ticket_Range:"//input[@value='Tickets Range']",
        category_image:"(//span[text()='Click here']/following::input)[1]"

    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: Clicks on settings on top left corner

    async click_settings() {
        const ele = this.page.locator(this.settings_page_elements.settings_navigator).first()
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  settings page element not found at top, click failed|  Error occured: ' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: clicks on store settings on left panel

    async click_store_settings() {
        const ele = this.page.locator(this.settings_page_elements.store_settings)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  store settings page element not found at left, click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check open button in radio

    async check_radio_button_open() {
        const ele = this.page.locator(this.settings_page_elements.radio_element).nth(1)
        const savebutton = this.page.locator(this.settings_page_elements.save_button)
        try {
            if (!await ele.isChecked()) {
                await ele.check()
                await savebutton.click()
            }

        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  store settings page element not found at left, click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: check open button in radio

    async check_radio_button_close() {
        const ele = this.page.locator(this.settings_page_elements.radio_element).nth(1)
        const savebutton = this.page.locator(this.settings_page_elements.save_button)

        try {
            if (!await ele.isChecked()) {
                await ele.check()
                await savebutton.click()
            }

        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  close radio button is missing |  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Mobile page
    // Description: checks wheather the events are opened in page

    async check_if_mobile_page_is_open() {
        const ele = this.page.locator('//input[@placeholder="Email"]')
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  store open page not correct |  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Mobile page
    // Description: checks wheather the events are opened in page

    async check_if_mobile_page_is_close() {
        const ele = this.page.locator('//p[text()="The store will open soon"]')
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | mobile page |"The store will open soon"|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: click on new category
    async click_new_category() {
        const ele = this.page.locator(this.settings_page_elements.create_new_category_button)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('Aloompa|admin | settings page |  create new category button click failed|  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: check create new category popup


    async check_create_new_category_popup() {
        const ele = this.page.locator(this.settings_page_elements.create_new_category_header)
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('Aloompa|admin | settings page | create new category header element missing |  Error occured: ' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: input category name in check create new category popup

    async input_category_name(value: string) {
        const ele = this.page.locator(this.settings_page_elements.category_name).nth(0)
        try {
            await ele.type(value, { delay: 300 })
        } catch (error) {
            throw new Error('Aloompa | admin | settings page | category name input element missing |  Error occured: ' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: uploads a image file


    // async upload_image() {
    //     // const filePath0 = `testData/images/${value}`
    //     // const [fileChooser] = await Promise.all([
    //     //     // It is important to call waitForEvent before click to set up waiting.
    //     //     //this.page.waitForEvent('fileInput'),
    //     //     // Opens the file chooser.
    //     //     this.page.locator("//input[@data-testid='fileInput']").click()
    //     // ]);
    //     // await fileChooser.setFiles([filePath0]);
    //     await this.page.setInputFiles("//input[@data-testid='fileInput']",'F:/Aloompa_UI_automation/testData/images/9_16_output_test.jpg')
    //     await this.page.waitForTimeout(3000)
    // }


    //  // Module Name: Aloompa | Admin
    // // Feature Name: LiveOrder&reservations
    // // Screen Type: Desktop
    // // Description: file_uploader_for_splash_page_logo_file
    // async upload_image(value:string) {
    //     const filePath0 = `testData/images/${value}`
    //     const [fileChooser] = await Promise.all([
    //       // It is important to call waitForEvent before click to set up waiting.
    //       this.page.waitForEvent('filechooser'),
    //       // Opens the file chooser.
    //       this.page.locator(this.settings_page_elements.category_image).click()
            
    //     ]);

    //     this.page.locator(this.settings_page_elements.category_image).click()
    //     await fileChooser.setFiles([filePath0]);
        
        
    //   }



      // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop
    // Description: file_uploader_category_image_file
    async upload_image(value:string) {
        const filePath0 = `testData/images/${value}`
        const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.locator(this.settings_page_elements.category_image).click(),
          this.page.locator(this.settings_page_elements.category_image).click()
        
        ]);
        const ele=this.page.locator(this.settings_page_elements.category_image)
        ele.scrollIntoViewIfNeeded()
        ele.click()
        await fileChooser.setFiles([filePath0]);
        
        
      }






    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: wait for image upload to complete

    async wait_for_image_upload() {
        const ele = this.page.locator(this.settings_page_elements.remove_image_ele)
        try {
            await expect.soft(ele).toBeVisible()
            await this.page.waitForTimeout(30000)
        } catch (error) {
            throw new Error('Image upload not worked properly, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: select category enabled yesh

    async select_category_enabled_yesh() {
        const ele = this.page.locator(this.settings_page_elements.yes_radio_button)
        try {
            
                await ele.check()
            }
        catch (error) {
            throw new Error('select yesh in category enabled section failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: select category enabled no

    async select_category_enabled_no() {
        const ele = this.page.locator(this.settings_page_elements.no_radio_button)
        try {
            if (!await ele.isChecked()) {
                await ele.check()
            }
        } catch (error) {
            throw new Error('select no in category enable section failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: checks if the newly added category is visible

    async check_the_newly_added_category() {
        const ele = this.page.locator(`//div[text()='Test category for automation']`)
        try {
            await expect.soft(ele).toBeVisible()
        } catch (error) {
            throw new Error('newly added category is not visible properly with the desired name, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: clicks on the settings for newly added category
    async click_settings_for_event_category_names(value: string) {
        const ele = this.page.locator(`//div[text()="${value}"]//following-sibling::button//img[@data-testid="settings-blueIcon"]`)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('click on newly added category settings failed, error occured' + error)

        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: clicks on the delete for newly added category
    async click_delete_for_event_category_names(value: string) {
        const ele = this.page.locator(`//div[text()="${value}"]//following-sibling::button//img[@data-testid="trash-blueIcon"]`)
        try {
            await ele.click()
        } catch (error) {
            throw new Error('clicks on the delete for newly added category failed, error occured' + error)

        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: clicks on the delete for newly added category

    async click_confirm_delete_button() {
        const ele = this.page.locator(this.settings_page_elements.confirm_delete_button)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('click on confirm delete button delete failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: clicks on the Landing Page checkbox    
    async click_Landing_Page_Checkbox() {
        const ele = this.page.locator(this.settings_page_elements.Landing_PAGE_Checkbox)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('click on the lkanding page checkbox is failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Input on the cart timer input field  
    async cart_Timer_Input() {
        const ele = this.page.locator(this.settings_page_elements.Cart_timer)
        try {
            await ele.clear()
            await ele.fill("10")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Cart timer input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new hyperlink text click  
    async Create_New_fee_Click() {
        const ele = this.page.locator(this.settings_page_elements.Create_new_Fee_button)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Create new fee hyperlink text click failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new fee name input 
    async FeeNameInput() {
        const ele = this.page.locator(this.settings_page_elements.Fee_name)
        try {
            await ele.fill("Test fee")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Fee name input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new fee amount input 
    async FeeAmountInput() {
        const ele = this.page.locator(this.settings_page_elements.fee_Amount)
        try {
            await ele.fill("10")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Fee Amount input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new fee Apply fee checkbox click 
    async ApplyFee() {
        const ele = this.page.locator(this.settings_page_elements.Apply_Fee)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Apply fee checkbox click failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new fee save click 
    async SaveFeeClick() {
        const ele = this.page.locator(this.settings_page_elements.Save_fee)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Save button click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Created new fee edit button click 
    async EditFeeClick() {
        const ele = this.page.locator(this.settings_page_elements.Edit_Created_Fee)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Save button click failed, error occured' + error)
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Create new fee name input edit
    async EditFeeNameInput() {
        const ele = this.page.locator(this.settings_page_elements.Fee_name)
        try {
            await ele.fill("Test fees")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Fee name input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Event time zone dropdown click
    async EventTimeZoneDropdownClick() {
        const ele = this.page.locator(this.settings_page_elements.EventZone)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('event Time zone click failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Event time zone click
    async EventTimeZoneClick() {
        const ele = this.page.locator(this.settings_page_elements.TiemZone)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('event Time zone click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Store Currency dropdown click
    async StoreCurrencyDropdownClick() {
        const ele = this.page.locator(this.settings_page_elements.Store_Currency_Dropdown)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Store currency dropdown click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Store Currency dropdown click
    async StoreCurrencyClick() {
        const ele = this.page.locator(this.settings_page_elements.Store_Currency)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Store currencyclick failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Store Country dropdown click
    async StoreCountryDRopdownClick() {
        const ele = this.page.locator(this.settings_page_elements.Store_Country)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Store Country dropdown click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Store Country click from the dropdown
    async StoreCountryClick() {
        const ele = this.page.locator(this.settings_page_elements.Store_Country_US)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Store Country click from the dropdown click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Password protection checkbox click
    async PasswordProtectionClick() {
        const ele = this.page.locator(this.settings_page_elements.Password_Protection_Checkboix)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Password protection checkbox click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Access Tickets message input
    async AccessTicketsMessageInput() {
        const ele = this.page.locator(this.settings_page_elements.Access_ticket_Message)
        try {
            await ele.fill("Test Message")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Access Tickets message input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Copy Link Click
    async CopyLinkClick() {
        const ele = this.page.locator(this.settings_page_elements.Copy_link)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Copy Link Click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Save Button Click
    async SaveClick() {
        const ele = this.page.locator(this.settings_page_elements.SAVE)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Save Button Click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Square integration Button Click from the navigation panel
    async SquareIntegrationNavClick() {
        const ele = this.page.locator(this.settings_page_elements.SquareINNav)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Square Integration Button from the navigation panel Click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Integrate Radio Button Click
    async Integrate_Click() {
        const ele = this.page.locator(this.settings_page_elements.Integrateradio)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Integrate Radio Button Click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Disable Radio Button Click
    async Disable_Click() {
        const ele = this.page.locator(this.settings_page_elements.Disable)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Disable Radio Button Click failed, error occured' + error)
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Square Application Id Input
    async SquareAppId_Input() {
        const ele = this.page.locator(this.settings_page_elements.SquareAppID)
        try {
            await ele.fill("sq0idp-Ht33cWQBJStbcxAvd7om3A")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Square Application Id Input failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Square access token input
    async SquareAccessTKN_Input() {
        const ele = this.page.locator(this.settings_page_elements.squareaccesstoken)
        try {
            await ele.fill("EAAAEb8TeDExHMdfc34Tc0N0_-FT8kUReEVKGiibefcxD3MK9GixSILL2ga5kcNf")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Square access token input failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Square Location ID input
    async SquareLocationID_Input() {
        const ele = this.page.locator(this.settings_page_elements.squareLocation)
        try {
            await ele.fill("L1HD6NZMH4MBN")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Square Location ID input failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Use in sandbox checkbox click
    async SandBoxCheckbox_Click() {
        const ele = this.page.locator(this.settings_page_elements.sandbocchkbx)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Use in sandbox checkbox click failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Save button click
    async Save_Click() {
        const ele = this.page.locator(this.settings_page_elements.SaveBTnSquare)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Save button click failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Authorized button click
    async Authirized_Click() {
        const ele = this.page.locator(this.settings_page_elements.AuthorizedBtn)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Authorized button click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Privacy policy button click from the navigation side bar
    async Privacypolicy_Click() {
        const ele = this.page.locator(this.settings_page_elements.PrivacypolicyNav)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Privacy policy button click from the navigation side bar click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Fill the SMS Desclaimer input field
    async SMS_Input() {
        const ele = this.page.locator(this.settings_page_elements.SMS_Input)
        try {
            await ele.fill("Test SMS For Automation")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('SMS Desclaimer input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Fill the Purchase Desclaimer input field
    async Purchase_Input() {
        const ele = this.page.locator(this.settings_page_elements.Purchase_INput)
        try {
            await ele.fill("Test SMS For Automation")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Purchase Desclaimer input failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Fill the Privacy Policy input field
    async Privacy_Policy_Input() {
        const ele = this.page.locator(this.settings_page_elements.Privacy_policy_input)
        try {
            await ele.fill(" ")
            await ele.fill("Test SMS For Automation")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Privacy Policy input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the privacy policy upload your own font Button
    async Privacy_Policy_Font_Upload_Click() {
        const ele = this.page.locator(this.settings_page_elements.Privacy_FontUpload)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('privacy policy upload your own font Button click failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Fill the Terms and Condition input field
    async TermsandCondition_Input() {
        const ele = this.page.locator(this.settings_page_elements.Terms_input)
        try {
            await ele.fill(" ")
            await ele.fill("Test SMS For Automation")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Terms and Condition input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the privacy policy upload your own font Button
    async Terms_Font_Upload_Click() {
        const ele = this.page.locator(this.settings_page_elements.Terms_FontUpload)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('privacy policy upload your own font Button click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the Save Button
    async PrivacySave_Click() {
        const ele = this.page.locator(this.settings_page_elements.SaveBTNPri)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Save Button click failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the Messaging button from the nav side panel
    async Messaging_Click() {
        const ele = this.page.locator(this.settings_page_elements.MessagingNav)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Messaging Button click failed from the navigation panel, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Sign up Greeting Messaging Input
    async GreeetingMsg_Input() {
        const ele = this.page.locator(this.settings_page_elements.SignupGMSG)
        try {
            await ele.clear()
            await ele.fill("Test Greeting msg")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Sign up Greeting Messaging Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Sign up Order complete Messaging Input
    async OrderCompleteMsg_Input() {
        const ele = this.page.locator(this.settings_page_elements.OrderCompleteMSg)
        try {
            await ele.clear()
            await ele.fill("Test Greeting msg")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Order complete Messaging Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Sign up Order confirmation email subject Input
    async OrderConfirmation_Input() {
        const ele = this.page.locator(this.settings_page_elements.OrderConfirmation)
        try {
            await ele.clear()
            await ele.fill("Test Greeting msg")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Order confirmation email subject failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Order ConfirmationEmailBody Input
    async OrderConfirmation_Email_Body_Input() {
        const ele = this.page.locator(this.settings_page_elements.OrderConfirnEmailb)
        try {
            await ele.clear()
            await ele.fill("Test Greeting msg")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Order ConfirmationEmailBody Input failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Upload your own font click
    async Upload_Your_font_Click() {
        const ele = this.page.locator(this.settings_page_elements.uploadyourownfont)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Upload your own font click failed, error occured' + error)
        }
    }



    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Order Confirmation Message Input
    async OrderConfirmation_MSG_Input() {
        const ele = this.page.locator(this.settings_page_elements.Order_Confirmationmsg)
        try {
            await ele.clear()
            await ele.fill("Test Greeting msg")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Order Confirmation Message Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the Save Button
    async MSGSave_Click() {
        const ele = this.page.locator(this.settings_page_elements.MSG_SAve)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Save Button click failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the Translation Button from the navigation panel
    async TransLation_Click() {
        const ele = this.page.locator(this.settings_page_elements.TranslationMAv)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Translation Button click failed from the nav panel, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the language dropdown
    async Language_drpdwn_Click() {
        const ele = this.page.locator(this.settings_page_elements.Lannguagedrpdwn)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('language dropdown click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the option from language dropdown
    async Select_Eng() {
        const ele = this.page.locator(this.settings_page_elements.EngSelect)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('language dropdown option click failed, error occured' + error)
        }
    }


    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the store data
    async Store_Data_Click() {
        const ele = this.page.locator(this.settings_page_elements.Store_Data)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Store data click failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the Events
    async Events_Click() {
        const ele = this.page.locator(this.settings_page_elements.Events)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Events click failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Browse Events Input
    async BrowseEvents_Input() {
        const ele = this.page.locator(this.settings_page_elements.Browse_Evnt)
        try {
            await ele.clear()
            await ele.fill("Explore All Events")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Browse Events Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: All Events Input
    async AllEvents_Input() {
        const ele = this.page.locator(this.settings_page_elements.All_Events)
        try {
            await ele.clear()
            await ele.fill("All Events")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('All Events Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Search Event Placeholder Input
    async Searchevent_Input() {
        const ele = this.page.locator(this.settings_page_elements.SearchEvent_Placeholder)
        try {
            await ele.clear()
            await ele.fill("All Events")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Search Event Placeholder Input failed, error occured' + error)
        }
    }
    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Select Category Input
    async Select_Category_Input() {
        const ele = this.page.locator(this.settings_page_elements.Select_Category)
        try {
            await ele.clear()
            await ele.fill("Select Category")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Select Category Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Get Tickets Input
    async Get_tickets_Input() {
        const ele = this.page.locator(this.settings_page_elements.Get_Tickets)
        try {
            await ele.clear()
            await ele.fill("Get Tickets")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Get Tickets Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description:Ticket Range Input
    async Ticket_Range_Input() {
        const ele = this.page.locator(this.settings_page_elements.Ticket_Range)
        try {
            await ele.clear()
            await ele.fill("Ticket Range")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Ticket range Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: About Input
    async About_Input() {
        const ele = this.page.locator(this.settings_page_elements.About)
        try {
            await ele.clear()
            await ele.fill("About")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('About Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Free Input
    async Free_Input() {
        const ele = this.page.locator(this.settings_page_elements.Free)
        try {
            await ele.clear()
            await ele.fill("Free")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Free Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the Tickets
    async Tickets_Click() {
        const ele = this.page.locator(this.settings_page_elements.Tickets)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Tickets click failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: My Tickets Input
    async Ticket_Input() {
        const ele = this.page.locator(this.settings_page_elements.My_tickets)
        try {
            await ele.clear()
            await ele.fill("My Tickets")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('My Tickets Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: No Tickets Message Input
    async No_TicketMsg_Input() {
        const ele = this.page.locator(this.settings_page_elements.NoTick_Msg)
        try {
            await ele.clear()
            await ele.fill("You Don't Have Any Tickets Yet")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('No Tickets Message Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Tickets Input
    async Tickets_Input() {
        const ele = this.page.locator(this.settings_page_elements.NoTick_Msg)
        try {
            await ele.clear()
            await ele.fill("Tickets")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Tickets Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Order Input
    async Order_Input() {
        const ele = this.page.locator(this.settings_page_elements.Order)
        try {
            await ele.clear()
            await ele.fill("Order")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Oeder Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: NAME Input
    async Name_Input() {
        const ele = this.page.locator(this.settings_page_elements.Name)
        try {
            await ele.clear()
            await ele.fill("NAME")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('NAME Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Select Tickets Input
    async SelectTickets_Input() {
        const ele = this.page.locator(this.settings_page_elements.Select_Tick)
        try {
            await ele.clear()
            await ele.fill("Select Tickets")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Select Tickets Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Sales Closed Input
    async SalesClosd_Input() {
        const ele = this.page.locator(this.settings_page_elements.Sales_closed)
        try {
            await ele.clear()
            await ele.fill("SALE CLOSED")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Sales Closed Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Not Available Input
    async Notvailable_Input() {
        const ele = this.page.locator(this.settings_page_elements.Not_Available)
        try {
            await ele.clear()
            await ele.fill("NOT AVAILABLE")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Not Available Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Coming Soon Input
    async ComingSoon_Input() {
        const ele = this.page.locator(this.settings_page_elements.Coming_Soon)
        try {
            await ele.clear()
            await ele.fill("COMING SOON")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Coming Soon Input failed, error occured' + error)
        }
    }
        // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Sold Out Input
    async SoldOut_Input() {
        const ele = this.page.locator(this.settings_page_elements.SoldOUt)
        try {
            await ele.clear()
            await ele.fill("SOLD OUT")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Sold Out Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Add to cart Input
    async AddTCArt_Input() {
        const ele = this.page.locator(this.settings_page_elements.Add_to_cart)
        try {
            await ele.clear()
            await ele.fill("Add to Cart")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Add to cart Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Tickets Added to cart Input
    async TickAddTCArt_Input() {
        const ele = this.page.locator(this.settings_page_elements.tickets_Added_To_cart)
        try {
            await ele.clear()
            await ele.fill("Tickets Added To Cart")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Tickets Added to cart Input failed, error occured' + error)
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Max Event Tickets Reached Input
    async MAxTicketEventReached_Input() {
        const ele = this.page.locator(this.settings_page_elements.MAXEventickreached)
        try {
            await ele.clear()
            await ele.fill("You have reached the maximum number of tickets available for this event")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Max Event Tickets Reached Input failed, error occured' + error)
        }
    }
         // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Max Inventory Tickets Reached Input
    async MAxTicketInventReached_Input() {
        const ele = this.page.locator(this.settings_page_elements.MAXInventory)
        try {
            await ele.clear()
            await ele.fill("You have reached the maximum number of tickets available for this event")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Max Inventory Tickets Reached Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the Accounts
    async Accounts_Click() {
        const ele = this.page.locator(this.settings_page_elements.Accounts)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Accounts click failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Account Input
    async Account_Input() {
        const ele = this.page.locator(this.settings_page_elements.Account_input)
        try {
            await ele.clear()
            await ele.fill("Account")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Account Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Account Information Input
    async Account_Info_Input() {
        const ele = this.page.locator(this.settings_page_elements.Account_Info)
        try {
            await ele.clear()
            await ele.fill("Account Information")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Account Information Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Update Input
    async Upadate_Input() {
        const ele = this.page.locator(this.settings_page_elements.Update)
        try {
            await ele.clear()
            await ele.fill("Account")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Update Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: First Name Input
    async FName_Input() {
        const ele = this.page.locator(this.settings_page_elements.First_Name)
        try {
            await ele.clear()
            await ele.fill("First Name")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('First Name Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Last Name Input
    async LName_Input() {
        const ele = this.page.locator(this.settings_page_elements.LName)
        try {
            await ele.clear()
            await ele.fill("Last Name")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Last Name Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Email Input
    async Email_Input() {
        const ele = this.page.locator(this.settings_page_elements.Email)
        try {
            await ele.clear()
            await ele.fill("Email")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Email Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Mobile Number Input
    async Mobile_Input() {
        const ele = this.page.locator(this.settings_page_elements.MNum)
        try {
            await ele.clear()
            await ele.fill("Mobile Number")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Mobile Number Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Shipping Address Input
    async Ship_Add_Input() {
        const ele = this.page.locator(this.settings_page_elements.Ship_Add)
        try {
            await ele.clear()
            await ele.fill("Shipping Address")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Shipping Address Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Address 1 Input
    async Address1_Input() {
        const ele = this.page.locator(this.settings_page_elements.Address1)
        try {
            await ele.clear()
            await ele.fill("Address 1")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Address 1 Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: City Input
    async City_Input() {
        const ele = this.page.locator(this.settings_page_elements.City)
        try {
            await ele.clear()
            await ele.fill("City")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('City Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: State Input
    async State_Input() {
        const ele = this.page.locator(this.settings_page_elements.State)
        try {
            await ele.clear()
            await ele.fill("State")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('State Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Postal Input
    async Postal_Input() {
        const ele = this.page.locator(this.settings_page_elements.Postal)
        try {
            await ele.clear()
            await ele.fill("Postal")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Postal Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Shipping information input
    async Shipping_info_Input() {
        const ele = this.page.locator(this.settings_page_elements.Shipping_info)
        try {
            await ele.clear()
            await ele.fill("Shipping information")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Shipping information Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Order Placed on input
    async Order_p_Input() {
        const ele = this.page.locator(this.settings_page_elements.Order_placed_on)
        try {
            await ele.clear()
            await ele.fill("Order Placed on")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Order Placed on Input failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Confirmation sent to input
    async Confirmation_sent_toInput() {
        const ele = this.page.locator(this.settings_page_elements.confirmation_Sent)
        try {
            await ele.clear()
            await ele.fill("Confirmation sent to")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Confirmation sent to Input failed, error occured' + error)
        }
    }
    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the Cart
    async Cart_Click() {
        const ele = this.page.locator(this.settings_page_elements.cart)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Cart click failed, error occured' + error)
        }
    }
        
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Fill the the Cart
    async Cart_Input() {
        const ele = this.page.locator(this.settings_page_elements.Cart_Input)
        try {
            await ele.fill("Cart")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Cart Input failed, error occured' + error)
        }
    }
            
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Fill the the Empty Cart Message
    async Empty_Cart_Input() {
        const ele = this.page.locator(this.settings_page_elements.Empty_Cart_MSG)
        try {
            await ele.clear()
            await ele.fill("Your cart is currently empty")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Cart Input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Fill the Add to Cart input field
    async Add_ToCart_Input() {
        const ele = this.page.locator(this.settings_page_elements.Add_to_cart)
        try {
            await ele.clear()
            await ele.fill("Add to Cart")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Add to Cart input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Tickets Added To Cart input
    async TicketAdd_ToCart_Input() {
        const ele = this.page.locator(this.settings_page_elements.tickets_Added_To_cart)
        try {
            await ele.clear()
            await ele.fill("Tickets Added To Cart")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Tickets Added To Cart input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Complete Order input
    async CompleteOrdr_Input() {
        const ele = this.page.locator(this.settings_page_elements.tickets_Added_To_cart)
        try {
            await ele.clear()
            await ele.fill("Complete Order")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Complete Order input failed, error occured' + error)
        }
    }
     // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Subtotal input
    async Subtotal_Input() {
        const ele = this.page.locator(this.settings_page_elements.Subtotal)
        try {
            await ele.clear()
            await ele.fill("Subtotal")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Subtotal input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Subtotal input
    async Fees_Input() {
        const ele = this.page.locator(this.settings_page_elements.Fees)
        try {
            await ele.clear()
            await ele.fill("Fees")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Subtotal input failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Total input
    async Total_Input() {
        const ele = this.page.locator(this.settings_page_elements.Total)
        try {
            await ele.clear()
            await ele.fill("Total")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Total input failed, error occured' + error)
        }
    }
        
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the Navigation
    async NavigationDRopdwn_Click() {
        const ele = this.page.locator(this.settings_page_elements.Navigation_Drpdwn)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Navigation Dropdown failed, error occured' + error)
        }
    }
            
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Click on the Navigation
    async General_Click() {
        const ele = this.page.locator(this.settings_page_elements.general)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Navigation Dropdown failed, error occured' + error)
        }
    }

    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Explore All Events input
    async Expevent_Input() {
        const ele = this.page.locator(this.settings_page_elements.Explore_event)
        try {
            await ele.clear()
            await ele.fill("Explore All Events")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Explore All Events input failed, error occured' + error)
        }
    }
    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: See All input
    async SeeAll_Input() {
        const ele = this.page.locator(this.settings_page_elements.SeeAll)
        try {
            await ele.clear()
            await ele.fill("See All")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('See All input failed, error occured' + error)
        }
    }
        
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Keep Browsing input
    async KeepBrwsing_Input() {
        const ele = this.page.locator(this.settings_page_elements.Keep_Browsing)
        try {
            await ele.clear()
            await ele.fill("Keep Browsing")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Keep Browsing input failed, error occured' + error)
        }
    }
            
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Continue To Checkout input
    async ConChekout_Input() {
        const ele = this.page.locator(this.settings_page_elements.continue_To_Chkout)
        try {
            await ele.clear()
            await ele.fill("Continue To Checkout")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Continue To Checkout input failed, error occured' + error)
        }
    }
                
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Continue To Checkout input
    async Cancel_Input() {
        const ele = this.page.locator(this.settings_page_elements.Cancel)
        try {
            await ele.clear()
            await ele.fill("Cancel")
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Cancel input failed, error occured' + error)
        }
    }
                    
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Save Transition Click
    async SaveTransition_Click() {
        const ele = this.page.locator(this.settings_page_elements.Save_Transition)
        try {
            await ele.click()
            
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error('Save Transition Click failed, error occured' + error)
        }
    }
                        
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Save Category Click
    async SaveCate_Click() {
        const ele = this.page.locator(this.settings_page_elements.CategorySAveBTN)
        try {
            await ele.click({force:true, timeout:3000})
            
            
        } catch (error) {
            throw new Error('Save New Category Click failed, error occured' + error)
        }
    }
                            
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Import CSV Click
    async IMportCSV_Click() {
        const ele = this.page.locator(this.settings_page_elements.Import_CSV)
        try {
            await ele.click({force:true, timeout:3000})
            
            
        } catch (error) {
            throw new Error('Import CSV Click failed, error occured' + error)
        }
    }
    // Module Name: Aloompa | Admin
    // Feature Name: LiveOrder&reservations
    // Screen Type: Desktop view
    // Description: Export CSV Click
    async ExportCSV_Click() {
        const ele = this.page.locator(this.settings_page_elements.Export_CSV)
        try {
            await ele.click({force:true, timeout:3000})
            
            
        } catch (error) {
            throw new Error('Export CSV Click failed, error occured' + error)
        }
    }
    //     // Module Name: Aloompa | Admin
    // // Feature Name: LiveOrder&reservations
    // // Screen Type: Desktop view
    // // Description: Upload CSV File
    // async upload_CSV() {
    //     // const filePath0 = `testData/images/${value}`
    //     // const [fileChooser] = await Promise.all([
    //     //     // It is important to call waitForEvent before click to set up waiting.
    //     //     //this.page.waitForEvent('fileInput'),
    //     //     // Opens the file chooser.
    //     //     this.page.locator("//input[@data-testid='fileInput']").click()
    //     // ]);
    //     // await fileChooser.setFiles([filePath0]);
    //     await this.page.setInputFiles("//span[text()='Import CSV']",'F:/Aloompa_UI_automation/testData/csv/reservations-events-export.csv')
    //     await this.page.waitForTimeout(3000)
    // }





      // Module Name: Aloompa | Admin | Mobile App CMS
  // Feature Name: Aloompa Mobile App CMS - Event Data
  // Screen Type: Desktop
  // Description: file uploader for csv file
  async upload_CSV(value: string) {
    const filePath0 = `testData/csv/${value}`
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.locator(this.settings_page_elements.Import_CSV).nth(0).click()
    ]);
    await fileChooser.setFiles([filePath0]);
  }
}
