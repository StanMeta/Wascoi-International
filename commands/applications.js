module.exports = {
    name: 'applications',
    description: 'Command made by wascoi',
    execute(message, args, Discord) {

    if(message.member.roles.cache.has('835827958421389312')){
        const newEmbed = new Discord.MessageEmbed()
            .setTitle('Applications')
            .setThumbnail('https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
            .addField('Info', 'Welcome to #applications Beneed this message you will find all applicationsKeep in my mind an application can always be denied and you have never the right to dm an staff member about it.')
            .addField('Ground crew application', 'https://forms.gle/Crf2mA3fi61UMrkh9')
            .addField('security applications', 'https://docs.google.com/forms/d/e/1FAIpQLSd8XowsHhWBICC_YkvVnHUPaV1DIt1HgeSfbtIRGs0eRfSgGg/viewform?usp=sf_link')
            .addField('Airport employee and Cabin Crew applications', 'https://docs.google.com/forms/d/e/1FAIpQLScgVyHf-ec0Na2tKh5H-w--KLcmxwXqKnles_mg2eXp38E6cA/viewform?usp=sf_link')
            .addField('First Officer applications', 'https://docs.google.com/forms/d/e/1FAIpQLSejbLxz8jL39uIubnKpI407RGxlEbJmbx-HBtwn2DVhc6JlKQ/viewform')
            .setImage('https://cdn.discordapp.com/attachments/697085154757312603/836258627453976666/unknown.png')
            .setColor(0x2c2f33)
            .setTimestamp()
            .setFooter('Wascoi ✔2021', 'https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png');
            
        message.channel.send(newEmbed);

    } else {
        message.channel.send('You do not have the right permissions to use this command.')
    }

    }
}