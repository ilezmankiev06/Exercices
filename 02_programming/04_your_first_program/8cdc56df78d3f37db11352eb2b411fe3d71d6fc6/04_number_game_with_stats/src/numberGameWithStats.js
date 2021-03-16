function numberGameWithStats(reader, min = 1, max = 100) {
  // Code here
  let random = Math.round(Math.random() * (max - min)) + min;
  let counter = 0;
  console.log("Welcome!\nYou have to find the right number, between 1 and 100!\nGood luck!!");

  function number1Callback(number1) {
    //variables
    let number2 = parseInt(number1);
    counter = counter + 1;

    if (Number.isInteger(number2)) {
      number1;
    } else {
      console.log("This was not a number");
      reader.question(`${counter}: Enter a number: `, number1Callback);
    }
    //condition si number est </> que random
    if (number2 > max || number2 < min) {
      console.log("The number is between 1 and 100");
      reader.question(`${counter}: Enter a number: `, number1Callback);
    }
    //condition =/</> que random
    if (number2 === random) {
      console.log(`${counter}: You won!`);
      reader.close();
    } else if (number2 > random) {
      console.log("Too high");
      reader.question(`${counter}: Enter a number: `, number1Callback);
    } else if (number2 < random) {
      console.log("Too low");
      reader.question(`${counter}: Enter a number: `, number1Callback);
    }
  }
  reader.question("Enter a number: ", number1Callback);
}

module.exports = numberGameWithStats;
