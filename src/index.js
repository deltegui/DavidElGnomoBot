const Discord = require('discord.js');
const loadEnvFile = require('node-env-file');
const giveMeNoHomo = require('./img.js');

loadEnvFile('.env');

const discordToken = process.env.TOKEN;
const client = new Discord.Client();

function handleRequest(reply) {
	reply(giveMeNoHomo());
}

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`);
});

client.on('message', msg => {
    if(!/no homo/.test(msg.content)) {
        return;
    }
    handleRequest(msg.reply.bind(msg));
});

client.login(discordToken);