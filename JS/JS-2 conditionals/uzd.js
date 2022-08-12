const x1 = 40;
const x2 = "Sveiki";
const x3 = 75;
const x4 = false;

//1. ar x1 yra daugiau uz 40
if (x1 > 40) {
    console.log("Skaicius yra didesnis uz 40");
} else { 
   console.log("Skaicius yra mazesnis uz 40");
}


//2. ar x3 yra maziau uz x1
if (x3 > x1) {
    console.log("x1 yra mazesnis uz x3");
} else { 
   console.log("x1 yra didesnis uz x3");
}


//3. ar x2 yra string tipo?
if (typeof x2 === "string") {
    console.log("Skaicius yra string tipo")
} else {
    console.log("Skaicius nera string tipo");
}


//4. ar x4 yra Number tipo?
if (typeof x4 === "number") {
    console.log("Skaicius yra number tipo")
} else {
    console.log("Skaicius nera number tipo");
}


//5. ar x1 yra daugiau uz 20 ir maziau uz 100
if (x1 > 20 && x1 < 100 ) {
    console.log("x1 yra didesnis uz 20, bet maziau uz 100");
} else { 
   console.log("x1 yra mazesnis uz 20, bet daugiau uz 100");
}


//6. ar x1 arba x2 yra String tipo
// dar reik pabaigt
if (typeof x1 === "string" || typeof x2 === "string") {
    console.log(`${x1} arba ${x2} yra string tipo`)
    
} 


/* 7 amziaus grupes paduodam i age 10, 25, 70, 110 reiksmes ir isitikinam kad veikia



0-17 - vaikas

18-60 - suauges

61-100 - saulelydis

daugiau nei 100 - nezinau ar tiesa kad naudojiesi kompiuteriu...

*/

let age = 110;
// gaunam teigiama is neigiamo (absoliutis skaicius)
age = Math.abs(age);

if (age <= 17) {
    console.log("Vaikas");
} else if (age <= 60) {
console.log("Suauges");
} else if (age <= 100) {
    console.log("Saulelydis");
} else {
    console.log("nezinau ar tiesa kad naudojiesi kompiuteriu...");
}


