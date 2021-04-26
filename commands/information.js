module.exports = {
    name: 'information',
    description: 'Command made by wascoi',
    execute(message, args, Discord) {

    if(message.member.roles.cache.has('835827958421389312')){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Information')
        .addField('Info','Welcome to Wascoi International! This is a Fictional Roblox airline that you can fly on! We try to be a realistic as possible. All for the best Customer Experience!.')
        .addField('The official links are under this messages ')
        .addField('Wascoi Group (Roblox)', 'https://www.roblox.com/groups/5811008/Wascoi-International#!/about')
        .addField('Twitter', 'https://twitter.com/WascoiInt')
        .addField('Wascoi Youtube', 'https://www.youtube.com/channel/UC-_Pn3_5pFGApHpVinD8JxQ')
        .addField('Wascoi Official Discord', 'https://discord.gg/vfy8KRsRQp')
        .addField('Support for our passengers', 'Do you got a question about Wascoi or anything else? Please contact us! If you Write is The channel bot Commands w?ticket Then a ticket for you will open and we will assist you as soon as possible.')
        .addField('FAQ', 'How can i apply? Go to our application Channel! In there are the link for the applications. If you made an application please make a ticket.')
        .addField('When are flights hosted?', 'We try to do them very frequent. Be sure to look in the flights channel!')
        .addField('How can i partner up?', 'For that again open a ticket, in that way we can answer them fast!')
        .addField('Have a lovely time at Wascoi International! We hope to see you onboard one of our flight!')
        .setThumbnail('https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
        .setImage('https://cdn.discordapp.com/attachments/697085154757312603/836259288183341066/unknown.png')
        .setColor(0x2c2f33)
        .setTimestamp()
        .setFooter('Wascoi ✔2021', 'https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png');

        message.channel.send(newEmbed);

    } else {
        message.channel.send('You do not have the right permissions to use this command.')
    }

    }
}