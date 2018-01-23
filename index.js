const TelegramBot = function require('node-telegram-bot-api');

const Token = '536514506:AAGcjUbfTIwguMWMykB2KfldvgpKvcr7MfM';

const bot = new TelegramBot(TOKEN, {polling: true});

bot.onText(/\/start/, msg => {const text = 'Приветствую, что вы хотите делать?';

    bot.sendMessage(msg.chat.id, text);

    bot .onText(/\/weather/, function (msg, match) {
        const fromId = msg.from.id;

        bot.sendMessage(fromId, 'Город?');
    });
});