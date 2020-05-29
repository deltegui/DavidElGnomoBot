const Discord = require('discord.js');
const loadEnvFile = require('node-env-file');
const giveMeNoHomo = require('./img');
const showTrap = require('./traps');

loadEnvFile('.env');

const discordToken = process.env.DISCORD_TOKEN;
const client = new Discord.Client();

function shouldShowTrapImage() {
    if(process.env.NFSW !== "true") return false;
    const random = Math.floor(Math.random()*10);
    return random === 3;
}

async function handleRequest(reply) {
    if(shouldShowTrapImage()) {
        reply(await showTrap());
        reply('Se que deseas comertela, ¡capullín!');
        return;
    }
	reply(giveMeNoHomo());
}

client.on('ready', () => {
    if(!client || !client.user) return;
    console.log(`Logged as ${client.user.tag}`);
});

client.on('message', msg => {
    if(!/no homo/.test(msg.content)) {
        return;
    }
    handleRequest(msg.reply.bind(msg));
});

client.login(discordToken);