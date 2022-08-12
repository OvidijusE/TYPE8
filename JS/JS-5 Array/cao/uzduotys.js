"use strict";

// 1. Susikurkite skaičių masyva 'numbersArray' su siais nariais : // 2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20

const numbersArray = ["2", "12", "33", "-7", "28", "49", "-17", "19", "42", "-14", "-10 ", "20"];

// 2. Sekančias užduotis atlikti su naujais masyvais(kopijomis)

const newArray = ["1", "2", "3"];

// 3. Padauginti masyvo narius iš 2 //

// for (let i = 0; i < newArray.length; i++) {
//   let daugyba = 2;
//   const skaicius = newArray[i];
//   daugyba *= skaicius;

//   console.log(daugyba);
// }

// 4. Pakelti masyvo narius kvadratu

for (let i = 0; i < newArray.length; i++) {
  let daugyba = 2;
  const kvadratas = newArray[i];
  daugyba **= kvadratas;

  console.log(daugyba);
}
