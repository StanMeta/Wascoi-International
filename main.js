const Discord = require('discord.js');

const client = new Discord.Client();

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


    membercount(client)
    
});


client.on('message', message => {
	if (message.content === 'w?verify') {
		message.react('✅'); 

	}  if (reaction.partial) { //this whole section just checks if the reaction is partial
        try {
            await reaction.fetch(); //fetches reaction because not every reaction is stored in the cache
        } catch (error) {
            console.error('Fetching message failed: ', error);
            return;
        }
    } if (!user.bot) {
        if (reaction.emoji.id == 836584213142569002) { //if the user reacted with the right emoji

            const role = reaction.message.guild.roles.cache.find(r => r.id === 835826664663154740); //finds role you want to assign (you could also user .name instead of .id)

            const { guild } = reaction.message //store the guild of the reaction in variable

            const member = guild.members.cache.find(member => member.id === user.id); //find the member who reacted (because user and member are seperate things)

            member.roles.add(role); //assign selected role to member

        }
    }
})








client.login(process.env.key);