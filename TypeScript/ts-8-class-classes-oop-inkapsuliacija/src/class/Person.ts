class Person {
  private _todayWalked: number;
  constructor(public firstName: string, public lastName: string) {
    this._todayWalked = 0;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  walk(val: number): void {
    if (val < 0) {
      console.log('Invalid value');
    } else {
      this._todayWalked += val;
      console.log(`${this.firstName} walked ${val} kilometers just now.`);
    }
  }

  get todayWalked(): number {
    console.log(`${this.firstName} walked ${this._todayWalked} kilometers today.`);
    return this._todayWalked;
  }
}

class Student extends Person {
  constructor(public readonly email: string, firstName: string, lastName: string) {
    // super === Person.constructor()
    super(firstName, lastName);
  }
  takeTest(sub: string): void {
    console.log(`${this.firstName} is taking a test in ${sub}`);
  }
}

type TeacherSubs = 'Math' | 'Literature' | 'Architecture';
class Teacher extends Person {
  workWeek: [1?, 2?, 3?, 4?, 5?, 6?, 7?] = [];
  constructor(public subject: TeacherSubs, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  override get fullName(): string {
    return `Dr. ${super.fullName}`;
  }
}

const t1 = new Teacher('Architecture', 'James', 'Band');
const t2 = new Teacher('Math', 'Mike', 'Tyson');
// t2.walk(5);
// t2.walk(5);
// t2.walk(10);
// [7, 7, 6].forEach((t: number) => t1.walk(t));
// console.log('t1.todayWalked ===', t1.todayWalked);

t1.workWeek = [1, 2, , , 5];

console.log('t1.fullName ===', t1.fullName);

// const person1 = new Person('Serverijus', 'Serbentautas');
// const person2 = new Student('klaudijus@gmail.com', 'Klaudijus', 'Kilobaitas');
// person2.takeTest('Node authorization');
// console.log('person2 ===', person2);

// person1.walk(5);
// person1.walk(10);
// person2.walk(6);
// person2.walk(8);
// person2.todayWalked;

// console.log('person1 ===', person1);
// person1.todayWalked;
// console.log(person1.fullName);
