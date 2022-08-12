"use strict";

export default function PersonEs5(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hello I am ${this.name} and I am ${this.age} years old`);
  };
}
