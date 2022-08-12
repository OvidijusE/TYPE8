// funkcija sudeda 2 arba 3 agumentus
function addNums(n1: number, n2: number, n3?: number | undefined): number {
  console.log('n3 ===', n3);
  let sum: number = n1 + n2;
  if (n3) {
    sum += n3;
  }
  console.log('sum ===', sum);
  return sum;
}
addNums(4, 5, 8);
addNums(4, 5);

interface CalcFnInt {
  (x: number, y: number, z?: string): number;
}

const calc1: CalcFnInt = (n1, n2, action = 'add') => {
  if (action === 'add') {
    const result: number = n1 + n2;
    return result;
  }
  return n1 - n2;
};

function calc(n1: number, n2: number, action: string = 'add'): number {
  if (action === 'add') {
    const result: number = n1 + n2;
    return result;
  }
  return n1 - n2;
}
calc(1, 5);
calc1(55, 54);
console.log(calc1(55, 54, 'minus'));
