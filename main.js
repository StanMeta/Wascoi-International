const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'w?';

const fs = require('fs');
const membercount = require('./commands/member-count')
const CLEAR_MESSAGES = 'clearMessages';

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('Wascoi is klaar voor gebruik!')

    membercount(client)
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

    if (message.content == CLEAR_MESSAGES) {
  
        if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
          message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
          console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
          return;
        } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
          message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
          console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
          return;
        }
  
        if (message.channel.type == 'text') {
          message.channel.fetchMessages()
            .then(messages => {
              message.channel.bulkDelete(messages);
              messagesDeleted = messages.array().length; 
  
              message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
              console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
            })
            .catch(err => {
              console.log('Error while doing Bulk Delete');
              console.log(err);
            });
        }
    }

    
});











client.login(process.env.key);