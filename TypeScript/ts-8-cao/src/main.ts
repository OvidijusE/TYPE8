class Person {
  constructor(private _name: string, private _surname: string, private _age?: number) {}

  set name(name: string) {
    this._name = name;
  }

  set surname(surname: string) {
    this._surname = surname;
  }

  set age(age: number) {
    if (age < 1 || age > 150) {
      console.log('blogas age');
      throw new Error('blogas age');
    }
    if (age % 1 !== 0) {
      console.log('blogas age, turi buti sveikas skaicius');
      throw new Error('blogas age');
    }

    this._age = age;
  }

  get fullName(): string {
    return `${this._name} ${this._surname}`;
  }

  get ageYear(): number | undefined {
    return this._age;
  }
}

console.group(
  '1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname'
);
{
  const p1 = new Person('Serverijus', 'Serbentautas');
  console.log(p1.fullName);
}

console.groupEnd();

console.group(
  '2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150'
);
{
  const p2 = new Person('Juozas', 'Juozaitis', 160);
  console.log('age = ', p2.ageYear);
}
console.groupEnd();

console.group(
  '3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.'
);
{
}
console.groupEnd();

console.group(
  '4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai'
);
{
}
console.groupEnd();

console.group(
  '5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.'
);

console.group(
  '6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.'
);
{
}
console.groupEnd();

console.group(
  '7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"'
);
{
}
console.groupEnd();

console.group(
  '8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse'
);
