// A function that takes two parameters, the second one being a callback function

function getInput(user, callback) {
  console.log(user, callback("A"));
}

// Leave the line below for tests to work
module.exports = getInput;
