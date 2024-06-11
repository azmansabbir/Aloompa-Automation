import LoginPage from "@pages/Login.page";
import AppsPage from "@pages/Apps.page";
import ReservationPage from "@pages/Reservations.page";
import EventdashboardPage from "@pages/Event_dash_board.page";
import MangeEventPage from "@pages/ManageEvent.page";
import { test as baseTest } from "@playwright/test";
import functions from "@helper-function/functions";
import BaseFunctions from "@base-function/baseFunctions";
import testData from "@testData/testData"
import AttendeeInformationPage from "@pages/AttendeeInformation.page";
import AccountManagement from "@pages/AccountManagement.page";
import SettingsPage from "@pages/Settings.page";
import TicketingPage from "@pages/Tcketing.page";
import Design from "@pages/Design.page";
import Report from "@pages/Report.page"


const test = baseTest.extend<{
    loginPage: LoginPage;
    functions: functions;
    testData: testData;
    BaseFunctions: BaseFunctions;
    AppsPage:AppsPage;
    ReservationPage:ReservationPage;
    EventdashboardPage:EventdashboardPage;
    ManageEventPage:MangeEventPage;
    AttendeeInformationPage:AttendeeInformationPage;
    AccountManagement: AccountManagement;
    SettingsPage:SettingsPage;
    TicketingPage: TicketingPage;
    Design:Design;
    Report:Report
}>({
    functions: async ({ page }, use) => {
        await use(new functions(page));
    },
    testData: async ({ page }, use) => {
        await use(new testData(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    BaseFunctions: async ({ page }, use) => {
        await use(new BaseFunctions(page));
    },
    AppsPage: async ({ page }, use) => {
        await use(new AppsPage(page));
    },
    ReservationPage: async ({ page }, use) => {
        await use(new ReservationPage(page));
    },
    EventdashboardPage: 
    async ({ page }, use) => {
        await use(new EventdashboardPage(page));
    },
    ManageEventPage:
    async ({ page }, use) => {
        await use(new MangeEventPage(page));
    },
    AttendeeInformationPage:
    async ({ page }, use) => {
        await use(new AttendeeInformationPage(page));
    },
    AccountManagement:
    async ({ page }, use) => {
        await use(new AccountManagement(page));
    },
    SettingsPage: 
    async ({ page }, use) => {
        await use(new SettingsPage(page));
    },
    TicketingPage:
    async ({ page }, use) => {
        await use(new TicketingPage(page));
    },
    Design: 
    async ({ page }, use) => {
        await use(new Design(page));
    },
    Report: 
    async ({ page }, use) => {
        await use(new Report(page));
    }

})
export default test;
export const expect = test.expect;

