const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, 'kazkas', ...numbersTwo];

console.log('numbersCombined ===', numbersCombined);

const n1Copy = [...numbersOne];
const n1CopyNot = [...numbersOne];

console.log('n1Copy ===', n1Copy);

console.log(n1Copy === numbersOne);

const user = {
  id: 1,
  name: 'John',
  age: 36,
  hasCar: true,
  id: 5,
};

const UserCopy = { ...user };
// hasCar = true
const carUser = { ...user, hasCar: true, id: 5 };
// remove age from car user
delete carUser.age;
console.log('carUser ===', carUser);
