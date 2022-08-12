/* eslint-disable arrow-body-style */
interface SimpleUser {
  id: string;
  name: string;
  town: string;
  hasDog: boolean;
}
const usersT: SimpleUser[] = [
  {
    id: 'u_1',
    name: 'John',
    town: 'London',
    hasDog: false,
  },
  {
    id: 'u_2',
    name: 'Jill',
    town: 'Kaunas',
    hasDog: true,
  },
  {
    id: 'u_3',
    name: 'Serbentautas',
    town: 'Klaipeda',
    hasDog: true,
  },
];
const rez = {
  u_1: { name: 'John', town: 'London', hasDog: false },
  u_2: { name: 'Jill', town: 'Kaunas', hasDog: true },
  u_3: { name: 'Serbentautas', town: 'Klaipeda', hasDog: true },
};

type RezType = Record<SimpleUser['id'], Omit<SimpleUser, 'id'>>;

const transformToRez = (arr: SimpleUser[]): RezType => {
  return arr.reduce((acc: RezType, curr: SimpleUser) => {
    const { id, ...rest } = curr;
    acc[id] = rest;
    return acc;
  }, {});
};
console.log(transformToRez(usersT));
const rez1: RezType = transformToRez(usersT);
console.log('rez1 ===', rez1);

// console.log('usersT ===', usersT);
// 4 grazina masyva kuriame yra masyvas, kurio pirmas elemnetas yra id, o antrras ar turi suni. Tipai pagal usersT
// [
//   ['u_1', false],
//   ['u_2', true],
//   ['u_3', true],
// ];

type IdAndHasDog = [string, boolean];
interface TransformToIdAndHasDog {
  (arr: SimpleUser[]): IdAndHasDog[];
}
const ourFn: TransformToIdAndHasDog = (arr) => {
  return arr.map((uObj: SimpleUser): IdAndHasDog => {
    return [uObj.id, uObj.hasDog];
  });
};
const ourFnShort: TransformToIdAndHasDog = (arr) =>
  arr.map((uObj: SimpleUser): IdAndHasDog => [uObj.id, uObj.hasDog]);

console.log(ourFnShort(usersT));

// type IdAndHasDogOr = (string | boolean)[];

// const t1: IdAndHasDogOr = ['bla', 'false'];
