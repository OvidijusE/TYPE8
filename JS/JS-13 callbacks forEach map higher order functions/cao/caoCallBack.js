"use strict";

// 1.Sukurk dvi funkcijas: alertName, consoleName. Abi funkcijos turės vieną parametrą - vardą. Jos bus callback funkcijos, pirma tą vardą alertins, kita - console.log'ins. O dabar susikuriame pagrindę funkciją (coreFunction), ši funkcija - paima pirmą raidę, ją padidina ir prijungia kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia viena iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).

function alertName(text) {
  alert(text);
}

function consoleName(text) {
  console.log(text);
}

function coreFunction(vardas, callback) {
  const pirmaRaide = vardas.charAt(0).toUpperCase() + vardas.slice(1).toLowerCase();
  callback(pirmaRaide);
}

coreFunction("JuOzAs", alertName);
