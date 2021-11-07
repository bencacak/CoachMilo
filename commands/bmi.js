const { imperialBMI, metricBMI } = require("../modules/BMIinfo.js");
const { BMI } = require("fitness-calculator");
const { db } = require("../alpha-variables.js");

module.exports = {
	name: 'bmi',
	description: 'calculate your BMI',
	async execute(msg, args) {
        
        const img = msg.author.avatarURL();
        
        if (msg.content === "!bmi"){
 
            db.get(msg.author.id).then(values => {
                if (!values || values === false) {
                    msg.reply("it looks like you will have to enter all the necessarry arguments manually. I am missing critical information in my database about you to perform this automated function.");
                    msg.channel.send("Use \`!help bmi\` to learn about manual input to find hout your BMI.");
                    msg.channel.send("Use \`!user set\` to start a user profile for yourself and then \`!help log\` to learn how to input your stats into the data base. To perform the BMI function, you need your height and weight to be set.");
                    
                } else if (values[4] === false) {
                    let weight = values[1] / 2.21;
                    let height = values[0] * 2.54;
                    if (weight === false || height === false) {
                        msg.reply("it looks like you will have to enter all the necessarry arguments manually. I am missing critical information in my database about you to perform this automated function.");
                        msg.channel.send("Use \`!help bmi\` to learn about manual input to find hout your BMI.");
                        msg.channel.send("Use \`!user set\` to start a user profile for yourself and then \`!help log\` to learn how to input your stats into the data base. To perform the BMI function, you need your height and weight to be set.");
                    } else {
                        try {
                            msg.channel.send(imperialBMI(height, weight, BMI(height, weight), img));
                        } catch (err) {
                            console.error(err);
                        };
                    };
                } else {
                    let weight = values[1];
                    let height = values[0];
                    if (weight === false || height === false) {
                        msg.reply("it looks like you will have to enter all the necessarry arguments manually. I am missing critical information in my database about you to perform this automated function.");
                        msg.channel.send("Use \`!help bmi\` to learn about manual input to find hout your BMI.");
                        msg.channel.send("Use \`!user set\` to start a user profile for yourself and then \`!help log\` to learn how to input your stats into the data base. To perform the BMI function, you need your height and weight to be set.");
                    } else {
                        try {
                            msg.channel.send(metricBMI(height, weight, BMI(height, weight), img));
                        } catch (err) {
                            console.error(err);
                        };
                    };
                };
            });

        } else if (msg.content.includes("metric")) {

            const command = "!bmi metric ";
            const input = msg.content.split(command)[1];
            const values = input.split(' ');
            const height = Number.parseFloat(values[0]);
            const weight = Number.parseFloat(values[1]);    
            msg.reply(metricBMI(height, weight, BMI(height, weight)));

        } else {

            const command = '!bmi ';
            const input = msg.content.split(command)[1];
            const values = input.split(' ');
            const height = Number.parseFloat(values[0]) * 2.54;
            const weight = Number.parseFloat(values[1]) / 2.21;
            msg.reply(imperialBMI(height, weight, BMI(height, weight)));
        
        };

	},
};