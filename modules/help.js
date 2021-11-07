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

const logHelp = [
    "***Syntax:***",
    "\`!log <parameter> <value>\`",
    " ",
    "**__List of parameters and accepted values:__**",
    " ",
    "```",
    "<height> number in inches or centimeters",
    "<weight> number in pounds or kilograms",
    "<age> age in years",
    "<sex> male or female",
    "<metric> on or off -- toggle between metric and imperial",
    "<5K> hh:mm:ss -- set 5k PR",
    "<10k> hh:mm:ss -- set 10k PR",
    "<half> hh:mm:ss -- set half-marathon PR",
    "<full> hh:mm:ss -- set marathon PR",
    "<ftp> number in watts",
    "```",
    " ",
    "***Examples:***",
    "\`!log sex male\`",
    "\`!log weight 200\`",
    "\`!log 5k 26:00\`",
    "!log metric on"
];

const userHelp = [
    "__**Initailize User Profile:**__",
    "User profile **MUST** be initialized using \`!user set\` prior to logging information!",
    " ",
    "Use \`!user reset\` to wipe stats from database and reaplce with system defaults",
    " ",
    "Use \`!user\` to show stats"
];

const fatHelp = [
    "**Find Out Your Body Fat Percentage**",
    " ",
    "*Syntax:* \`!fat <neck> <waist> <hips>\`",
    " ",
    "```",
    "<neck> number in inches or centimeters only",
    "<waist> number in inches or centimeters only",
    "<hips> number in inches or centimeters only",
    "--- <hips> required for females only",
    "```"
];

const kcalHelp = new Discord.MessageEmbed()
    .setColor('#000')
    .setTitle('\`!kcal\` Command Help')
    .setURL("https://github.com/bencacak/CoachMilo/blob/main/README.md")
    .setAuthor("@Coach Milo, et al.")
    .setDescription(`Click the link to find out more about my commands. Looking for assistance for a specific command? Try \`!help <command>\` to solve your problem.`)
    .attachFiles(['./assets/milo.jpg'])
    .setThumbnail('attachment://milo.jpg')
    .addFields(
        { name: 'Syntax:', value: '\`!kcal <activity level>\`', inline: true },
        { name: 'Example:', value: '\`!kcal 2\`', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'Sedentary:', value: '\`sedentary\` or \`1\`', inline: true },
        { name: 'Light Activity:', value: '\`light\` or \`2\`', inline: true },
        { name: 'Moderate Activity:', value: '\`moderate\` or \`3\`', inline: true },
        { name: 'Heavy Activity:', value: '\`heavy\` or \`4\`', inline: true },
        { name: 'Extreme Activity:', value: '\`extreme\` or \`5\`', inline: true },
    )
    .setTimestamp()
    .setFooter('Meow Meow');
module.exports = { readMe, kcalHelp, fatHelp, userHelp, logHelp, paceHelp, bmiHelp, tdeeHelp }