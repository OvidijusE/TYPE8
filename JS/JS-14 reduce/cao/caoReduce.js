"use strict";

// 1.Parašyk array su penkiais mėgstamiausiais tavo skaičiais. Su reduce visus juos sudėk ir grąžink vieną skaičių.

const favoriteNumber = [10, 21, 8, 99, 33];

const smma = favoriteNumber.reduce((a, b) => a + b, 0);
console.log("smma ===", smma);

// 2.Ne vien skaičius sudėti galime. Nusikopijuok array (["BMW", "MCB", "VWG", "Toyota", "AUDI"]) ir naudojant reduce - grąžink skaičių, kiek šiame array elementų yra su 3 simboliais (p.s. efektyviau turbūt su filter, bet šiuo atveju išbandome reduce).

const carArray = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

const simbols = carArray.reduce((a, b) => (b.length === 3 ? a + 1 : a), 0);
console.log("simbols ===", simbols);

// 3.Sukurk array su daug skaičių. Grąžink didžiausią skaičių iš array naudojant reduce.

const daugSkaiciu = [
  1, 81, 5, 46, 80, 94, 84, 86, 17, 84, 69, 31, 63, 35, 19, 3, 75, 65, 89, 89, 47, 39, 81, 41, 54, 21, 9, 41, 22, 9, 82,
  36, 45, 41, 26, 47, 56, 4, 60, 36, 38, 89, 32, 24, 27, 44, 37, 8, 17,
];

const skaiciaiArray = daugSkaiciu.reduce((a, b) => (a > b ? a : b));
console.log("skaiciaiArray ===", skaiciaiArray);
