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

const houses = [
  {
    id: 457,
    colors: {
      roof: 'darkRed',
      fasad: 'grey',
    },
    forSale: false,
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  {
    id: 457,
    colors: {
      roof: 'tomato',
      fasad: 'grey',
    },
    forSale: true,
  },
];

// aprasyti tipa houses
// is aprasyto tipo sukurti nauja tipa kuriame butu tik spalvos
// is aprasyto tipo sukurti tipa kuriame visos savybes butu readOnly

// sukurti funkcija kuri priima argumentu usersT tipo masyva ir grazina
// 1 rez tipo masyva
// 2 grazina masyva kurio objektai turi tik name ir town
const extractTownAndName = ({ name, town }: SimpleUser): NameAndTownUser => ({ name, town });

type NameAndTownUser = Pick<SimpleUser, 'town' | 'name'>;

function getNameTown(arr: SimpleUser[]): NameAndTownUser[] {
  const nameAndTown: NameAndTownUser[] = arr.map(extractTownAndName);
  return nameAndTown;
}
console.log(getNameTown(usersT));
// 3 grazina usersT tipo masyva su visom neprivalomom reiksmem
// 4 grazina masyva kuriame yra masyvas, kurio pirmas elemnetas yra id, o antrras ar turi suni. Tipai pagal usersT
// [
//   ['u_1', false],
//   ['u_2', true],
//   ['u_3', true],
// ];
