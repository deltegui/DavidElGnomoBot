import * as Discord from 'discord.js';
import loadEnvFile from 'node-env-file';

loadEnvFile('.env');

const discordToken = process.env.TOKEN;
const client = new Discord.Client();

const images = [
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/c44cb9b6-ad30-478a-b3c5-b61f3400fc59.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/152ddf27-2d80-409d-bc08-daf90cae64ab.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/e0f5ce99-1428-4222-a1c2-d6de0b1f33db.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/150a0e9c-70c0-411b-a8f3-1f2a16aa17aa.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/2505436d-d5d9-4d27-b1f7-ffc9d5a300f5.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/f57dfef2-d378-4430-86c5-9775e91c3bb2.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/4567b6a0-2c13-417b-b7b0-04b36165b0ab.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/211c342c-dd2d-415a-821c-ee394e4aa4d5.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/3522359f-4759-49c2-8eeb-e3db59c6de3e.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/bd1a4ba7-7706-4673-bc29-d3774486fcd4.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/79e97d7a-877d-4c08-85cd-85778813ddb4.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/c8b0a62b-9566-46c9-81e2-2c284883f36e.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/ab16f8bb-b13c-4d07-9519-8560ac654464.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/dba542f2-cede-4479-abcb-749b127f3f9a.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/8bfa3ecd-10dc-43b8-815b-30f736efec60.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/405ad798-0bbc-4910-a3d7-82401144ab5f.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/361ce187-470c-4e80-bf79-c60393a08ef1.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/ea95c4e0-acfb-4338-b394-a6dd498968e8.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/62cc9180-9ea5-47bd-bced-f62c9ec7361f.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/fb219d21-1418-4bac-9e23-bf0d0456a14c.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/12359efc-bddd-42e9-be59-febacc1d9dd1.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/9b23b523-3ca4-4df4-a934-06837459cdbf.webp',
    'https://s1.stickers.cloud/packs/75a5f329-5f52-4579-ad3e-4e5a34227b78/webp/a1343f92-f3de-49a1-b539-346b5ac6ebe6.webp',
];

function randomIndex(limit) {
    const oneDigit = parseInt(Math.random() * 10)
    return oneDigit % limit;
}

function giveMeNoHomo() {
    return images[randomIndex(images.length)];
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