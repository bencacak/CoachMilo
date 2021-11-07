const { logHelp } = require("../modules/help.js");
const { log } = require("../modules/log-data.js");

module.exports = {
	name: 'log',
	description: 'Log your stats into the database',
	async execute(msg, args) {
	  
        const userID = msg.author.id;
        const inputs = msg.content.split(" ");

        if (inputs.length < 3) msg.channel.send(logHelp);

        if (inputs.length >= 3) {
            for (let i = 1; i < inputs.length; i += 2) {
                let item = inputs[i];
                let value = inputs[i + 1];
                
                try {
                    await log(userID, item, value);
                    await msg.channel.send(`I have set your ${item} to \`${value}\`.`)
                } catch (err) {
                    console.error(err);
                }
                
            };
        };

	},
};