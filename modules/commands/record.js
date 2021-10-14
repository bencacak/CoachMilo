const Database = require("@replit/database");
const db = new Database();


module.exports = {
	name: 'record',
	description: 'creates and modifies user profiles',
	async execute(msg, args) {
        
        const userName = toString(msg.author.tag);

        const instructions = [
            "**You have set up your user record. Time to fill in some information!**",
            "---",
            "*Syntax:*",
            "\`!record <argument> <value>\`",
            "---",
            "*Accepted arguments and values:*",
            "\`<age>\`",
            "\`<weight>\` number only",
            "\`<height>\` number only",
            "\`<sex>\` male or female",
            "\`<metric>\` \`on\` or \`off\` -- 'on' will let you input height and weight as cm/kg, 'off' will let you input height and weight as in/lb",
            "---",
            "\`!record new\` will wipe your user record or creat a new record for someone who has not used the feature yet",
            "\`!record\` will show your current stats",
            "Use \`!help record\` for more information"
        ]
        class User {
            constructor (height, weight, age, sex, usesMetric) {
                this.height = height;
                this.weight = weight;
                this.age = age;
                this.sex = sex;
                this.usesMetric = usesMetric;
            }
        };
        
        const message = msg.content.split("!record ")[1];
        let argument;
        let value;

        if (!message) {

            db.get(userName).then(userData => {
                msg.channel.send(JSON.stringify(userData))
            });

        } else if (message === "new"){
            
            db.set(userName, new User(0, 0, 0, "female", false));
            msg.channel.send(instructions);

        } else {
            argument = message.split(" ")[0];
            value = message.split(" ")[1];

            if (argument === "weight") {
                db.get(userName).then(userData => {
                    let newWeight = parseFloat(value);
                    db.set(userName, new User(userData.height, newWeight, userData.age, userData.sex, userData.usesMetric));
                    msg.reply(`Your weight has been recorded as \`${newWeight}\``)
                });
            };
            if (argument === "height") {
                db.get(userName).then(userData => {
                    let newHeight = parseFloat(value);
                    db.set(userName, new User(newHeight, userData.weight, userData.age, userData.sex, userData.usesMetric));                    
                    msg.reply(`Your height has been recorded as \`${newHeight}\``)
    
                });
            };
            if (argument === "age") {
                db.get(userName).then(userData => {
                    let age = parseInt(value);
                    db.set(userName, new User(userData.height, userData.weight, age, userData.sex, userData.usesMetric));
                    msg.reply(`Your age has been recorded as \`${age}\``)
                    
                });
            };
            if (argument === "sex") {
                db.get(userName).then(userData => {
                    let sex;
                    if (value === "f" || value === "female"){ sex = "female" } else { sex = "male" };
                    db.set(userName, new User(userData.height, userData.weight, userData.age, sex, userData.usesMetric));
                    msg.reply(`Your sex has been recorded as \`${sex}\``)
                   
                });
            };
            if (argument === "metric") {
                db.get(userName).then(userData => {
                    let isMetric;
                    if (value === "on") { isMetrc = true } else { isMetric = false };
                    db.set(userName, new User(userData.height, userData.weight, userData.age, userData.sex, isMetric));
                    msg.reply(`Your metric system status has been recorded as \`${isMetric}\``)
                    
                });
            }; // Ends argument conditionals
        };
	},
};
module.exports.db = db;
