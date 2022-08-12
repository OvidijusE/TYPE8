const { add, baseUrl } = require("./fn");
const { generateUser } = require("./casual");
// console.log("fn ===", fn);
console.log("baseUrl ===", baseUrl);

const res1 = add(10, 50);
// const res2 = add(20, 70);

// const totalAmount = res1 + res2;
// console.log("totalAmount ===", totalAmount);

// commonJs export - module.exports = {sum}
// commonJs import - const sum = require("./fn.js")

// ES6 module export - export, export default
// ES6 modeule import - import {sum} from "./fn.js"

console.log("generateUser ===", generateUser());
