console.log("-----------1 uzduotis-----------");
// 1.https://edabit.com/challenge/pB6CF3rFBi8ykJ3Br
// The left shift operation is similar to multiplication by powers of two.

// Sample calculation using the left shift operator (<<):

// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20

function shiftToLeft(x, y) {
  return x * 2 ** y;
}

console.log(shiftToLeft(5, 2));
console.log(shiftToLeft(10, 3));

console.log("-----------2 uzduotis-----------");
// 2.https://edabit.com/challenge/nEdLGbAZQ5LaiumP6
// sutrumpinti funkcija

// function isEven(n) {
// 	if n % 2 === 0 {
// 		return true
// 	}
// 	else if n % 2 === 1 {
// 		return false
// 	}
// }

function isEven(n) {
  return n % 2 === 0 ? true : false;
}

console.log(isEven(10));

console.log("-----------3 uzduotis-----------");
// 3.Pair Management https://edabit.com/challenge/BFnsRqe8PFvEwcRNt

function makePair(num1, num2) {
  return [num1, num2];
}

console.log(makePair(51, 21));

console.log("-----------4 uzduotis-----------");
// 4.Drink Sorting https://edabit.com/challenge/nuXdWHAoHv9y38sn7

let drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "water", price: 90 },
  { name: "juice", price: 30 },
];

drinks.sort((a, b) => a.price - b.price);

console.table(drinks);

// per edabit taip parasiau
// function sortDrinkByPrice(drinks) {
// 	return drinks.sort((a,b) => a.price - b.price);
// }

console.log("-----------5 uzduotis-----------");
// 5.Which Function Returns the Larger Number?  https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

function whichIsLarger(f, g) {
  if (f() > g()) {
    return "f";
  } else if (f() < g()) {
    return "g";
  } else {
    return "neither";
  }
}

console.log("-----------6 uzduotis-----------");
// 6. No Conditionals? https://edabit.com/challenge/WjXHgXLAvMxNvD6h2
// Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.
function flip(y) {
  return y === 0 ? 1 : 0;
}

console.log(flip(0));
console.log("-----------7 uzduotis-----------");
// 7.Recreating the String.length Property https://edabit.com/challenge/bvPBzNq9FutDb2X6J
// Create a function which returns the length of a string, WITHOUT using String.length property.
// splitinau i array ir tada length uzdejau, suveike
function length(s) {
  return s.split("").length;
}

console.log(length("vienas"));

console.log("-----------8 uzduotis-----------");

// 8.Equality Check https://edabit.com/challenge/BGvTMfwxYDRbtaTJ3
//  === tikrina type ir value, == tikrina value

// In this challenge, you must verify the equality of two different values given the parameters a and b.
// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:
// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
function checkEquality(a, b) {
  if (typeof a === typeof b && a == b) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEquality("1", 0));

console.log("-----------9 uzduotis-----------");

// 9. Century Crisis https://edabit.com/challenge/DcmB9Ycm58FdkPe7k

// You must calculate the number of people there will be in three decades from now.

// 3 dekados = 30 metu = 360 menesiu

function futurePeople(population, n) {
  return population + n * 360;
}

console.log(futurePeople(256, 2));
console.log(futurePeople(3248, 6));
console.log(futurePeople(5240, 3));

console.log("-----------10 uzduotis-----------");

// 10.Movie Theatre Admittance https://edabit.com/challenge/fP7gFvDaBymoZrXFx

// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.

function acceptIntoMovie(age, isSupervised) {
  return age >= 15 || isSupervised == true ? true : false;
}

console.log(acceptIntoMovie(16, false));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(10, true));

console.log("-----------11 uzduotis-----------");

// 11.Find Out the Leap Year https://edabit.com/challenge/xKKwvL2zYC8pEvMLG
// A leap year happens every four years, so it's a year that is perfectly divisible by four.
// However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
// Write a function that determines if the year is a leap year or not.

function leapYear(year) {
  return year % 4 === 0 && year / 100 && year / 400 ? true : false;
}

console.log(leapYear(2022));
console.log(leapYear(2023));
console.log(leapYear(2024));

console.log("-----------12 uzduotis-----------");

// 12.I'd Like a New Shade of Blue, Please https://edabit.com/challenge/2rjHtbg32PrtZdF66

// I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.

function howManyWalls(n, w, h) {
  return Math.floor(n / (w * h));
}

console.log(howManyWalls(100, 4, 5));
console.log(howManyWalls(10, 15, 12));
console.log(howManyWalls(41, 3, 6));

console.log("-----------13 uzduotis-----------");

// 13.Even All the Way https://edabit.com/challenge/6MZx5RqKYkFaogeAQ

// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

function getOnlyEvens(nums) {
  return nums.filter((n, i) => n % 2 === 0 && i % 2 === 0);
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));

console.log("-----------14 uzduotis-----------");

// 14.Older Than Me https://edabit.com/challenge/iwdZiFucR5wkQsFHu
// Create a method in the Person class which returns how another person's age compares.
// Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (other.age < this.age) {
      return `${other.name} is younger than me.`;
    } else if (other.age > this.age) {
      return `${other.name} is older than me.`;
    } else {
      return `${other.name} is the same age as me.`;
    }
  }
}

p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));

console.log("-----------15 uzduotis-----------");

// 15. Repeating Letters https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
  let string = "";
  for (let i = 0; i < str.length; i++) {
    string += str[i] + str[i];
  }
  return string;
}

console.log(doubleChar("String"));
console.log(doubleChar("Hello world"));
console.log(doubleChar("1234!_ "));

console.log("-----------16 uzduotis-----------");

// 16.Highest Digit https://edabit.com/challenge/YJuhHKSmNCaKNHcD3
// Create a function that takes a number as an argument and returns the highest digit in that number.

// spread operator ... paima visus skaicius, ${} pavercia i string

function highestDigit(number) {
  return Math.max(...`${number}`);
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));

console.log("-----------17 uzduotis-----------");

// 17. Let's Fuel Up! https://edabit.com/challenge/YMWDcSuYwYvve3HZj

// A vehicle needs 10 times the amount of fuel than the distance it travels.
// However, it must always carry a minimum of 100 fuel before setting off.

// Create a function which calculates the amount of fuel it needs, given the distance.

// Notes : Distance will be a number greater than zero.
// Return 100 if the calculated fuel turns out to be less than 100.

function calculateFuel(n) {
  return n * 10 < 100 ? 100 : n * 10;
}

console.log(calculateFuel(15));
console.log(calculateFuel(23.5));
console.log(calculateFuel(3));

console.log("-----------18 uzduotis-----------");

// 18.Check if One Array can be Nested in Another https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj

// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
  return Math.min(...arr1) > Math.min(...arr2) ? true : false;
}

console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));

console.log("-----------19 uzduotis-----------");
