// if (age <= 17) {
//   console.log("Vaikas");
// } else if (age <= 60) {
//   console.log("Suauges");
// } else if (age <= 100) {
//   console.log("Saulelydis");
// } else {
//   console.log("nezinau ar tiesa kad naudojiesi kompiuteriu...");
// }

// make it a switch

let age = 10;

switch (true) {
  case age <= 17:
    console.log("Vaikas");
    break;
  case age <= 60:
    console.log("Suauges");
    break;
  case age <= 100:
    console.log("Saulelydis");
    break;
  default:
    console.log("nezinau ar tiesa kad naudojiesi kompiuteriu...");
}
