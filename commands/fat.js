const { db } = require("../alpha-variables.js");
const { BFPMale, BFPFemale } = require("../modules/bfp-embeds.js");
const { fat } = require("../modules/help.js")

module.exports = {
	name: 'fat',
	description: 'Calculate you bady fat percentage',
	async execute(msg, args) {
	  
        const userID = msg.author.id;
        const img = msg.author.avatarURL();
        
        db.get(userID).then(values => {
            // Checks to see if user has all the necesarry information inputted into the database
            if (!values || values[0] === false || values[1] === false) {
                msg.reply("you must have your user profile set up to use this command. Use \`!help user\` and \`!help log\` to learn more.");
            } else if (msg.content === "!fat"){
                msg.channel.send(fat);
            } else {
                // Check is metric or imperial; false = imperial
                if (values[4] === false) {
                    const input = msg.content.split(" ");
                    let neck = parseInt(input[1] * 2.54);
                    let waist = parseInt(input[2] * 2.54);

                    // Checks to see if user is "males" or "female" based on the boolean value of values[3]
                    if (values[3] === true) {
                        msg.reply(BFPMale((values[0] * 2.54), (values[1] / 2.21), neck, waist, img));
                    } else {
                        let hips = parseInt(input[3] * 2.54);
                        msg.reply(BFPFemale((values[0] * 2.54), (values[1] / 2.21), neck, waist, hips, img));
                    };
                } else {
                    const input = msg.content.split(" ");
                    let neck = parseInt(input[1]);
                    let waist = parseInt(input[2]);
                
                    // Checks to see if user is "males" or "female" based on the boolean value of values[3]
                    if (values[3] === true) {
                        msg.reply(BFPMale(values[0], values[1], neck, waist));
                    } else {
                        let hips = parseInt(input[3]);
                        msg.reply(BFPFemale(values[0], values[1], neck, waist, hips));
                    };
                };
            };
        });
	},
};