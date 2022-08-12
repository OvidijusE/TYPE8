const numbers: number[] = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

const words: string[] = [
  'pirmadienis',
  'antradienis',
  'trečiadienis',
  'ketvirtadienis',
  'penktadienis',
  'šeštadienis',
  'sekmadienis',
];

console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function lastIndex(arr: any[]): void {
    console.log(arr.length - 1);
  }
  lastIndex(numbers);
  lastIndex(words);
}
console.groupEnd();

console.group(
  '2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function indexInLines(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  }
  indexInLines(numbers);
  indexInLines(words);
}
console.groupEnd();

console.group(
  '3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function everyIndexInLines(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  everyIndexInLines(numbers);
  everyIndexInLines(words);
  console.groupEnd();

  console.group(
    '4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  '
  );
  // [0] => reikšmė
  // [1] => reikšmė
  // [2] => reikšmė
  {
    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
    function everyIndexPairsInLines(arr: any[]): void {
      for (let i = 0; i < arr.length; i++) {
        console.log([i], `=>`, arr[i]);
      }
    }
    everyIndexPairsInLines(numbers);
    everyIndexPairsInLines(words);
  }
  console.groupEnd();

  console.group(
    '5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.'
  );
  {
    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
    function everyElementBackwards(arr: any[]): void {
      let backwardsArr = arr.reverse();
      for (let i = 0; i < backwardsArr.length; i++) {
        console.log(arr[i]);
      }
    }
    everyElementBackwards(numbers);
    everyElementBackwards(words);
  }
  console.groupEnd();

  console.group(
    '6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...'
  );
  {
    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
    function everyIndexInOneLine(arr: any[]): void {
      let oneLine = '';
      for (let i = 1; i < arr.length; i += 1) {
        oneLine += i + ' ';
      }
      console.log('oneLine ===', oneLine);
    }
    everyIndexInOneLine(numbers);
    everyIndexInOneLine(words);
  }
  console.groupEnd();

  console.group(
    '7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...'
  );
  {
    // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

    function everyIndexInLines(arr: (number | string)[]): void {
      const oneLine = arr.reverse().join(' ');
      console.log('oneLine ===', oneLine);
    }
    everyIndexInLines(numbers);
    everyIndexInLines(words);
  }
}
console.groupEnd();

console.group(
  '8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:'
);
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function inLineValuesWithIndex(arr: any[]): void {
    const oneLineWithIndex = arr.map((value, i) => `[${i}]=>${value}`).join(' ');
    console.log('oneLineWithIndex ===', oneLineWithIndex);
  }
  inLineValuesWithIndex(numbers);
  inLineValuesWithIndex(words);
}
console.groupEnd();

console.group(
  '9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function doubleNumArr(arr: number[]): number[] {
    return arr.map((value) => value * 2);
  }
  const solution = doubleNumArr(numbers);
  console.log('solution ===', solution);
}
console.groupEnd();

console.group(
  '10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function squareNumArr(arr: number[]): number[] {
    return arr.map((value) => value ** 2);
  }
  const solution = squareNumArr(numbers);
  console.log('solution ===', solution);
}
console.groupEnd();

console.group(
  '11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function multiplyByIndex(arr: number[]): number[] {
    return arr.map((value, i) => value * i);
  }
  const solution = multiplyByIndex(numbers);
  console.log('solution ===', solution);
}
console.groupEnd();

console.group(
  '12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function onlyPositives(arr: number[]): number[] {
    return arr.filter((value) => value > 0);
  }
  const solution = onlyPositives(numbers);
  console.log('solution ===', solution);
}
console.groupEnd();

console.group(
  '13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function onlyNegatives(arr: number[]): number[] {
    return arr.filter((value) => value < 0);
  }
  const solution = onlyNegatives(numbers);
  console.log('solution ===', solution);
}
console.groupEnd();

console.group(
  '14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function onlyEven(arr: number[]): number[] {
    return arr.filter((value) => value % 2 === 0);
  }
  const solution = onlyEven(numbers);
  console.log('solution ===', solution);
}
console.groupEnd();

console.group(
  '15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function onlyOdd(arr: number[]): number[] {
    return arr.filter((value) => value % 2 !== 0);
  }
  const solution = onlyOdd(numbers);
  console.log('solution ===', solution);
}
console.groupEnd();

console.group(
  '16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų'
);
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function turnedPositives(arr: number[]): number[] {
    return arr.map((value) => Math.abs(value));
  }
  const solution = turnedPositives(numbers);
  console.log('solution ===', solution);
}
console.groupEnd();
