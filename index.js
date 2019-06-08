const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('De Bot staat aan😎');
    
    
   
//Dit is de bot status
});
client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: '!memecommands ',
            type: 'LISTENING' 
        },
        status: 'dnd'
    })
})
client.on("message", (message) => {
    if (message.content.startsWith("!ban")) {
if(!message.member.roles.find("name", "Meme bot creators"))
   return;
        var member= message.mentions.members.first()
        message.channel.send(":wave: " + member.displayName + " has been successfully banned :wave:");
        member.ban().then((member) => {
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }
});
client.on("message", (message) => {
    if (message.content.startsWith("!kick")) {
if(!message.member.roles.find("name", "Meme bot creators"))
   return;
        var member= message.mentions.members.first()
        message.channel.send(":wave: " + member.displayName + " has been successfully kicked :wave:");
        member.kick().then((member) => {
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }
});
client.on("message", (message) => {
    if (message.content.startsWith("!mute")) {
if(!message.member.roles.find("name", "Meme bot creators"))
   return;
        var member= message.mentions.members.first()
        message.channel.send(":wave: " + member.displayName + " has been successfully muted :wave:");
        member.mute().then((member) => {
        }).catch(() => {
            message.channel.send("Access Denied");
        });
    }
});
//Di
//Dit is het begin van alle commands   
client.on('message', message => {
    if (message.content === '!meme') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Memes are cool');
    }
});
client.on('message', message => {
    if (message.content === '!meme1') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('https://cdn.discordapp.com/attachments/523778062987427851/571680609722826752/Screen-Shot-2019-02-14-at-4.png');
    }
});
client.on('message', message => {
    if (message.content === '!yeet') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('https://tenor.com/view/yeet-rafiki-simba-lion-king-gif-12559094');
    }
});
client.on('message', message => {
    if (message.content === '!dab') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('https://imgur.com/oxUxDRL');
    }
});
client.on('message', message => {
    if (message.content === '!memecommands') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('This are the meme comamnds: !meme1 !dab !yeet !meme2 !meme3 !memelist !madeby !meme4 !meme5 !donate !kissthenuts !botstatus !version !putin !update');
    }
});
client.on('message', message => {
    if (message.content === '!meme2') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('https://imgur.com/ykg4l1l');
    }
});
client.on('message', message => {
    if (message.content === '!meme3') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('https://tenor.com/view/no-please-no-god-no-noooo-gif-5938426');
    }
});
client.on('message', message => {
    if (message.content === '!memelist') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('https://cdn.discordapp.com/attachments/523778062987427851/571684670052237312/hSN9aB3.png https://cdn.discordapp.com/attachments/523778062987427851/571684762033586186/5gwo9dcm1rh11.png');
    }
});
client.on('message', message => {
    if (message.content === '!madeby') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('This bot is made by MaxGaming And LucaYTPols');
    }
});
client.on('message', message => {
    if (message.content === '!meme4') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Do you know the way: https://cdn.discordapp.com/attachments/571712995378462722/571743608903041090/tenor.gif https://media.discordapp.net/attachments/571712995378462722/571743175199424542/5d6648c7ca5a805e6453e7d8040c48e8.png');
    }
});
client.on('message', message => {
    if (message.content === '!meme5') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Ninja did WHAT in Europe: https://cdn.discordapp.com/attachments/571307661392347158/571764704813514772/unknown.png');
    }
});
client.on('message', message => {
    if (message.content === '!donate') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('https://www.paypal.me/memebotdonations');
    }
});
client.on('message', message => {
    if (message.content === '!kissthenuts') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('https://cdn.discordapp.com/attachments/523778062987427851/579249159438073887/Kiss_the_nuts.JPG');
    }
});
client.on('message', message => {
    if (message.content === '!botstatus') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('`Status: Working fine! ✔ 👍`');
    }                         
});
client.on('message', message => {
    if (message.content === '!version') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('`The bot version is: 0.8.0`');
    }
});
client.on('message', message => {
    if (message.content === '!update') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('`The Bot is up to date 👍`');
    }
});
client.on('message', message => {
    if (message.content === '!putin') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('https://cdn.discordapp.com/attachments/523778062987427851/583226354112266241/meme.png');
    }
});   

 // De bot Login      
client.login('NTcxNjgwMDgwNjY5OTY2Mzc3.XMRQsQ.tIx6UISD9I1hQrCdKUMUZ6U_n1A');