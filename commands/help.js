const helpMe = require("../modules/help.js");

module.exports = {
	name: 'help',
	description: 'get help',
	async execute(msg, args) {
	  
    if (msg.content === "!help") {

        msg.channel.send(helpMe.readMe);

    } else {

        let command = "!help ";
        let subCommand = msg.content.split(command)[1];

        if (subCommand === "tdee" || subCommand === "TDEE") {

            msg.channel.send(helpMe.tdeeHelp);

        } else if (subCommand === "bmi" || subCommand === "BMI") {

            msg.channel.send(helpMe.bmiHelp);

        } else if (subCommand === "pace") {

            msg.channel.send(helpMe.paceHelp);

        } else if (subCommand === "log") {

            msg.channel.send(helpMe.logHelp);

        } else if (subCommand === "user") {

            msg.channel.send(helpMe.userHelp);

        } else if (subCommand === "fat") {

            msg.channel.send(helpMe.fatHelp);
            
        } else if (subCommand === "kcal") {

            msg.channel.send(helpMe.kcalHelp);

        } else {   

            msg.channel.send(helpMe.readMe);

        };

    };

	},
};