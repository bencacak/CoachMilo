const Discord = require("discord.js");
const { BFP } = require("fitness-calculator");

const BFPMale = (height, weight, neck, waist, img) => {
    const output = new Discord.MessageEmbed()
        .setColor('#000')
        .setTitle('BFP Calculator')
        .setURL('https://www.npmjs.com/package/fitness-calculator')
        .setAuthor('Coach Milo')
        .setDescription(`This is your estimated body fat percentage.`)
        .setThumbnail(img)
        .addFields(
        { name: "Your Body Fat Percentage", value: `${BFP("male", height, weight, neck, waist)}%` },
        { name: '\u200B', value: '\u200B' },
        { name: "Essential:", value: "2% to 6%", inline: true },
        { name: "Athletes", value: "6% to 14%", inline: true },
        { name: "Fitness:", value: "14% to 18%" , inline: true },
        { name: "Average:", value: "18% to 25%", inline: true },
        { name: "Obese:", value: "+25%", inline: true },
        )
        .setTimestamp()
        .setFooter('Meow Meow');

    return output;
};

const BFPFemale = (height, weight, neck, waist, hips, img) => {
    const output = new Discord.MessageEmbed()
        .setColor('#000')
        .setTitle('BFP Calculator')
        .setURL('https://www.npmjs.com/package/fitness-calculator')
        .setAuthor('Coach Milo')
        .setDescription(`This is your estimated body fat percentage.`)
        .setThumbnail(img)
        .addFields(
        { name: "Your Body Fat Percentage", value: `${BFP("female", height, weight, neck, waist, hips)}%` },
        { name: '\u200B', value: '\u200B' },
        { name: "Essential:", value: "10% to 14%", inline: true },
        { name: "Athletes", value: "14% to 21%", inline: true },
        { name: "Fitness:", value: "21% to 25%" , inline: true },
        { name: "Average:", value: "25% to 32%", inline: true },
        { name: "Obese:", value: "+32%", inline: true },
        )
        .setTimestamp()
        .setFooter('Meow Meow');

    return output;
};

module.exports.BFPFemale = BFPFemale;
module.exports.BFPMale = BFPMale;
