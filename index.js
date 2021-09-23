// Imports discord.js library and required metadata
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// Imports exported functions
// Pace converter
const simplify = require("./modules/paceconverter/simplifytime.js");
const standardize = require("./modules/paceconverter/standardizetime.js");
const pace = require("./modules/paceconverter/paceconverter.js");

// Looks for keywords in messages to reply to the channel and users
client.on("message", async msg => {
  
  if (msg.author.bot) { 
    return;
  };

  // Starts the command listener
  if (msg.content.startsWith("!")) {
    
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/);
	  const command = args.shift().toLowerCase();
    
    // Will convert a given running pace to min/km or min/mi
    if (command === "pace") {

      const value = msg.content.split("!pace ")[1];
      
      let unit;
      let newUnit;

      if (msg.content.includes("k")) {
        unit = "km";
        newUnit = "mi";
      } else if (msg.content.includes("mi")) {
        unit = "mi";
        newUnit = "km";
      };

      try {
        let standardizedPace = await standardize.standardizeTime(value);
        let convertedPace = await pace.paceConverter(standardizedPace, unit);
        let newSimplifiedPace = await simplify.simplifyTime(convertedPace);
        await msg.reply(`a ${value} is equal to a ${newSimplifiedPace} ${newUnit}.`)
      } catch (error) {
       console.log(error);
      };
      
    }; 

  }; // Ends command prefix listener

}); // Ends message listener

//Logs to the console when it is ready
client.once('ready', () => {
	console.log(client.user.tag + " is live!");
  client.user.setActivity("Chase Squirrely");

});

//Gets the token from the .env
client.login(process.env.TOKEN);