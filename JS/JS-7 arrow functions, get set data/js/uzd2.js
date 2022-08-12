// parasyti visai budais funckija kuri paima 4 sk ir grazina

// 2 pirmus sudetus ir atimti likusiu 2

// function declaration

function pirmaFunkcija(a, b, c, d) {
  return a + b - c - d;
}
console.log(pirmaFunkcija(5, 5, 4, 4));

// function expression

const antraFunkcija = function (a, b, c, d) {
  return a + b - c - d;
};

console.log(antraFunkcija(2, 2, 1, 1));

// arrow function su return

const treciaFunkcija = (a, b, c, d) => {
  return a + b - c - d;
};
console.log(treciaFunkcija(8, 8, 4, 4));

// arrow funkction be return

const ketvirtaFunkcija = (a, b, c, d) => a + b - c - d;

console.log(ketvirtaFunkcija(7, 7, 1, 1));

// sukurti funkcija kuri pavercia minutes i sekundes

// const minutes = 10;
// const penktaFunkcija = (minutes, sekundes) => minutes * sekundes;
// console.log(penktaFunkcija(minutes, 60));

function minTosec(minutes) {
  return minutes * 60;
}

const fiveMinIs = minTosec(5);
console.log("fiveMinIs ===", fiveMinIs);

// sukurti funkcija kuri ideda reiksme i html el kurio class === 'app'

function putValueToApp(reiksme, className) {
  // 1. paimti reiksme
  // 2. nusitaikyti i el su class app
  const appEl = document.querySelector(className);
  if (appEl === null) {
    console.log("neradom el su klase app");
    // nutraukti funkcijos vygdyma
    return;
  }
  // 2. ideti i el kurio class app
  appEl.textContent = reiksme;
}

putValueToApp(`five minutes in sec is ${fiveMinIs}`, ".app");
putValueToApp(`five minutes in sec is ${minTosec(12)}`, ".blue");
putValueToApp(`five minutes in sec is ${minTosec(15)}`, "h1");
