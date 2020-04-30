import * as Discord from 'discord.js';
import loadEnvFile from 'node-env-file';
import images from './img.mjs';

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