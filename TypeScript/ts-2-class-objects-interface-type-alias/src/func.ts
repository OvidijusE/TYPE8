// isiimportuojam people ir interface
import { people, UserInfs } from './data/persons.js';

// 1. parasyti Fn kuri atspausdina visus vyrus
function onlyMen(arr: UserInfs[]): UserInfs[] {
  return arr.filter((uObj: UserInfs): boolean => uObj.sex === 'male');
}
console.log(onlyMen(people));
// 1.1 parasyti Fn kuri  atspausdina moteris
function onlyWomen(arr: UserInfs[]): UserInfs[] {
  return arr.filter((uObj: UserInfs): boolean => uObj.sex === 'female');
}
console.log(onlyWomen(people));

// 2. parasyti Fn kuri grazina masyve moteris jaunesnies nei 35 metai
function youngLadies(arr: UserInfs[]): UserInfs[] {
  return arr.filter((uObj: UserInfs): boolean => uObj.sex === 'female' && uObj.age < 35);
}
// youngLadies([1, 3]);
console.log(youngLadies(people));
// 2.1 parasyti Fn kuri grazina masyve varda ir pavarde jaunesnies nei 35 metai

// 3. parasyti interface funkcijai ir Fn kuri grazina masyve visus žmones kurie turi mašinas

// 4. parasyti fn atspausdinti visų vairuojančių žmonių lytis
// 4.1 parasyti fn grazinti objektu masyva kuriame yra vardas ir lytis visų vairuojančių žmonių

// 5. parasyti fn kuri suskaiciuoja ir grazina kiek yra vairuojanciu vyru ir moteru
// pvz {man: 4, woman: 5}
interface Drivers {
  man: number;
  woman: number;
}

function getDriversObj(arr: UserInfs[]): Drivers {
  const localDrivers: Drivers = {
    man: 0,
    woman: 0,
  };
  arr
    .filter((p: UserInfs): boolean => p.hasCar)
    .forEach((p: UserInfs): void => {
      if (p.sex === 'male') {
        localDrivers.man += 1;
      } else {
        localDrivers.woman += 1;
        //   localDrivers.woman++;
      }
    });
  return localDrivers;
}
function getDriversObjReduce(arr: UserInfs[]): Drivers {
  const startingPoint: Drivers = {
    man: 0,
    woman: 0,
  };

  return arr.reduce((localDrivers: Drivers, currentPerson: UserInfs) => {
    if (currentPerson.hasCar === true) {
      if (currentPerson.sex === 'male') {
        localDrivers.man = localDrivers.man + 1;
      } else {
        localDrivers.woman++;
      }
    }
    return localDrivers;
  }, startingPoint);
}
const result = getDriversObj(people);
console.log('result ===', result);

const rezult1 = getDriversObjReduce(people);
console.log('rezult1 ===', rezult1);
// 6.  parasyti fn kuri grazina objektu masyva kuriame yra vardas, pavarde, ir lytis lietuviskai.
