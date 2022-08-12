// 2.Viduj aplanko, susikuriame index.js file'ą. O jame įrašome - console.log("Hello"). Paleidžiame (node index.js) ir taip patikriname, ar veikia pats NodeJS.
// cd cao/
// console.log("Hello");

// 3.Susikuriame package.json file'ą rankomis. Jame įsirašome konfigūracinius duomenis (šiuo metu reikės - title, version ir scripts - kuris bus objektas ir turės start scriptą - jis paleist node
// npm init

// 4.Su npm įsidiegiame paketą pavadinimu 'casual'. Daugiau apie jį čia.
// npm install casual

// 5.Vietoj console.log, importuojame šį modulį į index.js.
const casual = require("casual");
// console.log("casual ===", casual);

// 6.Importavę, iš karto panaudojame - console turi išmesti random miestą kiekvieną kartą paleidus šį kodą.

// const city = casual.city;
// console.log("city ===", city);

// 7.Pakoreguojame kodą. Tegul dabar konsolė atspausdina du dalykus: ir random miestą, ir random skaičių nuo 1 iki 10 (o random skaičių generuoti juk dar mokame su Math.random()).

const randomCity = casual.city;
const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomCity);
console.log(randomNumber);

// console.log(randomCity, randomNumber);

// funkcijos budu

function randomCityNumber() {
  return {
    city: casual.city,
    randomNumber: Math.floor(Math.random() * 10) + 1,
  };
}

// const cn = randomCityNumber();
// console.log("cn ===", cn);

// console.log(randomCityNumber());

// 8.Casual pluginas gali ne tik miestą sugeneruoti, bet ir įvairiausius kitus parametrus. Pridedame (prie console.log), kad "Mr Petras Slekys" (bus atsitiktiniai duomenys: suffix + first name + last name).

// const randomInfo = () => {
//   return {
//     suffix: casual.name_suffix,
//     firstName: casual.first_name,
//     lastName: casual.last_name,
//   };
// };

// const random1 = randomInfo();
// console.log("random1 ===", random1);
// console.log(randomInfo());

// console.log(`${casual.name_suffix}. ${casual.first_name} ${casual.last_name}`);
