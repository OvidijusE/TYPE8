// 1 parasyti funkcija kuri paima 2 argumentus ir grazina ju sandauga. argumentai skaiciai
function multiply(n1: number, n2: number): number {
  const mult: number = n1 * n2;
  return mult;
}

console.log(multiply(5, 4));

// 2 parasyti funkcija kuri paima skaiciu pvz 3.254587 ir grazina stringa $3.25 (suapvalinta ir prideta currency)
function makeCurrency(amount: number): string {
  const apvalinta: string = amount.toFixed(2);
  return `$${apvalinta}`;
}
console.log(makeCurrency(3.254587));
let result: string = makeCurrency(3.254587);
console.log('result ===', result);

// 3 parasyti tipa masyvui kuriame bus stringas, skaicius ir boolean
const dalykas: (string | number | boolean)[] = ['james', 15, false];

// 4 parasyti funkcija kuri argumentu ima skaiciu masyva. pvz [1, 2, 3, 4] // ir grazina string tipo masyva ['id_1', 'id_2', 'id_3', 'id_4']
function makeStringIds(arr: number[]): string[] {
  const resultArr: string[] = arr.map((n: number) => 'id_' + n);
  return resultArr;
}
const ids: string[] = makeStringIds([1, 2, 3, 4]);
console.log('ids ===', ids);

// 5.prirasyti tipus kad nemestu klaidu

let email1: string = 'james@example.com';
let weekDay: number = 4;
let isLoggedIn: boolean = true;
let isWeekend: boolean = false;
let average: number = 3.45;
let username1: null = null;
let petsAndCounts: (string | number)[] = ['cat', 1, 'dog', 2, 'duck', 4];
let namesOrNulls: (string | null)[] = ['james', 'Carl', null, 'Mike', null];

// oddOrEven

function oddOrEven(word: string): boolean {
  const length: number = word.length;
  let oddOrEven: boolean = length % 2 === 0 ? true : false;
  return oddOrEven;
}

console.log(oddOrEven('apples'));
console.log(oddOrEven('pears'));
