// Here you can import functions from 'container' and 'drink'
import {ser} from "./container.js";
import {drinks} from "./drinks.js";
const coffeeMachine = {
    litersOfCoffee: 0,
    fillWithLitersOfCoffee: function (liters) {
      this.litersOfCoffee += liters;
}