"use strict";

// 1.Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut - daugiau apie jį čia.

let timeOut = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 5000);
});

timeOut.then(() => alert("yes, veikia!"));

// 2.Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

// function timeOut2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.floor(Math.random() * 5) + 1 === 1) {
//         reject("not good");
//       } else {
//         resolve("valiooo");
//       }
//     }, 1000);
//   });
// }

// timeOut2()
//   .then((success) => alert(success))
//   .catch((error) => alert(error));

// 3.Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą. Nelabai aišku? Pasižiūrėk čia apie teoriją - o jei ne, užmesk akį į atsakymus.

// function timeOut3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.floor(Math.random() * 5) + 1 === 1) {
//         reject();
//       } else {
//         resolve();
//       }
//     }, 1000);
//   });
// }

// timeOut3()
//   .then(() => "This is a message")
//   .then((message) => alert(message))
//   .catch(() => alert("Error"));
