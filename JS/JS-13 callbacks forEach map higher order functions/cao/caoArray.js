"use strict";

// 1.Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

const cars = ["BMW", "VW", "Audi"];

// cars.forEach((car) => {
//   console.log(car);
// });

// cars.forEach((car) => console.log(car));

// 2.Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

// cars.forEach((car, i) => {
//   console.log(i + `: ${car}`);
// });

// cars.forEach((car, i) => console.log(i + `: ${car}`));

// 3.Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

// const friendsArray = ["juoZas", "PEtras", "EiMANTas", "EmilijA"];

// const newFriendsArray = friendsArray.map((value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
// console.log("newFriendsArray ===", newFriendsArray);

// 4.Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

const agesArray = [
  1, 81, 5, 46, 80, 94, 84, 86, 17, 84, 69, 31, 63, 35, 19, 3, 75, 65, 89, 89, 47, 39, 81, 41, 54, 21, 9, 41, 22, 9, 82,
  36, 45, 41, 26, 47, 94, 56, 4, 60, 36, 38, 89, 32, 24, 27, 44, 37, 8, 17,
];

// const skaiciai = agesArray.filter((num) => {
//   if (num >= 18) {
//     return true;
//   }
// });
// console.log("skaiciai ===", skaiciai);

// const skaiciai = agesArray.filter((num) => num >= 18);
// console.log("skaiciai ===", skaiciai);

// 5.Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

const miestaiArr = ["Vilnius", "Kaunas", "Klaipėda", "Kybartai", "Pabradė", "pakruojis"];

// const miestai = miestaiArr.find((city) => {
//   if (city.charAt(0) === "K") {
//     return true;
//   }
// });
// console.log("miestai ===", miestai);

// const miestai = miestaiArr.find((city) => city.charAt(0) === "K");
// console.log("miestai ===", miestai);

// 6.Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

// const miestai2 = miestaiArr.some((city) => {
//   if (city.charAt(0) === city.charAt(0).toLowerCase()) {
//     return true;
//   }
// });
// console.log("miestai2 ===", miestai2);

// const miestai2 = miestaiArr.some((city) => city.charAt(0) === city.charAt(0).toLowerCase());
// console.log("miestai2 ===", miestai2);

// 7.Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.

// const miestai3 = miestaiArr.every((city) => {
//   if (city.charAt(0) === city.charAt(0).toUpperCase()) {
//     return true;
//   }
// });
// console.log("miestai3 ===", miestai3);

// const miestai3 = miestaiArr.every((city) => city.charAt(0) === city.charAt(0).toUpperCase());
// console.log("miestai3 ===", miestai3);
