module.exports = {
    name: 'reactionrole',
    description: 'Command made by Wascoi',
    async execute(message, args, Discord, client) {
        const channel = '835826676273381396';
        const verifyrole = message.guild.roles.cache.find(role => role.name === "Verified");

        const verifyemoji = '✅';

        let embed = new Discord.MessageEmbed()
        .setColor('0x2c2f33')
        .setThumbnail('https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
        .setTitle('Verify')
        .setTimestamp()
        .setFooter('Wascoi ✔2021', 'https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
        .setDescription('To see all the channels you need to react with the emoji under this message.\n\n')
        + `${verifyemoji} To verify`;

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(verifyemoji);
    }

}