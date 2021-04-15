// There should be no import in this file. Only exports!

function expresso() {
    expressoLitter = 0.08;
    littersOfCoffee = 0;
    if (expressoLiter <= litersOfCoffee) {
      litersOfCoffee -= expressoLiter;
      return true;
    } else {
      return false;
    }
  };
  function longCoffee() {
    longCofeeLitter = 0.15;
    litterOfCofee = 0;
    if (longfCofeeLiter <= litersOfCoffee) {
      litersOfCoffee -= longCofeeLiter;
      return true;
    }
    else {
      return false;
    }
  };
  export default (longCoffee,expresso);