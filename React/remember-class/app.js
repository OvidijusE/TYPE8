// sukuriam 2 zmones ir 1 employee

import Employee from './class/Employee.js';
import Human from './class/Human.js';

const people = [new Human(22, 'John'), new Human(33, 'Bob'), new Employee(45, 'Mike', 20)];
console.log('people ===', people);

// visiems trim iskvieciam gimimo datos apskaiciavimo metoda
people.forEach((p) => p.calculateYearOfBirth());

// prideti skaitliuka  kuris skaiciuoja kiek is viso Humanu ir jo paveldetu klasiu sukurt

console.log('Human.count ===', Human.count);
