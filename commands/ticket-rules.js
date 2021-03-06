module.exports = {
    name: 'ticket-rules',
    description: 'Command made by wascoi',
    execute(message, args, Discord) {

        if(message.member.permissions.has("ADMINISTRATOR")){
            const newEmbed = new Discord.MessageEmbed()
            .setTitle('Ticket Rules')
            .setThumbnail('https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
            .addField('1', 'Do not make a lot of tickets.')
            .addField('2', 'Do not tagg staff in tickets.')
            .addField('3', 'Only make tickets when needed.')
            .setImage('https://cdn.discordapp.com/attachments/697085154757312603/836258928739221564/unknown.png')
            .setColor(0x2c2f33)
            .setTimestamp()
            .setFooter('Wascoi ✔2021', 'https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png');
        message.channel.send(newEmbed);
        } else {
            message.channel.send('You do not have the right permissions to use this command.');
        }

    }
}
