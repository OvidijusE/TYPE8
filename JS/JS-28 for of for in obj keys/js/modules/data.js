"use strict";

export const user = {
  name: "Mike",
  age: 25,
  hasCar: true,
};
const key = "name";
console.log("user[key]  ===", user[key]);

// parasyti funkcija checkErrors(), ima klaidu objekta(errors1)
// grazinti true jei nors viena objekto reiksme yra ne tuscia
// kitu atveju false
export const errors1 = {
  name: "",
  password: "",
  town: "cant be blank",
};

export const errors2 = {
  name: "",
  password: "",
  town: "",
};

const newUserObj = {
  username: "Mike545",
  password: "123456",
  gender: "male",
  country: "",
};
