"use strict";

// 1.Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne, pagal jo amžių.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (this.age >= 18) {
      console.log(`${this.name} is old enough to drink 😎`);
    } else {
      console.log(`${this.name} is not old enough... 😢`);
    }
  }
}

const p1 = new Person("Petras", 16);
const p2 = new Person("Juozas", 18);

p1.compareAge();
p2.compareAge();

// 2. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
// pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]

function skaiciai(array) {
  return array.filter((sk) => typeof sk === "number");
}

console.log(skaiciai([1, 5, "a", "g", "z", 6]));

// 3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"

function double(letters) {
  return Array.from(letters)
    .map((raide) => {
      if (String(Number(raide)) === "NaN") {
        return raide + raide;
      } else {
        return raide;
      }
    })
    .join("");
}

console.log(double("Petras 123 Slekys"));

// nebaigtas
// function double(letters) {
//   return letters.split(" ").map((raide) => {
//     if (typeof raide !== "number") {
//       return raide + raide;
//     } else {
//       return raide;
//     }
//   });
// }

// console.log(double("Petras 123 Slekys"));

// 4. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas. Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra tarpų - post code neteisingas.
// Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.
