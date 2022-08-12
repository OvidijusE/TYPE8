type Product = {
  title: string;
  price: number;
  forSale: boolean;
  town: string;
  street: string;
};

const product1: Product = {
  title: 'Nike sport shoes',
  price: 100,
  forSale: false,
  town: 'London',
  street: 'Backer st',
};

interface WarehouseItem {
  department: string;
  ceo: string;
  town: string;
  street: string;
}

interface WarehouseItemAdress extends WarehouseItem {
  postalAdress: string;
}

const warehouse1: WarehouseItem = {
  department: 'Executive',
  ceo: 'James Bond',
  town: 'Vilnius',
  street: 'Vokieciu st',
};

const addPostalAddress = <Type extends { town: string; street: string }>(obj: Type) => {
  return {
    ...obj,
    postalAdress: `${obj.town}, ${obj.street}`,
  };
};

const result1 = addPostalAddress<WarehouseItem>(warehouse1);
console.log('result1 ===', result1);
const result2 = addPostalAddress<Product>(product1);
console.log('result2 ===', result2);
// console.log(addPostalAddress({ name: 'aha' }));

// postalAddress = town street
// create funcion addPostalAddress =>  postalAddress: 'Vilnius, Vokieciu st'

const obj1 = {
  title: 'mr',
  age: 25,
};

const addId = <Type extends string | number>(arg: Type): [number, Type] => {
  console.log([Math.random(), arg]);
  return [Math.random(), arg];
};

const id1 = addId<number>(15);
const id2 = addId<string>('Serbentautas');
// const id3 = addId<{ title: string }>({ title: 'mr' });
console.log('id1 ===', id1, id2);
