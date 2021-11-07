const { db } = require("../alpha-variables.js");
const { userData } = require("../modules/user-data.js");

module.exports = {
	name: 'user',
	description: 'new user set up',
	async execute(msg, args) {
        
        const userID = msg.author.id;
        const user = msg.author.tag;
        const defaultValues = [
            false, // height [0]          
            false, // weight [1]           
            false, // age [2]             
            false, // sex is male [3]           
            false, // uses metric [4]         
            false, // 5k time [5]           
            false, // 10k time [6]
            false, // half marathon time [7]
            false, // marathon time [8]
            false // FTP
        ];

        const inputs = msg.content.split(" ");

        if (inputs[1] === "set" || inputs[1] === "reset") {
            db.set(userID, defaultValues);
            msg.reply("I have set up your user profile!")
            msg.channel.send("Use \`!help log\` to learn how to log your data!")
        } else {
            try{
            db.get(userID).then(values => {msg.channel.send(userData(user, values, msg.author.avatarURL()))});
            } catch {
                msg.reply("I don't think you have set up a profile yet. Use \`!user set\` to initiate this feature for yourself.")
            }
        };
        
	},
};