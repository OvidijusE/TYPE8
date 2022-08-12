// import casual
const casual = require("casual");

const sent1 = casual.sentence;
console.log("sent1 ===", sent1);

// funkcijos generateAdress() pagalba sugeneruoti random adresa is casual
// funkcija turetu grazinti objekta kuris turi country, city, address, state

function generateAdress() {
  return {
    address: casual.address,
  };
}
const g1 = generateAdress();
console.log("g1 ===", g1);

function addressObj() {
  return {
    country: casual.country,
    city: casual.city,
    address: casual.address,
    state: casual.state,
  };
}
const c1 = addressObj();
// console.log("c1 ===", c1);

const d1 = casual.date("YYYY-MM-DD");
console.log("d1 ===", d1);

// casual.js sukuriam funkcija kuri generuoja useri su 3 savybem

function generateUser() {
  return {
    firstName: casual.first_name,
    lastName: casual.last_name,
    pasword: casual.password,
  };
}

// const user1 = generateUser();
// console.log("user1 ===", user1);

module.exports = {
  generateUser,
};
// exportuojam ta funkcija ir panaudojam index.js
