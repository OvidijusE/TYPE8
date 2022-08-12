// Enums - enumeration type
enum Directions {
  Up,
  Down,
  Left,
  Right,
}

const firstDirection: Directions = Directions.Right;
console.log('firstDirection ===', firstDirection);

const secondDirection: Directions = Directions.Down;
console.log('secondDirection ===', secondDirection);

enum Actions {
  add = 'add',
  minus = 'minus',
  multiply = 'multiply',
}

const action1: Actions = Actions.add;
console.log('action1 ===', action1);

function twoNums(n1: number, n2: number, action: Actions): number {
  if (action === Actions.minus) {
    return n1 - n2;
  }
  return n1 + n2;
}
twoNums(10, 50, Actions.minus);
