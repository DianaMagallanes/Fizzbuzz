const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

const token = "";
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {  
    const infoMessage = ExplorerController.getOnTextBot(msg, match);
    bot.sendMessage(infoMessage[0], infoMessage[1]); 

});

bot.on("message", (msg) => {
    const infoMessage = ExplorerController.getonValidationBot(msg);
    bot.sendMessage(infoMessage[0], infoMessage[1]);
});