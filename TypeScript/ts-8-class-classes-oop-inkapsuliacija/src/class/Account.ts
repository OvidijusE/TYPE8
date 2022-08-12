// import Transaction from './Transaction.js';

// OOP
export default class Account {
  // properties
  // public - default, access from anywere
  // private - access from whitnin class
  // protected - access from within and inherited classes

  username?: string | undefined;
  // private transactions: Transaction[] = [];
  // paraterer properties
  constructor(public readonly id: number, private _owner: string, private _balance: number) {}

  deposit(value: number): void {
    if (value < 0) throw new Error('Invalid amount');
    // record transaction
    this._balance += value;
  }

  //   private calculateTax(tax: number): void {
  //     console.log(this._balance * tax);
  //   }

  changeOwnerName(newName: string, psw: string): string | void {
    if (psw !== 'secret') {
      console.log('blogas slaptazodis');

      return 'blogas slaptazodis';
    }
    this._owner = newName;
  } // leisti pakeisti varda jei gautas slaptazodis yra  === secret

  // getter - get <savybes pavadinimas>
  // setter

  get balace(): number {
    return this._balance;
  }

  get owner(): string {
    return this._owner;
  }
}
