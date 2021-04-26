module.exports = {
    name: 'flights',
    description: 'Command made by wascoi',
    execute(message, args, Discord) {

    if(message.member.roles.cache.has('835827958421389312')){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('flights')
        .setThumbnail('https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
        .addField('Info', 'Welcome to #flights If you see this message it means there are no active or upcoming flights! Flights are deleted after completion')
        .setImage('https://cdn.discordapp.com/attachments/697085154757312603/836259813566316595/unknown.png')
        .setColor(0x2c2f33)
        .setTimestamp()
        .setFooter('Wascoi ✔2021', 'https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png');
        message.channel.send(newEmbed);

    } else {
        message.channel.send('You do not have the right permissions to use this command.')
    }

    }
}