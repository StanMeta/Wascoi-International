module.exports = {
    name: 'kick',
    description : 'Command made by wascoi',
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('User had been kicked from the Wascoi International');
        }else{
            message.channel.send('I was not able to kick.');
        }
    }
}