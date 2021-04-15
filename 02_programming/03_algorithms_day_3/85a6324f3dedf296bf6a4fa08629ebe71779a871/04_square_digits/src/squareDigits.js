function squareDigits(number) {
  // Code here
  if (Number.isInteger(number)) {
    return parseInt(number.toString().split("").map(number => (parseInt(number) * parseInt(number))).join(""));
  } else {
    throw "not a integer!";
  }
}
console.log(squareDigits(9129));
// Leave the line below for tests to work
module.exports = squareDigits;
