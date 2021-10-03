const Discord = require("discord.js");

const readMe = new Discord.MessageEmbed()
  .setColor('#000')
  .setTitle('Command Help')
  .setURL("https://github.com/bencacak/CoachMilo/blob/main/README.md")
  .setAuthor("@Coach Milo, et al.")
  .setDescription(`Click the link to find out more about my commands. Looking for assistance for a specific command? Try \`!help <command>\` to solve your problem.`)
  .attachFiles(['./assets/milo.jpg'])
  .setThumbnail('attachment://milo.jpg')
  .setTimestamp()
  .setFooter('Meow Meow');

const tdeeHelp = new Discord.MessageEmbed()
  .setColor('#000')
  .setTitle('\`!tdee\` Command Help')
  .setURL("https://github.com/bencacak/CoachMilo/blob/main/README.md")
  .setAuthor("@Coach Milo, et al.")
  .setDescription(`Click the link to find out more about my commands. Looking for assistance for a specific command? Try \`!help <command>\` to solve your problem.`)
  .attachFiles(['./assets/milo.jpg'])
  .setThumbnail('attachment://milo.jpg')
  .addFields(
		{ name: 'Syntax:', value: '\`!tdee <male (m) / female (f)> <age (number only)> <height in inches (number only)> <weight in pounds (number only)>\`' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Example:', value: '\`!tdee m 23 74 200\`', inline: true },
		{ name: 'Helpful Tip:', value: 'use \`!tdee metric\` to replace height in inches with centimeters, and weight in pounds with kilograms.' }
	)
  .setTimestamp()
  .setFooter('Meow Meow');

const bmiHelp = new Discord.MessageEmbed()
  .setColor('#000')
  .setTitle('\`!bmi\` Command Help')
  .setURL("https://github.com/bencacak/CoachMilo/blob/main/README.md")
  .setAuthor("@Coach Milo, et al.")
  .setDescription(`Click the link to find out more about my commands. Looking for assistance for a specific command? Try \`!help <command>\` to solve your problem.`)
  .attachFiles(['./assets/milo.jpg'])
  .setThumbnail('attachment://milo.jpg')
  .addFields(
		{ name: 'Syntax:', value: '\`!bmi <height in inches (number only)> <weight in pounds (number only)>\`' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Example:', value: '\`!bmi 74 200\`', inline: true },
		{ name: 'Helpful Tip:', value: 'use \`!bmi metric\` to replace height in inches with centimeters, and weight in pounds with kilograms.' }
	)
  .setTimestamp()
  .setFooter('Meow Meow');

const paceHelp = new Discord.MessageEmbed()
  .setColor('#000')
  .setTitle('\`!pace\` Command Help')
  .setURL("https://github.com/bencacak/CoachMilo/blob/main/README.md")
  .setAuthor("@Coach Milo, et al.")
  .setDescription(`Click the link to find out more about my commands. Looking for assistance for a specific command? Try \`!help <command>\` to solve your problem.`)
  .attachFiles(['./assets/milo.jpg'])
  .setThumbnail('attachment://milo.jpg')
  .addFields(
		{ name: 'Syntax:', value: '\`!pace XX:XX <km/mi>\`' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Example:', value: '\`!pace 6:37 km\`', inline: true }
	)
  .setTimestamp()
  .setFooter('Meow Meow');

module.exports.readMe = readMe;
module.exports.tdeeHelp = tdeeHelp;
module.exports.paceHelp = paceHelp;
module.exports.bmiHelp = bmiHelp;