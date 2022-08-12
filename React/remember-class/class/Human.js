// sukurti klase Human
export default class Human {
  // skaiciuojam
  static count = 0;
  // klase ima amziu ir varda kaip argumentus
  constructor(argAge, argName) {
    Human.count = ++Human.count;
    this.id = Human.count;
    this.age = argAge;
    this.name = argName;
  }
  // viduje yra metodas kuris apskaiciuoja gimimo metus su vardus (log)
  calculateYearOfBirth() {
    const thisYear = new Date().getFullYear();
    const yearOfBirth = thisYear - this.age;
    console.log(`${this.name} was born on ${yearOfBirth}`);
  }
}
