const Discord = require("discord.js");
const { calorieNeeds } = require("fitness-calculator");

const generateLink = (sex, age, height, weight, activity, goal) => {

    const query = "https://www.calculator.net/macro-calculator.html?ctype=metric";
    let ageValue = `&cage=${age.toString()}`
    let sexValue = `&csex=${sex.charAt(0)}`
    let heightValue = `&cheightmeter=${height.toString()}`
    let weightValue  = `&ckg=${weight.toString()}`

    let activityValue;
    let goalValue;

    if (goal === "balance") {
        goalValue = `&cgoal=m`
    } else if (goal === "mildWeightLoss") {
        goalValue = `&cgoal=l`
    } else if (goal === "heavyWeightLoss") {
        goalValue = `&cgoal=l1`
    } else if (goal === "mildWeightGain") {
        goalValue = `&cgoal=g`
    } else if (goal === "heavyWeightGain") {
        goalValue = `&cgoal=g1`
    } else {
        goalValue = `&cgoal=m`
    };

    if (activity === "sedentary") {
        activityValue = `&cactivity=1.2`
    } else if (activity === "light") {
        activityValue = `&cactivity=1.375`
    } else if (activity === "moderate") {
        activityValue = `&cactivity=1.465`
    }
    else if (activity === "active") {
        activityValue = `&cactivity=1.55`
    } else if (activity === "extreme") {
        activityValue = `&cactivity=1.725`
    } else {
        activityValue = `&cactivity=1.2`
    };

    const addressEnd = `&cmop=0&cformula=m&cfatpct=20&printit=0&x=90&y=19`

    return query + ageValue + sexValue + heightValue + weightValue + activityValue + goalValue + addressEnd;

}

const kcalCalculator = (sex, age, height, weight, activity, img, userName) => {

    const kcalObject = calorieNeeds(sex, age, height, weight, activity)

    const output = new Discord.MessageEmbed()
        .setColor('#000')
        .setTitle(userName)
        .setURL('https://www.npmjs.com/package/fitness-calculator')
        .setAuthor('Coach Milo')
        .setDescription(`This what you should eat at a \`${activity}\` activity level.`)
        .setThumbnail(img)
        .addFields(
        { name: "Maintain your weight:", value: Math.round(kcalObject.balance), inline: true },
        { name: "Macros:", value: `[Click Here](${generateLink(sex, age, height, weight, activity, "balance")})`, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: "Lose 0.5 lb / week:", value: Math.round(kcalObject.mildWeightLoss), inline: true },
        { name: "Macros:", value: `[Click Here](${generateLink(sex, age, height, weight, activity, "mildWeightLoss")})`, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: "Lose 1 lb / week:", value: Math.round(kcalObject.heavyWeightLoss), inline: true },
        { name: "Macros:", value: `[Click Here](${generateLink(sex, age, height, weight, activity, "heavyWeightLoss")})`, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: "Gain 0.5 lb / week:", value: Math.round(kcalObject.mildWeightGain), inline: true },
        { name: "Macros:", value: `[Click Here](${generateLink(sex, age, height, weight, activity, "mildWeightGain")})`, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: "Gain 1 lb / week:", value: Math.round(kcalObject.heavyWeightGain), inline: true },
        { name: "Macros:", value: `[Click Here](${generateLink(sex, age, height, weight, activity, "heavyWeightGain")})`, inline: true },
        )
        .setTimestamp()
        .setFooter('Meow Meow');

    return output;
};

module.exports.kcalCalculator = kcalCalculator;