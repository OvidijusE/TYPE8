// Basic types

let favoriteColor: any = 'green';
favoriteColor = 0;
favoriteColor = true;
favoriteColor = undefined;

// implicit type
let username: string = 'James';
// explicit type
let lastName: string = 'Bond';
// lastName = 5;

let age: number;
// age = '28';

let isAdmin: boolean = false;
// isAdmin = 0;

let password: null = null;
// password = 0;

let email: undefined = undefined;

// union type - vineas arba kitas string | number
let user1: boolean | string = false;
user1 = 'Mike';
// user1 = 0;

// Reference type

// array type
let colors: string[] = ['red', 'green', 'yellow'];
// colors.push('5');
const nums: number[] = [1, 2, 3];

// union type - vineas arba kitas string | number

const things: (string | number)[] = ['red', 'green', 'yellow', 1, 0];
