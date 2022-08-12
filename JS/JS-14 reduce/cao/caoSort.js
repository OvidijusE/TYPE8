"use strict";

// 1.Pasirašyk sąrašą su savo draugų vardais. A-Z tvarka išrykiuok.

const drauguVardai = ["Juozas", "Eimantas", "Antanas", "Julija"];

drauguVardai.sort();
console.log("drauguVardai ===", drauguVardai);

// 2.Pakoreguok pirmame pratime esantį sort, kad išrykiuotų Z-A tvarka.

const drauguVardai2 = ["Juozas", "Eimantas", "Antanas", "Julija"];
// const drauguVardai3 = ["A", "B", "C", "D"];

// drauguVardai2.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else {
//     return 1;
//   }
// });
// console.log("drauguVardai2 ===", drauguVardai2);

// sutrumpintas
drauguVardai2.sort((a, b) => (a > b ? -1 : 1));
console.log("drauguVardai2 ===", drauguVardai2);

// 3.Nusikopijuok array ([5, 10, 20, 11, 12, 1, 0, 14, 25]) ir su JS sudėliok mažėjimo tvarka (nuo didžiausio, iki mažiausio).

const mazejimoTvarka = [5, 10, 20, 11, 12, 1, 0, 14, 25];

mazejimoTvarka.sort((a, b) => b - a);
console.log("mazejimoTvarka ===", mazejimoTvarka);

// 4.Nusikopijuok array ([10, 5, 20, 4]) ir grąžink didžiausią skaičių (vieną skaičių).

const didziausiasSkaicius = [10, 5, 20, 4];

didziausiasSkaicius.sort((a, b) => b - a);
console.log("didziausiasSkaicius ===", didziausiasSkaicius[0]);
