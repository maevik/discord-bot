import { Bot } from "./models/bot";
import { Logger } from "./utils/logger";

if (!process.env.BOT_TOKEN || !process.env.CLIENT_ID) {
    Logger.error("missing BOT_TOKEN or CLIENT_ID env");
    process.exit(1);
}

let bot = new Bot(process.env.BOT_TOKEN,process.env.CLIENT_ID);
bot.start();
