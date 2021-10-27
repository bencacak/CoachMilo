const { db } = require("../alpha-variables.js");
const { logHelp } = require("../modules/help.js")

module.exports = {
	name: 'log',
	description: 'Log your stats into the database',
	async execute(msg, args) {
	  
        const userID = msg.author.id;
        const inputs = msg.content.split(" ");

        if (inputs.length < 3) msg.channel.send(logHelp);

        if (inputs.length >= 3) {
            let item = inputs[1];
            let value = inputs[2];

            if (item === "height") {
                db.get(userID).then(values => {
                    values[0] = parseFloat(value);
                    db.set(userID, values)
                });
                msg.channel.send(`I have set your ${item} to \`${value}\`.`)
            } else if (item === "weight") {
                db.get(userID).then(values => {
                    values[1] = parseFloat(value);
                    db.set(userID, values)
                });
                msg.channel.send(`I have set your ${item} to \`${value}\`.`)
            } else if (item === "age") {
                db.get(userID).then(values => {
                    values[2] = parseInt(value);
                    db.set(userID, values)
                });
                msg.channel.send(`I have set your ${item} to \`${value}\`.`)
            } else if (item ==="sex") {
                db.get(userID).then(values => {
                    if (value === "male" || value ==="m") {
                        values[3] = true;
                    } else {
                        values[3] = false;
                    };
                    db.set(userID, values)
                });
                msg.channel.send(`I have set your ${item} to \`${value}\`.`)
            } else if (item === "metric") {
                db.get(userID).then(values => {
                    if (value === "on") {
                        values[4] = true;
                    } else if (value === "off") {
                        values[4] = false;
                    } else {
                        values[4] = false;
                    };
                    db.set(userID, values)
                });
                msg.channel.send(`I have set your ${item} to \`${value}\`.`)
            } else if (item === "5k") {
                db.get(userID).then(values => {
                    values[5] = value;
                    db.set(userID, values)
                });
                msg.channel.send(`I have set your ${item} to \`${value}\`.`)
            } else if (item === "10k") {
                db.get(userID).then(values => {
                    values[6] = value;
                    db.set(userID, values)
                });
                msg.channel.send(`I have set your ${item} to \`${value}\`.`)
            } else if (item === "half") {
                db.get(userID).then(values => {
                    values[7] = value;
                    db.set(userID, values)
                });
                msg.channel.send(`I have set your ${item} to \`${value}\`.`)
            } else if (item === "marathon") {
                db.get(userID).then(values => {
                    values[8] = value;
                    db.set(userID, values)
                });
                msg.channel.send(`I have set your ${item} to \`${value}\`.`)
            } else if (item === "ftp" || item === "FTP"){
                db.get(userID).then(values => {
                    values[9] = parseInt(value);
                    db.set(userID, values)
                });
                msg.channel.send(`I have set your ${item} to \`${value}\`.`)
            } else {
                msg.channel.send(logHelp);
            }
        };

	},
};