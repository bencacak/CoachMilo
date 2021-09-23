const simplifyTime = input => {

  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let days = 0;

 if (input < 60 && input > 0) {

    let seconds = input;
    
  } else if (input < 3600) {

     minutes = Math.floor(input / 60);
     seconds = input % 60;

  } else {

     hours = Math.floor(input / 3600);
     minutes = Math.floor((input - 3600 * hours) / 60);
     seconds = input % 3600 % 60;

  };

  return `${hours}:${minutes}:${Math.floor(seconds)}`;

};

module.exports.simplifyTime = simplifyTime;