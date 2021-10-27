const { imperialTdee, metricTdee } = require("../modules/tdeeinfo.js");

module.exports = {
	name: 'tdee',
	description: 'calculate you tdee',
	async execute(msg, args) {

    if (msg.content.includes("metric")) {
      
      const command = '!tdee metric';
      const input = msg.content.split(command)[1];
      input.toLowerCase;
      const values = input.split(' ');
      let sex;
      const age = Number.parseFloat(values[1]);
      const height = Number.parseFloat(values[2]);
      const weight = Number.parseFloat(values[3]);
      if (values[0] === 'm' || values[0] === 'male') {
        sex = 'male';
      } else {
        sex = 'female';
      };
      msg.reply(metricTdee(sex, age, height, weight));

    } else {

      const command = '!tdee ';
      const input = msg.content.split(command)[1];
      input.toLowerCase;
      const values = input.split(' ');
      let sex;
      const age = Number.parseFloat(values[1]);
      const height = Number.parseFloat(values[2]) * 2.54;
      const weight = Number.parseFloat(values[3]) / 2.21;
      if (values[0] === 'm' || values[0] === 'male') {
        sex = 'male';
      } else {
        sex = 'female';
      };
      msg.reply(imperialTdee(sex, age, height, weight));

    };

	},
};