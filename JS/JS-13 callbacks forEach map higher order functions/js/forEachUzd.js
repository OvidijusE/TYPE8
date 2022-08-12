"use strict";
const skArray = [0, 10, 15, -2, 30, -15, 10, -50, { title: "blue" }, { title: "green" }];

// 1.panaudojant forEach atspausdinti kievkiena reiksme
// skArray.forEach((sk) => console.log(sk));

//2. atspaustinti visu skaiciu suma
// function printArrTotal(arr) {
//   let total = 0;
//   skArray.forEach((sk) => {
//     total += sk;
//   });
//   console.log("total ===", total);
// }
// printArrTotal(skArray);

// 3. atspausdinti tik teigiamus skaicius

// skArray.forEach((sk) => {
//   if (sk > 0) {
//     console.log(`${sk} yra teigiamas`);
//   }
// });

// 4. grazinti nauja masyva su neigiamais skaiciais

// forEach metodas
// const neigiami = [];
// skArray.forEach((sk) => {
//   if (sk < 0) {
//     neigiami.push(sk);
//   }
// });
// console.log("neigiami ===", neigiami);

// filter metodas
// const neigiami = skArray.filter((sk) => {
//   if (sk < 0) {
//     return true;
//   }
// });
// console.log("neigiami ===", neigiami);

// sutrumpintas
// filter grazinti nauja masyva kuriame nebutinai yra visos reiksmes
// const neigiami = skArray.filter((sk) => sk < 0);

// console.log("neigiami ===", neigiami);

// 5. grazinti nauja masyva kur visos neigiamos reiksmes paverstos teigiamom
// nebaigtas

// const teigiami = [];
// skArray.forEach((sk) => {
//   if (sk > 0) {
//     teigiami.push(sk);
//   }
// });
// console.log("teigiami ===", teigiami);

// sutrumpintas
// const teigiami = skArray.filter((sk) => sk > 0);
// console.log("teigiami ===", teigiami);

// 6. grazinti koks yra -15 skaiciaus indexas
skArray.forEach((sk, i) => {
  if (sk === -15) {
    console.log("-15 index yra", i);
  }
});

// kad surasti viena reiksme atitinkancia salyga find

const found = skArray.find((sk) => sk.title === "blue");
console.log("found ===", found);

// 7. pakeisti -2 i -25 tame paciame masyve

// 8. grazinti nauja masyva kuriame yra padvigubintos reiksmes su .map
// map kai norim grazinti kitokia struktura ar pakeistas reiksmes (VISAS)
// pilrnas
// const dvigubosReiksmes = skArray.map((sk) => {
//   const double = sk * 2;
//   return double;
// });
// console.log("dvigubosReiksmes ===", dvigubosReiksmes);

// sutrumpintas
// const dvigubosReiksmesShort = skArray.map((sk) => sk * 2);
// console.log("dvigubosReiksmesShort ===", dvigubosReiksmesShort);

// 9. grazinti nauja masyva kuriame yra skaiciai diesni uz 10 su .filter

// 10. sukurti sarasa ideti i ul elementa
// const ulEl = document.getElementById("ul");
// // gaunam masyva su li element textu
// const liArr = skArray.map((sk) => {
//   return `<li> skaicius ${sk} </li>`;
// });
// // masyva paverciam i stringa
// const liStringFromArr = liArr.join("");
// // ikeliam i html
// ulEl.innerHTML = liStringFromArr;

// sutrumpintas
// const ulEl = document.getElementById("ul");
// // gaunam masyva su li element textu
// const liArr = skArray.map((sk) => `<li> skaicius ${sk} </li>`);

// // masyva paverciam i stringa
// const liStringFromArr = liArr.join("");
// // ikeliam i html
// ulEl.innerHTML = liStringFromArr;

// // chain  methods
// const liArrStringChain = skArray
//   .filter((sk) => sk > 5)
//   .map((sk) => `<li> skaicius ${sk} </li>`)
//   .join("");

// console.log("liArrStringChain ===", liArrStringChain);
