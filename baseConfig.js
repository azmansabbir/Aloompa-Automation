var date = new Date();
var vccd = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
const testConfig =
{
      "Project": "Aloompa UI Automation",
      "Env":"Main",
      "Language":"",
      "elementFinderURL":"https://colorlib.com/etc/regform/colorlib-regform-36/",
      //Mail COnfigurations
      "FromMailaddress": "udgo.sabbir@gmail.com",
      "FromAddressPassword": "jwqtedxspnbbdknu",
      "ToMailAddress": ["sabbir.of@gmail.com"],
      "SlackWebhookURL": "https://hooks.slack.com/services/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",
      "MailServiceProvider": "Gmail",
      "MailNotification": "yes",
      "TeamsNotification": "yes",
      "Githubreportlink": "https://unidevgoqa.github.io/Aloompa_UI_automation/"
}

module.exports = { testConfig }