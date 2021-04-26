module.exports = {
    name: 'rules',
    description: 'Command made by wascoi',
    execute(message, args, Discord) {

        if(message.member.roles.cache.has('835827958421389312')){
            const newEmbed = new Discord.MessageEmbed()
            .setTitle('Rules')
            .setThumbnail('https://cdn.discordapp.com/attachments/697085154757312603/835573595421540433/Wascoi_logo_1-removebg-preview.png')
            .addField('1', 'Bullying, swearing with cancer, discrimination, racism and sexual behavior are not allowed.')
            .addField('2', 'Treat each other with respect.')
            .addField('3', 'You can only join private channels if you have received permission from people in the relevant channel.')
            .addField('4', 'Promotion is strictly prohibited on the server and in DM.')
            .addField('5', 'Do not spam and / or type caps unnecessarily.')
            .addField('6', 'Use text channels for which they are made.')
            .addField('7', 'Dont pretend to be someone else.')
            .addField('8', 'No unnecessary tagging of people / staff.')
            .addField('9', 'No NSFW, Racism or diseases in your name and / or photo on Discord.')
            .addField('10', 'do not be rude to staff members.')
            .addField('11', 'Voice changer, music or screaming through your microphone is not allowed.')
            .addField('12', 'If something goes wrong, do not play your own judge and get Staff involved')
            .addField('13', 'Asking for a rank is not allowed, you can only earn them.')
            .addField('14', 'Offering or giving away accounts / online currency is allowed, but never scam!')
            .addField('15', 'Always follow derections of staff!.')
            .addField('17', 'Do not DM staff members unless they DMed you first!')
            .addField('18', 'Follow the Discord Terms of Service. ')
            .setImage('https://cdn.discordapp.com/attachments/697085154757312603/836258928739221564/unknown.png');
    
            message.channel.send(newEmbed);
        } else {
            message.channel.send('You do not have the right permissions to use this command.')
        }

    }
}