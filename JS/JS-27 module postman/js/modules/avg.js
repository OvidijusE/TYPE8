"use strict";
// sukurti funkcija kuri grazina dvieju paduotu skaiciu vidurki // countAvg(10, 15)

// let countAverage = (num1, num2) => (num1 + num2) / 2;
export function countAverage(num1, num2) {
  const average = (num1 + num2) / 2;
  return average;
}

export function countAverageThree(num1, num2, num3) {
  return (num1 + num2 + num3) / countAverageThree.length;
}
