const colors = [
  { id: 1, value: 'red' },
  { id: 2, value: 'green' },
  { id: 3, value: 'blue' },
];

// gauti masyva su spalvom
const cl = colors.map((cObj) => ({
  id: cObj.id,
  color: cObj.value,
}));

// gauti masyva su spalvom
const c2 = colors.map((cObj) => cObj.value);

console.log('cl ===', cl);
console.log('c2 ===', c2);

// const color1 = c2[0];
const [color1, , color3] = c2;
console.log('color1 ===', color1);
console.log('color3 ===', color3);
