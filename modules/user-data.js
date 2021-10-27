const Discord = require("discord.js");

const userData = (user, values) => {

    let height = "in";
    let weight = "lb";

    if (values[4] === true) {
        height = "cm";
        weight = "kg";
    };

    const output = new Discord.MessageEmbed()
        .setColor('#000')
        .setTitle(`${user}`)
        //.setURL('https://www.npmjs.com/package/fitness-calculator')
        .setAuthor('Coach Milo')
        .setDescription(`Here is what I have in my data base!`)
        .attachFiles(['./assets/milo.jpg'])
        .setThumbnail('attachment://milo.jpg')
        .addFields(
        { name: "Height:", value: `${values[0]} ${height}`, inline: true },
        { name: "Weight:", value: `${values[1]} ${weight}`, inline: true },
        { name: "Age:", value: `${values[2]}`, inline: true },
        { name: "Is Male:", value: `${values[3]}`, inline: true },
        { name: "Uses Metric:", value: `${values[4]}`, inline: true },
        { name: "5k PR:", value: `${values[5]}`, inline: true },
        { name: "10k PR:", value: `${values[6]}`, inline: true },
        { name: "Half Marathon PR:", value: `${values[7]}`, inline: true },
        { name: "Full Marathon PR:", value: `${values[8]}`, inline: true },
        { name: "Functional Threshold Power:", value: `${values[9]}`, inline: true },
        )
        .setTimestamp()
        .setFooter('Meow Meow');
    
    return output;

};

module.exports.userData = userData;