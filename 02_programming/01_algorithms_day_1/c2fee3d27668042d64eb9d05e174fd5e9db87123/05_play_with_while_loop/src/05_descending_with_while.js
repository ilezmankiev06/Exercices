// ## Decreasing Iteration on arrays using while
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

const litteralDigits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
let i = 0;
while (i < litteralDigits.length) {
  i++;
  litteralDigits.reverse();
  console.log(litteralDigits[i-1]);
  litteralDigits.reverse();
}