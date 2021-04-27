module.exports = {
    name: 'kick',
    description : 'Command made by wascoi',
    execute(message, args){

        if(message.member.permissions.has("KICK_MEMBERS")){
            
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('User has been kicked from the Wascoi International');
        }else{
            message.channel.send('I was not able to kick.');
        }
    } else {
        message.channel.send('You are not allowed to KICK people from the Wascoi discord.')
    }

    }
}