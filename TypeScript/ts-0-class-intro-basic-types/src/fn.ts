// function sudeti dvi reiksmes
function add(n1: number, n2: number): number {
  const sum: number = n1 + n2;
  console.log(n1 + n2);
  return sum;
}

add(5, 10);
// add(5, '10');

// function signature
let greetMe: (myName: string) => void;
greetMe = (myName) => {
  console.log(`Hello, my name is ${myName}`);
};

greetMe('James');
