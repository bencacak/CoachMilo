const { db } = require("../alpha-variables.js");
const { kcalCalculator } = require("../modules/nutrition-calculators.js")

module.exports = {
	name: "kcal",
	description: "Calculate a calorie and macronutrient goal",
	async execute(msg, args) {
	  
        const userID = msg.author.id;
        const userName = msg.author.tag;
        const img = msg.author.avatarURL();
        const input = msg.content.split(" ");
        

        db.get(userID).then(values => {
            if (!values || values[0] === false || values[1] === false || values[2] === false) {
                msg.reply("you need to have your user profile set up with at least you height, weight, sex, and age logged. For help, use commands \`!help user\` and \`!help log\`.");
            } else if (input.length < 2) {
                msg.reply("this command requires one arguments: your \`<activity level>\`.");
                msg.channel.send("Use command \`!help kcal\` for further information.");
            } else {
                let height = values[0];
                let weight = values[1];
                let age = values[2];
                let sex = values[3] ? "male" : "female";
                let activityLevel;

                if (input[1] === "sedentary" || input[1] == "1") {
                    activityLevel = "sedentary";
                } else if (input[1] === "light" || input[1] == "2") {
                    activityLevel = "light";
                } else if (input[1] === "moderate" || input[1] == "3") {
                    activityLevel = "moderate";
                } else if (input[1] === "heavy" || input[1] == "4") {
                    activityLevel = "active";
                } else if (input[1] === "extreme" || input[1] == "5") {
                    activityLevel = "extreme";
                } else {
                    msg.channel.send("Use command \`!help kcal\` for further information.");
                };
                
                if (values[4] === true) {
                    msg.channel.send(kcalCalculator(sex, age, height, weight, activity, img, userName))
                } else {
                    msg.channel.send(kcalCalculator(sex, age, (height * 2.54), (weight / 2.21), activityLevel, img, userName))
                };
                
            };

        });

	},
};