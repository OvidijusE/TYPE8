"use strict";

// ----------------SWITCH-------------------
// 1.

// let car = "porsche";

// switch (car) {
//   case (car = "vw"):
//     console.log("VW Group");
//     break;
//   case (car = "audi"):
//     console.log("VW Group");
//     break;
//   case (car = "bentley"):
//     console.log("VW Group");
//     break;
//   case (car = "bugatti"):
//     console.log("VW Group");
//     break;
//   case (car = "lamborghini"):
//     console.log("VW Group");
//     break;
//   case (car = "porsche"):
//     console.log("VW Group");
//     break;
//   case (car = "bmw"):
//     console.log("BMW group");
//     break;
//   case (car = "mini"):
//     console.log("BMW group");
//     break;
//   case (car = "rolls-royce"):
//     console.log("BMW group");
//     break;
//   default:
//     console.log("Nei vienai");
// }

// 2.

// let userInput = "ananasas";

// switch (userInput) {
//   case (userInput = "obuolys"):
//     console.log("Vaisius");
//     break;
//   case (userInput = "apelsinas"):
//     console.log("Vaisius");
//     break;
//   case (userInput = "ananasas"):
//     console.log("Vaisius");
//     break;
//   case (userInput = "mandarinas"):
//     console.log("Vaisius");
//     break;
//   case (userInput = "bananas"):
//     console.log("Daržovė");
//     break;
//   case (userInput = " morka"):
//     console.log("Daržovė");
//     break;
//   case (userInput = "moliūgas"):
//     console.log("Daržovė");
//     break;
//   case (userInput = "salieras"):
//     console.log("Daržovė");
//     break;
//   case (userInput = "bulvė"):
//     console.log("Daržovė");
//     break;
//   case (userInput = "cukinija"):
//     console.log("Daržovė");
//     break;
//   default:
//     console.log("Error");
// }

// 3.

// let weekDay = 2;

// switch (weekDay) {
//   case (weekDay = 0):
//     console.log("Pirmadienis");
//     break;
//   case (weekDay = 1):
//     console.log("Antradienis");
//     break;
//   case (weekDay = 2):
//     console.log("Trečiadienis");
//     break;
//   case (weekDay = 3):
//     console.log("Ketvirtadienis");
//     break;
//   case (weekDay = 4):
//     console.log("Penktadienis");
//     break;
//   case (weekDay = 5):
//     console.log("Šeštadienis");
//     break;
//   case (weekDay = 6):
//     console.log("Sekmadienis");
//     break;
//   default:
//     console.log("Tokios dienos nėra");
// }

// ----------------TERNARY-------------------

// 1.

// let firstName = "Ovidijus";
// let myName = firstName.length <= 6 ? "Short name" : "Long name";
// console.log(myName);

// 2.

// let clientAge = 20;
// let legalAge = 18;

// let drivingAge = legalAge <= clientAge ? "Can drive" : "Can't drive";

// console.log(drivingAge);

// 3.

// let clientAge1 = 20;
// let legalAge1 = 18;

// let drivingAge =
//   clientAge1 < 0 || clientAge1 > 120
//     ? "Invalid age"
//     : clientAge1 > legalAge1
//     ? "Drive"
//     : "No Drive";

// console.log(drivingAge);

// 4.

// const phone = "iPhone";

// const iPhoneUser = phone === "iphone";

// ----------------CIKLAI-------------------

// 1.

// for (let i = 0; i < 10; i++) {
//   console.log("Ovidijus");
// }

// 2.

// let firstName = "Ovidijus";
// let kartai = 10;

// for (let i = 0; i < kartai; i++) {
//   console.log(firstName);
// }

// 3.

// for (let i = 0; i <= 10; i++) {
//   console.log(i + ". Ovidijus");
// }

// 4.

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
