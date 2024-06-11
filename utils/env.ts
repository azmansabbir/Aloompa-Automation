// export default class ENV {
//   public static BASE_URL = process.env.BASE_URL;
//   public static USERNAME = process.env.USERNAME;
//   public static PASSWORD = process.env.PASSWORD;
//   public static TEAMS_WEBHOOK_URL = process.env.TEAMS_WEBHOOK_URL;
//   public static SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
//   public static ENV = process.env.ENV;
//   public static Environment = process.env.Environment;
//   public static REPORT_URL = process.env.REPORT_URL;

// }

const fs = require("fs");
const path = require("path");

export default class ENV {
  private static config: any;

  private static loadConfig() {
    const environment = process.env.NODE_ENV || "dev";

    // let testData

    const configPath = path.join(__dirname, "./envConfig.json");
    const configFile = fs.readFileSync(configPath, "utf8");
    const configData = JSON.parse(configFile);
    // console.log("Environment:", environment);
    // console.log("Config Data:", configData);
    ENV.config = configData[environment];
  }

  public static get BASE_URL(): string {
    return ENV.config.BASE_URL;
  }

  public static get USERNAME(): string {
    return ENV.config.USERNAME;
  }

  public static get PASSWORD(): string {
    return ENV.config.PASSWORD;
  }

  public static get TEAMS_WEBHOOK(): string {
    return ENV.config.TEAMS_WEBHOOK;
  }

  public static get SLACK_WEBHOOK(): string {
    return ENV.config.SLACK_WEBHOOK;
  }

  public static get ENVIRONMENT(): string {
    return ENV.config.ENVIRONMENT;
  }

  public static get REPORT_LINK(): string {
    return ENV.config.REPORT_LINK;
  }

  public static get PROJECT(): string {
    return ENV.config.PROJECT;
  }

  // Initialize configuration when the class is loaded
  static {
    ENV.loadConfig();
  }
}
