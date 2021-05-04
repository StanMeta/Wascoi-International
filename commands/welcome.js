module.exports = (client) => {
    const channelId = "836665104795828244";
    const rulesChannel = "836665380935172176";
    client.on("guildMemberAdd", (member) => {
      console.log(member);
  
      const message = `Welcome <@${
        member.id
      }> to Wascoi International! Be sure to Verify ${member.guild.channels.cache
        .get(rulesChannel)
        .toString()}`;
  
      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    });
  };