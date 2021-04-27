module.exports = {
    name: 'events',
    description: 'Command made by wascoi',
    execute(message, args, Discord) {

    if(message.member.permissions.has("ADMINISTRATOR")){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Events')
        .addField('Info','If there are any events coming they will be announced here.')
        .setThumbnail('https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
        .setImage('https://cdn.discordapp.com/attachments/697085154757312603/836258726792527902/unknown.png')
        .setColor(0x2c2f33)
        .setTimestamp()
        .setFooter('Wascoi ✔2021', 'https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png');

        message.channel.send(newEmbed);

    } else {
        message.channel.send('You do not have the right permissions to use this command.')
    }

    }
}