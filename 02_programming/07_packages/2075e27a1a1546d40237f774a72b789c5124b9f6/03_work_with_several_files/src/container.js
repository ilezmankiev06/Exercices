// There should be no import in this file. Only exports!
const serveACup = function (quantityInCentiliters) {
    if (this.litersOfCoffee - quantityInCentiliters >= 0) {
      this.litersOfCoffee -= quantityInCentiliters;
      return true;
    } else {
      return false;
    }
  },
  