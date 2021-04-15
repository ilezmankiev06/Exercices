function numberGame(reader, min = 1, max = 100) {
  // code here 
  let random = Math.round(Math.random() * (max - min)) + min;

  console.log("Welcome!");
  console.log("You have to find the right number, between 1 and 100!");
  console.log("Good luck!!");
  
  function number1Callback(number1) {
    let number2 = parseInt(number1);
    if (Number.isInteger(number2)) {
      console.log(number1);
    } else {
      console.log("This was not a number");
      reader.question("Enter a number: ", number1Callback);
    }
    if (number2 > max || number2 < min) {
      console.log("The number is between 1 and 100");
      reader.question("Enter a number: ", number1Callback);
    }
    if (number2 === random) {
      console.log("You won!");
      reader.close();
    } else if (number2 > random) {
      console.log("Too high");
      reader.question("Enter a number: ", number1Callback);
    } else if (number2 < random) {
      console.log("Too low"); 
      reader.question("Enter a number: ", number1Callback); 
    }
  }
  reader.question("Enter a number: ", number1Callback);
}

module.exports = numberGame;
