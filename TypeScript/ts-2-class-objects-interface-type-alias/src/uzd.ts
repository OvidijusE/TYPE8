interface UserInterFace {
  name: string;
  surname: string;
  sex: 'male' | 'female';
  age: number;
  income: number;
  married: boolean;
  hasCar: boolean;
}

const user1: UserInterFace = {
  name: 'Jonas',
  surname: 'Jonaitis',
  sex: 'male',
  age: 26,
  income: 1200,
  married: false,
  hasCar: false,
};

interface FakeStoreInterface {
  id: number;
  qty: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const fakeStore1: FakeStoreInterface = {
  id: 1,
  qty: 15,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

type users = {
  username: string;
  password: number;
  id: string;
};

const users = [
  {
    username: 'Serbentautas',
    password: '123456',
    id: 'u_123',
  },
  {
    username: 'Gaublys',
    password: 'asdddsss',
    id: 'u_456',
  },
  {
    username: 'Morkunas',
    password: 'grauzikas',
    id: 'u_752',
  },
];

interface UsersWithPassInterface {
  username: string;
  password: string;
  id: string;
}
interface UsersWithPassAndOnlineInterface extends UsersWithPassInterface {
  isOnline: boolean;
}

const users2: UsersWithPassInterface[] = [
  {
    username: 'Serbentautas',
    password: '123456',
    id: 'u_123',
  },
  {
    username: 'Gaublys',
    password: 'asdddsss',
    id: 'u_456',
  },
  {
    username: 'Morkunas',
    password: 'grauzikas',
    id: 'u_752',
  },
];

function praturtintiUser2(arr: UsersWithPassInterface[]): UsersWithPassAndOnlineInterface[] {
  const usersWithIsOnline: UsersWithPassAndOnlineInterface[] = arr.map(
    (uObj: UsersWithPassInterface) => {
      console.log('uObj ===', uObj);
      return { ...uObj, isOnline: Boolean(Math.round(Math.random())) };
    }
  );
  return usersWithIsOnline;
}
const turtingi = praturtintiUser2(users2);
console.log('turtingi ===', turtingi);
