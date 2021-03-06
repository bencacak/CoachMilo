const  Discord = require("discord.js");
const fitnessCalculatorFunctions = require("fitness-calculator");

const imperialTdee = (sex, age, height, weight, img) => {
    const output = new Discord.MessageEmbed()
        .setColor('#000')
        .setTitle('TDEE Calculator')
        .setURL('https://www.npmjs.com/package/fitness-calculator')
        .setAuthor('Coach Milo')
        .setDescription(`This is your estimated daily energy expediture.`)
        .setThumbnail(img)
        .addFields(
        { name: 'Your BMR', value: Math.round(fitnessCalculatorFunctions.BMR(sex, age, height, weight)) },
        { name: '\u200B', value: '\u200B' },
        { name: `Sedentary:`, value: `${Math.round(fitnessCalculatorFunctions.TDEE(sex, age, height, weight, 'sedentary'))} kcal`, inline: true },
        { name: 'Light Activity:', value: `${Math.round(fitnessCalculatorFunctions.TDEE(sex, age, height, weight, 'light'))} kcal`, inline: true },
        { name: 'Moderate Activity:', value: `${Math.round(fitnessCalculatorFunctions.TDEE(sex, age, height, weight, 'moderate'))} kcal` , inline: true },
        { name: 'Heavy Activity:', value: `${Math.round(fitnessCalculatorFunctions.TDEE(sex, age, height, weight, 'active'))} kcal`, inline: true },
        { name: 'Extreme Activity:', value: `${Math.round(fitnessCalculatorFunctions.TDEE(sex, age, height, weight, 'extreme'))} kcal`, inline: true },
        )
        .setTimestamp()
        .setFooter('Meow Meow');

    return output;
};

const metricTdee = (sex, age, height, weight, img) => {
    
    const output = new Discord.MessageEmbed()
        .setColor('#000')
        .setTitle('TDEE Calculator')
        .setURL('https://www.npmjs.com/package/fitness-calculator')
        .setAuthor('Coach Milo')
        .setDescription(`This is your estimated daily energy expediture.`)
        .setThumbnail(img)
        .addFields(
            { name: 'Your BMR', value: Math.round(fitnessCalculatorFunctions.BMR(sex, age, height, weight)) },
            { name: '\u200B', value: '\u200B' },
            { name: `Sedentary:`, value: `${Math.round(fitnessCalculatorFunctions.TDEE(sex, age, height, weight, 'sedentary'))} kcal`, inline: true },
            { name: 'Light Activity:', value: `${Math.round(fitnessCalculatorFunctions.TDEE(sex, age, height, weight, 'light'))} kcal`, inline: true },
            { name: 'Moderate Activity:', value: `${Math.round(fitnessCalculatorFunctions.TDEE(sex, age, height, weight, 'moderate'))} kcal` , inline: true },
            { name: 'Heavy Activity:', value: `${Math.round(fitnessCalculatorFunctions.TDEE(sex, age, height, weight, 'active'))} kcal`, inline: true },
            { name: 'Extreme Activity:', value: `${Math.round(fitnessCalculatorFunctions.TDEE(sex, age, height, weight, 'extreme'))} kcal`, inline: true },
        )
        .setTimestamp()
        .setFooter('Meow Meow');

    return output;
};

module.exports.metricTdee = metricTdee;
module.exports.imperialTdee = imperialTdee;