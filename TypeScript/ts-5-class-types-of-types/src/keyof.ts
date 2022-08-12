type Dog = {
  breed: 'doberman' | 'chichuaha';
  longHair: boolean;
  name: string;
};

type Cat = {
  [key: string]: string | number;
};

const cat1: Cat = {
  breed: 'paprastas',
  town: 'Vilnius',
  id: 1,
};

// type DogBreed = Pick<Dog, 'breed'>;
type DogBreed = Dog['breed'];

type UserFull = {
  readonly id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// gauti UserFull tipo kopija
type UserFullCopy = {
  [propertyName in keyof UserFull]: UserFull[propertyName];
};

type UserFullNoObjects = Omit<UserFull, 'company' | 'address'>;

type UserFullTypeString = {
  [propertyName in keyof UserFull]: string;
};

type UserFullTypeStringNumber = {
  [propertyName in keyof UserFull]: string | number;
};

type UserFullOptional = {
  [propertyName in keyof UserFull]?: UserFull[propertyName];
};

type UserFullReadonly = {
  -readonly [propertyName in keyof UserFull]: UserFull[propertyName];
};

type UserFullNoOptional = {
  [propertyName in keyof UserFull]-?: UserFull[propertyName];
};

const userFull11: UserFull = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};
