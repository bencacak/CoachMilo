// Imports discord.js library and required metadata
const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on('message', msg => {
  
	//if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(msg, args);
	} catch (error) {
		console.error(error);
		msg.reply('there was an error trying to execute that command!');
	};

});

//Logs to the console when it is ready
client.once('ready', () => {
    console.log(client.user.tag + " is live!");
    client.user.setActivity(`Mrs. Beasley Beezin'`, {type: "WATCHING"});
    
    // Log db info to console for debugging
    /*
    const { db } = require("./alpha-variables.js");
    db.get("819017134105559070").then(values => {
        console.log(values)
    });
    */
});

// Logs the bot into the Discord client
client.login(process.env.TOKEN);
