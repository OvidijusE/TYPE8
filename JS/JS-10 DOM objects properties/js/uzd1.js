"use strict";

const stud1 = {
  name: "Juozas",
  marks: [10, 2, 4, 3, 9],
  myAvg: function () {
    let total = 0;
    for (let i = 0; i < this.marks.length; i++) {
      total += this.marks[i];
    }
    const avg = total / this.marks.length;
    console.log(`${this.name} average is ${avg}`);
    return avg;
  },
};

const stud2 = {
  name: "Petras",
  marks: [9, 3, 7, 6, 5],
  myAvg: function () {
    let total = 0;
    for (let i = 0; i < this.marks.length; i++) {
      total += this.marks[i];
    }
    const avg = total / this.marks.length;
    console.log(`${this.name} average is ${avg}`);
    return avg;
  },
};

stud1.myAvg();
stud2.myAvg();

const students = [stud1, stud2];

const studAverages = [];
for (let i = 0; i < students.length; i++) {
  const currentStudAvg = students[i].myAvg();
  studAverages.push(currentStudAvg);
}
console.log("studAverage ===", studAverages);
