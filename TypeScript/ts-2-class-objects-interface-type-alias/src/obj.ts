// objektai

interface UserInterface {
  id: string | number;
  readonly name: string; //readonly negalim pakeisti
  age: number;
  hasCar: boolean;
  isStudent?: boolean;
}

const u2: UserInterface = {
  id: 123,
  name: 'Georgia',
  age: 32,
  hasCar: false,
  isStudent: true,
};

const u1: {
  id: string | number;
  name: string;
  age: number;
  hasCar: boolean;
} = {
  id: '124s',
  name: 'James',
  age: 18,
  hasCar: true,
};

u1.name = 'Serbentautas';
// u1.name = 5;

// u2.name = 'Jill';

interface MathOperationFunction {
  (x: number, y: number, z: number): number;
}

const add: MathOperationFunction = (a, b, c) => a + b + c;
const minus: MathOperationFunction = (n1, n2, n3) => n1 - n2 - n3;

const addResult = add(1, 5, 9);
console.log('addResult ===', addResult);

const minusResult = minus(1, 5, 9);
console.log('minusResult ===', minusResult);
