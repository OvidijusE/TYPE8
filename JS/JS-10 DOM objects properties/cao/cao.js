"use strict";

//1.Susikuriame objektą "car". Duodame jam tris properties: "doors", "color", "brand". Reikšmes įrašykite patys, tik atminkite - doors bus skaičius, o color ir brand - string'ai. Pasiconsole'inkite ir patikrinkite ar matosi car objektas, ar galite atskirai pasiimti vieną iš jo parametrų (pvz. car.doors)
const car = {
  doors: 4,
  color: "white",
  brand: "toyota",
};
console.log(car);

// 2.Sukuriame formą su dviem input - name ir surname. Pateikus formą, JS turi pasiimti vardą ir pavardę ir sukurti objektą pavadinimu 'person'. Šis objektas turės du parametrus - name ir surname. Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje) - atsispausdink objektą ir pažiūrėk ar viskas gerai veikia. Hint: už funkcijos ribų negali atspausdinti objekto, nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju - funkcijoje). Už jos ribų jis neegzistuoja.
const firstName = document.getElementById("name");
const surName = document.getElementById("surname");
const buttonEl = document.getElementById("pirmasMygtukas");

buttonEl.addEventListener("click", (event) => {
  event.preventDefault();
  const vardas = firstName.value;
  const pavarde = surName.value;

  const person = {
    name: firstName.value,
    surname: surName.value,
  };

  console.log(person);
});

// 3.Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių. Pateikus duomenis, turi susikurti objektas, kuriame du properties - name ir isLegalAge. Name - string, o isLegalAge - boolean.

const vartotojoVardas = document.getElementById("vardas3");
const vartotojoAmzius = document.getElementById("amzius3");
const mygtukasEl = document.getElementById("treciasMygtukas");

mygtukasEl.addEventListener("click", (event) => {
  event.preventDefault();

  const vardas3 = vartotojoVardas.value;
  const amzius3 = Number(vartotojoAmzius.value);
  const islegalAge = amzius3 >= 18;

  const person2 = {
    name: vardas3,
    isLegalAge: islegalAge,
  };

  console.log(person2);
});
