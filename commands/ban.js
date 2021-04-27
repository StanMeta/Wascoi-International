module.exports = {
    name: 'ban',
    description : 'Command made by wascoi',
    execute(message, args){

        if(message.member.permissions.has("BAN_MEMBERS")){

        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('User has been banned from the Wascoi International');
        }else{
            message.channel.send('I was not able to ban.');
        }
    }
    }
}