interface Calculator {
  num1: number;
  num2: number;
  add(): number;
  minus(): number;
  divide(): number;
  multiply(): number;
}

export default class Calc implements Calculator {
  constructor(public num1: number, public num2: number) {}

  add(): number {
    return this.num1 + this.num2;
  }
  minus(): number {
    return this.num1 - this.num2;
  }
  divide(): number {
    return this.num1 / this.num2;
  }
  multiply(): number {
    return this.num1 * this.num2;
  }
}

interface SCalc extends Calc {
  pliusProc(): number;
  minusProc(): number;
  power(): number;
}

export class ScientificCalc extends Calc implements SCalc {
  pliusProc(): number {
    return this.num1 * (this.num2 / 100 + 1);
  }
  minusProc(): number {
    return this.num1 * (this.num2 / 100 - 1);
  }
  power(): number {
    return this.num1 ** this.num2;
  }
}

const calculator = new Calc(5, 4);

console.log(calculator.add());
console.log(calculator.minus());
console.log(calculator.divide());
console.log(calculator.multiply());

const scientific = new ScientificCalc(3, 6);

console.log('plius procentai', scientific.pliusProc());
console.log('minus procentai', scientific.minusProc());
console.log('power', scientific.power());
