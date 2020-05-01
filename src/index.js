const Discord = require('discord.js');
const loadEnvFile = require('node-env-file');
const images = require('./img.js');

loadEnvFile('.env');

const discordToken = process.env.TOKEN;
const client = new Discord.Client();

function giveMeNoHomo() {
    return images[[Math.floor(Math.random() * images.length)]];
}

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`);
});

client.on('message', msg => {
    if(!/no homo/.test(msg.content)) {
        return;
    }
    msg.reply(giveMeNoHomo());
});

client.login(discordToken);