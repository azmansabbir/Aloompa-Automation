const fs = require("fs");
const axios = require('axios');
const path = require('path');
const { testConfig } = require("./baseConfig.js");
const pwconfig = require("./playwright.config.ts");
const mailer = require('nodemailer');
const webhookURL = testConfig.SlackWebhookURL;
const subject = testConfig.Project + "_Test Execution Report";
const HTMLmessage = getMessage("HTML");
const Textmessage = getMessage("TEXT");

const smtpProtocol = mailer.createTransport({
    service: testConfig.MailServiceProvider,
    auth: {
        user: testConfig.FromMailaddress,
        pass: testConfig.FromAddressPassword
    }
});

var mailoption = {
    from: testConfig.FromMailaddress,
    to: testConfig.ToMailAddress,
    subject: subject,
    html: HTMLmessage,
    text: Textmessage
};

function getMessage(type) {
    let message;
    if (fs.existsSync(path.join(process.cwd(), "./result.json"))) {
        let rawData = fs.readFileSync(path.join(process.cwd(), "./result.json"), 'utf-8');
        let jsonObject = JSON.parse(rawData);

        const passedCount = Number(jsonObject.Passedcount) || 0;
        const failedCount = Number(jsonObject.Failedcount) || 0;
        const totalCount = passedCount + failedCount;
        const passPercentage = ((passedCount / totalCount) * 100).toFixed(2);
        const failPercentage = ((failedCount / totalCount) * 100).toFixed(2);

        if (type === "HTML") {
            // Your HTML message generation logic here
            message = `<html>Your HTML message here</html>`;
        } else if (type === "TEXT") {
            // Your TEXT message generation logic here
            message = `Your TEXT message here`;
        }
    } else {
        console.log("Reporter is not defined in the configuration");
        message = "Reporter is not defined in the configuration";
    }
    return message;
}

async function mailsender() {
    return new Promise((resolve, reject) => smtpProtocol.sendMail(mailoption, function (err, response) {
        if (err) {
            console.log(err);
            reject("Promise Rejected");
        }
        console.log('Message Sent' + response.message);
        smtpProtocol.close();
        resolve("Promise Resolved");
    }));
}

async function postMessageToTeams() {
    // Your Teams notification logic here
}

async function postMessageToSlack() {
    const slackWebhookURL = testConfig.SlackWebhookURL;

    const slackMessage = {
        text: `*${testConfig.Project} Test Execution Report*`,
        attachments: [
            {
                title: 'Test Execution Status',
                fields: [
                    {
                        title: 'Total Number of Test Cases Executed',
                        value: getTotalCount().toString(),
                        short: true,
                    },
                    {
                        title: 'Total Number of Test Cases Passed',
                        value: getPassedCount().toString(),
                        short: true,
                    },
                    {
                        title: 'Total Number of Test Cases Failed',
                        value: getFailedCount().toString(),
                        short: true,
                    },
                    {
                        title: 'Test Cases Pass Percentage',
                        value: `${getPassPercentage()}%`,
                        short: true,
                    },
                    {
                        title: 'Test Cases Fail Percentage',
                        value: `${getFailPercentage()}%`,
                        short: true,
                    },
                ],
            },
        ],
    };

    try {
        const response = await axios.post(slackWebhookURL, slackMessage, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(`Slack notification sent successfully: ${response.status} - ${response.statusText}`);
        return `${response.status} - ${response.statusText}`;
    } catch (err) {
        console.error('Error sending Slack notification:', err.response ? err.response.data : err.message);
        return err.response ? `${err.response.status} - ${err.response.statusText}` : err.message;
    }
}


function getTotalCount() {
    const rawData = fs.readFileSync(path.join(process.cwd(), "./result.json"), 'utf-8');
    const jsonObject = JSON.parse(rawData);
    const passedCount = Number(jsonObject.Passedcount) || 0;
    const failedCount = Number(jsonObject.Failedcount) || 0;
    return passedCount + failedCount;
}

function getPassedCount() {
    const rawData = fs.readFileSync(path.join(process.cwd(), "./result.json"), 'utf-8');
    const jsonObject = JSON.parse(rawData);
    return Number(jsonObject.Passedcount) || 0;
}

function getFailedCount() {
    const rawData = fs.readFileSync(path.join(process.cwd(), "./result.json"), 'utf-8');
    const jsonObject = JSON.parse(rawData);
    return Number(jsonObject.Failedcount) || 0;
}

function getPassPercentage() {
    const totalCount = getTotalCount();
    const passedCount = getPassedCount();
    return ((passedCount / totalCount) * 100).toFixed(2);
}

function getFailPercentage() {
    const totalCount = getTotalCount();
    const failedCount = getFailedCount();
    return ((failedCount / totalCount) * 100).toFixed(2);
}

// async function mailSend() {
//     await new Promise(resolve => setTimeout(resolve, 10000));

//     // Ensure testConfig is defined
//     if (testConfig) {
//         if (testConfig.MailNotification && testConfig.MailNotification.toLowerCase() === 'yes') {
//             await mailsender();
//         }

//         if (testConfig.TeamsNotification && testConfig.TeamsNotification.toLowerCase() === 'yes') {
//             await postMessageToTeams();
//         }

//         if (testConfig.SlackNotification && testConfig.SlackNotification.toLowerCase() === 'yes') {
//             await postMessageToSlack();
//         }
//     } else {
//         console.error('testConfig is undefined or null.');
//     }
// }

export default postMessageToSlack;
