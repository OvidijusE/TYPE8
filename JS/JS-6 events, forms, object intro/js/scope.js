// globali erdve arba global scope --- kas yra deklaruota ne kitos strukturos viduje

let globKint1 = 10;
const resultEl = document.getElementById("result");
const btn1El = document.getElementById("btn1");

function globaliFunkcija() {
  // lokali globaliFunkcija ervde. Joje galioja viskas kol vydkoma funkcija
  let localKint1 = 50;
  //  funkcijos viduje mes matom ir galim dirbti su globaliais kintamaisiais
  console.log(globKint1);
  globKint1++;
}

globaliFunkcija();

let kiekKartu = 0;
btn1El.addEventListener("click", function () {
  kiekKartu++;
  resultEl.textContent = `Paspaudei ${kiekKartu} kartu mygtuka`;
});

// kiek yra globKint1?
console.log("globKint1 ===", globKint1);
