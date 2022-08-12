import { items, Item } from './db/items.js';

console.log('main.ts');

console.log(items.length);

// 3. sukurti funkcija kuri grazina visu kategoriju masyva.
const getSinglePropertyArr = (arr: Item[], property: 'category' | 'image'): string[] => {
  const singlePropArr: string[] = arr.map((pObj: Item): string => pObj[property]);
  return singlePropArr;
};

const allCatsArr: string[] = getSinglePropertyArr(items, 'category');

// 3.1 sukurti funkcija atrinkti is kategoriju tik unikalias reiksmes
console.log([1, 2, 3].includes(1));

const getUniquesFromArr = (arr: string[]): string[] => {
  const uniqueArr: string[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const str of arr) {
    if (!uniqueArr.includes(str)) {
      uniqueArr.push(str);
    }
  }
  console.log('uniqueArr ===', uniqueArr);
  return uniqueArr;
};
getUniquesFromArr(allCatsArr);

// getUniquesFromArr - reduce

// 5. sukurti funkcija kuri grazina masyva su visais paveiksleliais.
// eslint-disable-next-line import/prefer-default-export
export const allImagesArr = getSinglePropertyArr(items, 'image');
console.log('allImagesArr ===', allImagesArr);
