function range(number1, number2) {
  // Code the function here.
  const monTableau = [];
  let depart = number1;
  if (number1 < number2) {
    for (let i = 0; i <= (number2 - number1); i++) {
      monTableau[i] = depart;
      depart++;
    }
  } else if (number1 > number2) {
    for (let i = 0; i <= (number1 - number2); i++) {
      monTableau[i] = depart;
      depart--;
    }
  } else {
    monTableau.push(depart);
  }
  return monTableau;
}

// Do not remove last lines, it is for tests
module.exports = range; 