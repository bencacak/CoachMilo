const { db } = require("../alpha-variables.js");
const { logHelp } = require("./help.js");

const log = async (userID, item, value) => {

    try {
        if (item === "height") {
            await db.get(userID).then(values => {
                values[0] =  parseFloat(value);
                db.set(userID, values)
            });
            return `I have set your ${item} to \`${value}\`.`
        } else if (item === "weight") {
            await db.get(userID).then(values => {
                values[1] = parseFloat(value);
                db.set(userID, values)
            });
            return `I have set your ${item} to \`${value}\`.`
        } else if (item === "age") {
            await db.get(userID).then(values => {
                values[2] =  parseInt(value);
                db.set(userID, values)
            });
            return `I have set your ${item} to \`${value}\`.`
        } else if (item ==="sex") {
            await db.get(userID).then(values => {
                if (value === "male" || value ==="m") {
                    values[3] = true;
                } else {
                    values[3] = false;
                };
                db.set(userID, values)
            });
            return `I have set your ${item} to \`${value}\`.`
        } else if (item === "metric") {
            await db.get(userID).then(values => {
                if (value === "on") {
                    values[4] = true;
                } else if (value === "off") {
                    values[4] = false;
                } else {
                    values[4] = false;
                };
                db.set(userID, values)
            });
            return `I have set your ${item} to \`${value}\`.`
        } else if (item === "5k") {
            await db.get(userID).then(values => {
                values[5] = value;
                db.set(userID, values)
            });
            return `I have set your ${item} to \`${value}\`.`
        } else if (item === "10k") {
            await db.get(userID).then(values => {
                values[6] = value;
                db.set(userID, values)
            });
            return `I have set your ${item} to \`${value}\`.`
        } else if (item === "half") {
            await db.get(userID).then(values => {
                values[7] = value;
                db.set(userID, values)
            });
            return `I have set your ${item} to \`${value}\`.`
        } else if (item === "marathon") {
            await db.get(userID).then(values => {
                values[8] = value;
                db.set(userID, values)
            });
            return `I have set your ${item} to \`${value}\`.`
        } else if (item === "ftp" || item === "FTP"){
            await db.get(userID).then(values => {
                values[9] = parseInt(value);
                db.set(userID, values)  
            });
        return `I have set your ${item} to \`${value}\`.`
        } else {
        return logHelp;
        };
    } catch (err) {
        console.error(err);
    };
};
module.exports.log = log;