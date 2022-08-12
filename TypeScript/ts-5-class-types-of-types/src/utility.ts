console.log('utility.ts');

interface OurUser {
  readonly id: number;
  name: string;
  username?: string | undefined;
  email: string;
  isOnline: boolean;
  favoriteColors?: string[];
  likesSports?: boolean;
}
// tipa su vosom savybem kaip ir OurUser bet neprivalomom
type OptionalOurUser = Partial<OurUser>;

const opUser: OptionalOurUser = {
  name: 'Mike',
};

type ReqUser = Required<OurUser>;

// sukurti nauja tippa pagal OurUser kuriame buti tik id, name, username
type OnlyUser = Pick<ReqUser, 'id' | 'name' | 'username'>;

const onluUser: OnlyUser = {
  id: 457,
  name: 'Jill',
  username: 'Jilltional',
};

// sukurti nauja tippa pagal OurUser kuriame nera id, name, username
type NoIdNameUserName = Omit<ReqUser, 'id' | 'name' | 'username'>;

const user2: OurUser = {
  id: 2,
  name: 'James',
  email: 'James@bas.com',
  isOnline: true,
};

const user1: ReqUser = {
  id: 1,
  name: 'Serbentautas',
  username: 'Serbas',
  email: 'ser@bas.com',
  isOnline: false,
  favoriteColors: ['red', 'yellow', 'green'],
  likesSports: true,
};
// user1.id = 5; // err
