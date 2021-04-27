module.exports = {
    name: 'ban',
    description: 'Command made by wascoi',
    execute(message, args, Discord) {

        if (msg.content.startsWith("kick ")) {
            if (msg.member.hasPermission("KICK_MEMBERS")) {
                if (msg.members.mentions.first()) {
                    try {
                        msg.members.mentions.first().kick();
                    } catch {
                        msg.reply("I do not have permissions to kick " + msg.members.mentions.first());
                    }
                } else {
                    msg.reply("You do not have permissions to kick " + msg.members.mentions.first());
            }
        }
            
        }else if (msg.content.startsWith("ban ")) {
            if (msg.member.hasPermission("BAN_MEMBERS")) {
                if (msg.members.mentions.first()) {
                    try {
                        msg.members.mentions.first().ban();
                    } catch {
                        msg.reply("I do not have permissions to ban" + msg.members.mentions.first());
                    }
                } else {
                    msg.reply("You do not have permissions to ban" + msg.members.mentions.first());
                }
            }
        }

    }
}





// if (msg.content.startsWith("kick ")) {
//     if (msg.member.hasPermission("KICK_MEMBERS")) {
//         if (msg.members.mentions.first()) {
//             try {
//                 msg.members.mentions.first().kick();
//             } catch {
//                 msg.reply("I do not have permissions to kick " + msg.members.mentions.first());
//             }
//         } else {
//             msg.reply("You do not have permissions to kick " + msg.members.mentions.first());
//     }
// }
    
// }else if (msg.content.startsWith("ban ")) {
//     if (msg.member.hasPermission("BAN_MEMBERS")) {
//         if (msg.members.mentions.first()) {
//             try {
//                 msg.members.mentions.first().ban();
//             } catch {
//                 msg.reply("I do not have permissions to ban" + msg.members.mentions.first());
//             }
//         } else {
//             msg.reply("You do not have permissions to ban" + msg.members.mentions.first());
//         }
//     }
// }