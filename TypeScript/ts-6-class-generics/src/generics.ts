console.log('generics.ts');

type SomeArr = string[];
type SomeArr1 = Array<string>;
type SomeArr2 = Array<number>;

const makeTripleArray = <TypeA, TypeB>(arg: TypeA, arg2: TypeB): [TypeA, TypeA, TypeB] => [
  arg,
  arg,
  arg2,
];
const makeTripleArray1 = <TypeA>(arg: TypeA, arg2: TypeA): [TypeA, TypeA, TypeA] => [
  arg,
  arg,
  arg2,
];

const tr1 = makeTripleArray('1', true);
const sk1 = makeTripleArray<number | null, boolean>(null, false);
console.log('tr1 ===', tr1);
console.log('sk1 ===', sk1);
