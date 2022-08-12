import sum, { add as addNums } from './modules/add.js';
import { divide } from './modules/divide.js';

console.log(addNums(1, 2, 3));
console.log('sum ===', sum);

// susikuriam faila divide.js
// export funkcija divide gauna 2 argumentus
// grazina tu argumentu dalyba
// jei antras argumentas 0, grazina teksta 'dalinti nulio negalima'
// panaudojam funkcija es6mod.js faile

console.log(divide(15, 3));
console.log(divide(15, 0));
