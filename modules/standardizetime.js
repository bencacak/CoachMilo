const standardizeTime = input => {

  const values = input.split(":");
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (values.length === 1) {

    seconds = parseInt(values[0]);

  } else if (values.length === 2) {

    minutes = parseInt(values[0]);
    seconds = parseInt(values[1]);

  } else if (values.length === 3) {

    hours = parseInt(values[0]);
    minutes = parseInt(values[1]);
    seconds = parseInt(values[2]);

  } else if (values.length === 4) {

    days = parseInt(values[0]);
    hours = parseInt(values[1]);
    minutes = parseInt(values[2]);
    seconds = parseInt(values[3]);

  } else {

    return;

  };

  const finalValue = seconds + (minutes * 60) + (hours * 60 * 60) + (days * 24 * 60 * 60);

  return finalValue;

};

module.exports.standardizeTime = standardizeTime;