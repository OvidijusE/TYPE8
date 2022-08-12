const users = [
  {
    name: 'James',
    age: 20,
    isStudent: true,
  },
  {
    name: 'Jills',
    age: 25,
    isStudent: true,
    gender: 'female',
  },
  {
    name: 'Teddys',
    age: 18,
    isStudent: false,
    gender: 'male',
  },
  {
    name: 'Marry',
    age: 28,
    isStudent: false,
    gender: 'female',
    town: 'London',
  },
  {
    name: 'Jane',
    age: 22,
    isStudent: true,
    gender: 'female',
  },
];

// jeigu reik tik name ir age
users.map(({ name, age }) => console.log(name, age));

// [
//   { name: 'Marry', age: 28, isStudent: false, gender: 'female', town: 'London' },
//   { name: 'Jane', age: 22, isStudent: true, gender: 'female' },
// ];
