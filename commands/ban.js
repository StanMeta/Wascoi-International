module.exports = {
    name: 'ban',
    description: 'Command made by wascoi',
    execute(message, args, Discord) {

    if(message.member.roles.cache.has('835827958421389312')){

        if (command === 'ban') {
            if (args.length < 2) {
                return message.reply('Please mention the user you want to ban and specify a ban reason.');
            }
        
            const user = getUserFromMention(args[0]);
            if (!user) {
                return message.reply('Please use a proper mention if you want to ban someone.');
            }
        
            const reason = args.slice(1).join(' ');
            try {
            } catch (error) {
                return message.channel.send(`Failed to ban **${user.tag}**: ${error}`);
            }
        
            return message.channel.send(`Successfully banned **${user.tag}** from the server!`);
        }

    } else {
        message.channel.send('You do not have the right permissions to use this command.')
    }

    }
}