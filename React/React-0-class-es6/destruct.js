const user = {
  id: 1,
  name: 'John',
  age: 36,
};

// kuriam kintamaji age
const id = 5;
const { age, id: userId } = user;
console.log('age, id ===', age, id);
