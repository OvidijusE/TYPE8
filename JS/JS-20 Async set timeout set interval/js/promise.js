"use strict";

// perkam lektuvo bilietus internetu

// new Promise((resolve, reject) => {})
// Promise status gali buti: Pending , Resolve, Reject

function buyFlyTickets() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if (error) {
        // klaida yra ir nepavyko (reject)
        reject("Sorry payment decline");
      } else {
        // klaidos nera sekme (resolve)
        resolve("Thank you, have a nice trip");
      }
    }, 3000);
  });
}

// isskaidyti
// const promise = buyFlyTickets();
// promise.then((successMsg) => console.log(successMsg));
// promise.catch((errorMsg) => console.log(errorMsg));
// console.log("result ===", promise);
// success message === "Thank you, have a nice trip"

// ant vieno viskas
buyFlyTickets()
  .then((successMsg) => console.log(successMsg))
  .catch((errorMsg) => console.log(errorMsg));
