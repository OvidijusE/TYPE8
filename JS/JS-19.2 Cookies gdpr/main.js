"use strict";

// set cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 1000);
  let expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname} = ${cvalue} ; ${expires};path=/`;
}

// funkcija kuri istraukia is cookie informacija
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// setCookie("userId", "456", 30);
let sutinku;
if (!getCookie("userAgree")) {
  sutinku = confirm("Ar jus sutinkate su cookie policy?");
}
console.log("result ===", sutinku);

if (sutinku === true) {
  setCookie("userAgree", "true", 10);
}

console.log(getCookie("get", getCookie("userAgree")));
