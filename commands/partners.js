module.exports = {
    name: 'partners',
    description: 'Command made by wascoi',
    execute(message, args, Discord) {

    if(message.member.roles.cache.has('835827958421389312')){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Partners')
        .setThumbnail('https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
        .addField('Info', 'Welcome to #partner This is where we list of partnersTo become a partner dm an @👔▕▏Board of Directors.')
        .addField('Partner || ZEROtech', 'https://discord.gg/7rmYG6rexm')
        .addField('Partner || Diamond Hotels', 'https://discord.gg/yNRZTKqEeR')
        .addField('Partner || Monaco Industries', 'https://discord.gg/qmshs7m7RK')
        .setImage('https://cdn.discordapp.com/attachments/697085154757312603/836259401400188928/unknown.png')
        .setColor(0x2c2f33)
        .setTimestamp()
        .setFooter('Wascoi ✔2021', 'https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png');

        message.channel.send(newEmbed);

    } else {
        message.channel.send('You do not have the right permissions to use this command.')
    }

    }
}