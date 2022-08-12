// palyginimai
//  === lygina reiksmes ir kintamuju tipus
// console.log('5 === 5' , 5 === 5);
// == lygina tik reiksmes ir bando pasiversti i tipus
// console.log("5 == '5' " , 5 == '5');



let age = 10;
// gauti age is vartotojo
age = prompt("Iveskite savo amziu")


// conditionals
if (age > 18) {
    // jeigu skliausteliuose gaunam true vykdom sita
    console.log(`Jums yra ${age} . Jus esate pilnametis zmogus , sveikinimai`);
} else {
 console.log(`Jums yra ${age} . Jus esate nepilnametis zmogus , sveikinimai`);
} 
console.log("po visko");

// paprastas if else
if (true) {
    // vykdom jei true
} else {
    // vykdom jei false
}


let sal1 = true;
let sal2 = false;

// suradus pirma true reiksme ivydgdomas kodas is iseinama is ciklo
// else if
// console.log("salyga1 yra " + sal1 + " salyga2 yra false" + sal2);
// template literals
console.log(`salyga 1 === ${sal1}, salyga 2 === ${sal2}`);
if (sal1) {
    // vykdom jei sal1 true
    console.log("1 salyga 1 yra true");
} else if(sal2) {
    // vykdom jei sa1 yra false ir sal2 true
    console.log("2 sal1 false ir sal2 true");
} else {
    // vykdom jeigu sal1 false ir sal2 false
    console.log("3 sal1 false ur sak2 false");
}

console.log("po visko");

// jeig skliausteliuose false vykdom sita

