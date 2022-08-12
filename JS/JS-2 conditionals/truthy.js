let age = prompt("Iveskite skaiciu");
console.log('age ===', age);
// !! pavertimas reiksmes i boolean
console.log('!!age ===', !!age);


if (age || age === 0) {
    console.log("age buvo ivestas");
// tikrinam tik jeigu zinom kad ivesta reiksme
    if (age > 50) {
        console.log("age ivestas ir daugiau uz 50");
    }
}


const sk = 50

if (sk) {
    // vykdom nes sk yra truthy
}