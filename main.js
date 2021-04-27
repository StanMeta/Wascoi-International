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

client.on('messageDelete', async message => {
	// ignore direct messages
	if (!message.guild) return;
	const fetchedLogs = await message.guild.fetchAuditLogs({
		limit: 1,
		type: 'MESSAGE_DELETE',
	});
	// Since we only have 1 audit log entry in this collection, we can simply grab the first one
	const deletionLog = fetchedLogs.entries.first();

	// Let's perform a coherence check here and make sure we got *something*
	if (!deletionLog) return console.log(`A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`);

	// We now grab the user object of the person who deleted the message
	// Let us also grab the target of this action to double-check things
	const { executor, target } = deletionLog;


	// And now we can update our output with a bit more information
	// We will also run a check to make sure the log we got was for the same author's message
	if (target.id === message.author.id) {
		console.log(`A message by ${message.author.tag} was deleted by ${executor.tag}.`);
	} else {
		console.log(`A message by ${message.author.tag} was deleted, but we don't know by who.`);
	}
});







client.login(process.env.key);