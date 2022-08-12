export default class Transaction {
  timestamp: Date;
  constructor(public from: string, public to: string, public amount: number) {
    this.timestamp = new Date();
  }
}
