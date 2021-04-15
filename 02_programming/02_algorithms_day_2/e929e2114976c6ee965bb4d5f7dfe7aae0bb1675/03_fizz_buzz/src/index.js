function fizzBuzz(array) {
  // Code the function here.
  const list = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0)
      list.push("FizzBuzz");
    else if (array[i] % 3 === 0)
      list.push("Fizz");
    else if (array[i] % 5 === 0)
      list.push("Buzz");
    else 
      list.push(array[i]);
  }
  return list;
}
// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
