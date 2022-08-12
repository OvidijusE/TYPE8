"use strict";

// 1.Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

// mokytotjo sprendimas

console.log("main");

const formEl = document.forms[0];

formEl.addEventListener("submit", (event) => {
  // stabdom perkrovima ir issiutima per html
  event.preventDefault();
  console.log("js in controll");
  const inputVal = formEl.elements.fullName.value;
  console.log("inputVal ===", inputVal);

  const proc = new ProccessInput(inputVal);
  console.log("proc ===", proc);

  new Person(proc.readyVal.name, proc.readyVal.lName);
});
