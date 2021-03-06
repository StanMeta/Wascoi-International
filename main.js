const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = 'w?';

const fs = require('fs');
const membercount = require('./commands/member-count')

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('Wascoi is klaar voor gebruik!')

});





client.on('message', message => {


    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();


    if(command === 'announcements'){
        client.commands.get('announcements').execute(message, args, Discord);
    }

    if(command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    }

    if(command === 'ticket-rules'){
        client.commands.get('ticket-rules').execute(message, args, Discord);
    }

    if(command === 'partners'){
        client.commands.get('partners').execute(message, args, Discord);
    }

    if(command === 'applications'){
    client.commands.get('applications').execute(message, args, Discord);
    }

    if(command === 'fleet'){
        client.commands.get('fleet').execute(message, args, Discord);
    }

    if(command === 'flights'){
        client.commands.get('flights').execute(message, args, Discord);
    }

    if(command === 'ticket'){
        client.commands.get('ticket').execute(message, args, Discord);
    }

    if(command === 'development'){
        client.commands.get('development').execute(message, args, Discord);
    }

    if(command === 'information'){
        client.commands.get('information').execute(message, args, Discord);
    }

    if(command === 'events'){
        client.commands.get('events').execute(message, args, Discord);
    }

    if(command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    }

    if(command === 'ban'){
        client.commands.get('ban').execute(message, args, Discord);
    }

    if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }


    membercount(client)
    
});


// client.on('guildMemberAdd', guildMember =>{
//     let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '- - - - - General - - - - -');

//     guildMember.roles.add(welcomeRole);
//     guildMember.guild.channels.cache.get('836665104795828244').send(`Welcome <@${guildMember.user.id}> To wascoi International airport!, we hope you have a lot of fun playing!`)
// });

// client.on('guildMemberAdd', guildMember =>{
//     let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Traveler');

//     guildMember.roles.add(welcomeRole);
//     guildMember.guild.channels.cache.get('836665104795828244').send(`Welcome <@${guildMember.user.id}> To wascoi International airport!, we hope you have a lot of fun playing!`)
// });





client.login(process.env.key);