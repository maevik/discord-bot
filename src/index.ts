import { Bot } from "./model/bot";
import { Logger } from "./util/logger";

if (!process.env.BOT_TOKEN || !process.env.CLIENT_ID) {
    Logger.error("missing BOT_TOKEN or CLIENT_ID env");
    process.exit(1);
}

let bot = new Bot(
    process.env.BOT_TOKEN,
    process.env.CLIENT_ID,
);

Logger.info("Discord Bot Initializing");
bot.start();
Logger.info("Discord Bot Initialized");