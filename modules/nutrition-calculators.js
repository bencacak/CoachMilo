const Discord = require("discord.js");
const { calorieNeeds } = require("fitness-calculator");

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
        { name: "Macros:", value: `Coming soon!`, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: "Lose 0.5 lb / week:", value: Math.round(kcalObject.mildWeightLoss), inline: true },
        { name: "Macros:", value: `Coming soon!`, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: "Lose 1 lb / week:", value: Math.round(kcalObject.heavyWeightLoss), inline: true },
        { name: "Macros:", value: `Coming soon!`, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: "Gain 0.5 lb / week:", value: Math.round(kcalObject.mildWeightGain), inline: true },
        { name: "Macros:", value: `Coming soon!`, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: "Gain 1 lb / week:", value: Math.round(kcalObject.heavyWeightGain), inline: true },
        { name: "Macros:", value: `Coming soon!`, inline: true },
        )
        .setTimestamp()
        .setFooter('Meow Meow');

    return output;
};

module.exports.kcalCalculator = kcalCalculator;