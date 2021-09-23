
const paceConverter = async (pace, unit) => {

  if (unit === "km") {
    return pace * 1.62;
  };
  if (unit === "mi") {
    return pace / 1.62;
  };
 
};

module.exports.paceConverter = paceConverter;