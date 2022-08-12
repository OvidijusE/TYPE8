"use strict";

// 1.Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.

class Car {
  constructor(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.turnOn = function () {
      alert(vroom);
    };
  }
}

const newCar = new Car("Audi", "TT", "petrol");
console.log("newCar ===", newCar);
// console.log(newCar.turnOn());

const anotherCar = new Car("VW", "Golf", "diesel");
console.log("anotherCar ===", anotherCar);

// 2.Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

class Car2 {
  constructor(brand, model, engine, price) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = price;
    this.getPrice = function () {
      let kaina = 0;
      if (this.engine === "electric") {
        kaina = 10000;
      } else if (this.engine === "diesel") {
        kaina = 5000;
      }
      return this.basePrice + kaina;
    };
    this.turnOn = function () {
      alert("vroom");
    };
  }
}

const oneCar = new Car2("VW", "Golf", "electric", 10000);
const twoCar = new Car2("Toyota", "Land Cruiser", "diesel", 40000);
console.log(oneCar.getPrice());
console.log(twoCar.getPrice());
