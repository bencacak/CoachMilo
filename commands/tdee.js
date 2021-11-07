const { imperialTdee, metricTdee } = require("../modules/tdee-embeds.js");
const { db } = require("../alpha-variables.js");

module.exports = {
	name: 'tdee',
	description: 'calculate you tdee',
	async execute(msg, args) {

        const img = msg.author.avatarURL();

        if (msg.content === "!tdee") {

            const userID = msg.author.id;
            db.get(userID).then(values => {

                if (!values || values === false) {

                    msg.reply("it looks like you will have to enter all the necessarry arguments manually. I am missing critical information in my database about you to perform this automated function.");
                    msg.channel.send("Use \`!help tdee\` to learn more about manual input.");
                    msg.channel.send("Use \`!user set\` to start a user profile for yourself and then \`!help log\` to learn how to input your stats into the data base. To perform the TDEE function, you need your age, sex, height, and weight to be set.");

                } else {

                    let sex;

                    if (values[3] === true) {
                        sex = "male";
                    } else {
                        sex = "female";
                    };

                    let age = values[2];
                    let height = values[0]
                    let weight = values[1];

                    if (age === false || height === false || weight === false) {
                        msg.reply("it looks like you will have to enter all the necessarry arguments manually. I am missing critical information in my database about you to perform this automated function.");
                        msg.channel.send("Use \`!help tdee\` to learn more about manual input.");
                        msg.channel.send("Use \`!help log\` to learn how to input your stats into the data base. To perform the TDEE function, you need your age, sex, height, and weight to be set.");

                    } else if (values[4] === false ) {

                        height = height * 2.54;
                        weight = weight * 0.454;
                        
                        try {
                            msg.channel.send(imperialTdee(sex, age, height, weight, img));
                        }
                        catch (err) {
                            console.error(err);
                        };

                    } else {
                    
                        try {
                            msg.channel.send(metricTdee(sex, age, height, weight, img));
                        }
                        catch (error) {
                            console.error(err);
                        };
                    };
                };   
                
            });

        } else if (msg.content.includes("metric")) {
        
        const command = '!tdee metric ';
        const input = msg.content.split(command)[1];
        input.toLowerCase;
        const values = input.split(' ');
        let sex;
        const age = Number.parseFloat(values[1]);
        const height = Number.parseFloat(values[2]);
        const weight = Number.parseFloat(values[3]);
        if (values[0] === 'm' || values[0] === 'male') {
            sex = 'male';
        } else {
            sex = 'female';
        };
        msg.reply(metricTdee(sex, age, height, weight, img));

        } else {

        const command = '!tdee ';
        const input = msg.content.split(command)[1];
        input.toLowerCase;
        const values = input.split(' ');
        let sex;
        const age = Number.parseFloat(values[1]);
        const height = Number.parseFloat(values[2]) * 2.54;
        const weight = Number.parseFloat(values[3]) / 2.21;
        if (values[0] === 'm' || values[0] === 'male') {
            sex = 'male';
        } else {
            sex = 'female';
        };
        msg.reply(imperialTdee(sex, age, height, weight, img));

        };

	},
};