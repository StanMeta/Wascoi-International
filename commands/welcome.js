module.exports = (client) => {
    const channelId = '836665104795828244' // welcome channel
    const targetChannelId = '836665380935172176' // rules and info
  
    client.on('guildMemberAdd', (member) => {
      const message = `welcome <@${
        member.id
      }> to Wascoi International! Please verify in ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }