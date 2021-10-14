// Imports required pace converter converter functions
const simplify = require("../functions/simplifytime.js");
const standardize = require("../functions/standardizetime.js");
const pace = require("../functions/paceconverter.js");


module.exports = {
	name: 'pace',
	description: 'Converts Pace',
	async execute(msg, args) {
	  
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
    
	},
};


 