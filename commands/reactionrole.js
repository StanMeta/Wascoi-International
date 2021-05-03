module.exports = {
    name: 'reactionrole',
    description: 'Command made by Wascoi',
    async execute(message, args, Discord, client) {

        if(message.member.permissions.has("ADMINISTRATOR")){

        const channel = '836665380935172176';
        const verifyrole = message.guild.roles.cache.find(role => role.name === "Verified");
        const travelerrole = message.guild.roles.cache.find(role => role.name === "Traveler");
        const generalrole = message.guild.roles.cache.find(role => role.name === "- - - - - General - - - - -");

        const verifyemoji = '✅';
        const traveleremoji = '🛅';
        const generalemoji = '🈴';

        let embed = new Discord.MessageEmbed()
        .setColor('0x2c2f33')
        .setThumbnail('https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
        .setTitle('Roles')
        .setTimestamp()
        .setFooter('Wascoi ✔2021', 'https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
        .addField('Info', 'To get the all the roles you will need to react with the emoji\'s under this message.\n\n'
        + `${verifyemoji} To verify - ${traveleremoji} to get trevaler role ${generalemoji} to get general role`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(verifyemoji);
        messageEmbed.react(traveleremoji);
        messageEmbed.react(generalemoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === verifyemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(verifyrole);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === verifyemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(verifyrole);
                } if (reaction.emoji.name === traveleremoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(travelerrole);
                } if (reaction.emoji.name === generalemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(generalrole);
                }
            } else {
                return;
            }
        });

    }else {
        message.channel.send('You do not have the right permissions to use this command.')
    }
    }

}