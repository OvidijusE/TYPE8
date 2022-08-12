"use strict";

// savaites dienu sk konvertavimas i zodzius
// 1-7
const savDn = 7;

// if (savDn === 1) {
//     console.log(`Pasirinkta diena: ${savDn} === Pirmadienis`);
// } else if (savDn === 2) {
//     console.log(`Pasirinkta diena: ${savDn} === Antradienis`);
// } else if (savDn === 3) {
//     console.log(`Pasirinkta diena: ${savDn} === Treciadienis`);
// } else if (savDn === 4) {
//     console.log(`Pasirinkta diena: ${savDn} === Ketvirtadienis`);
// } else if (savDn === 5) {
//     console.log(`Pasirinkta diena: ${savDn} === Penktadienis`);
// } else if (savDn === 6) {
//     console.log(`Pasirinkta diena: ${savDn} === Sestadienis`);
// } else if (savDn === 7) {
//     console.log(`Pasirinkta diena: ${savDn} === Sekmadienis`);
// } else {
//     console.log(`Pasirinkta diena: ${savDn} === sis skaicius netinkamas dienai`);
// }

switch (savDn) {
  case 1:
    // vykdomas kodas kai savDn === 1
    console.log(`Pasirinkta diena: ${savDn} === Pirmadienis`);
    // break toliau nebetikrinam ir iseinam is switch
    break;

  case 2:
    console.log(`Pasirinkta diena: ${savDn} === Antradienis`);
    break;
  case 3:
    console.log(`Pasirinkta diena: ${savDn} === Treciadienis`);
    break;
  case 4:
    console.log(`Pasirinkta diena: ${savDn} === Ketvirtadienis`);
    break;
  case 5:
    console.log(`Pasirinkta diena: ${savDn} === Penktadienis`);
    break;
  case 6:
    console.log(`Pasirinkta diena: ${savDn} === Sestadienis`);
    break;
  case 7:
    console.log(`Pasirinkta diena: ${savDn} === Sekmadienis`);
    break;
  default:
    console.log(
      `Pasirinkta diena: ${savDn} === sis skaicius netinkamas dienai`
    );
}
