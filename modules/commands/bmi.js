const { imperialBMI, metricBMI } = require("../functions/BMIinfo.js");
const { BMI } = require("fitness-calculator");

module.exports = {
	name: 'bmi',
	description: 'calculate your BMI',
	async execute(msg, args) {
	  
    if (msg.content.includes("metric")) {

      const command = "!bmi metric ";
      const input = msg.content.split(command)[1];
      const values = input.split(' ');
      const height = Number.parseFloat(values[0]);
      const weight = Number.parseFloat(values[1]);    
      msg.reply(metricBMI(height, weight, BMI(height, weight)));

    } else {

      const command = '!bmi ';
      const input = msg.content.split(command)[1];
      const values = input.split(' ');
      const height = Number.parseFloat(values[0]) * 2.54;
      const weight = Number.parseFloat(values[1]) / 2.21;
      msg.reply(imperialBMI(height, weight, BMI(height, weight)));
      
    };

	},
};