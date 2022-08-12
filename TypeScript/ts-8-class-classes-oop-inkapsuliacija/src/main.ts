import Account from './class/Account.js';
import Transaction from './class/Transaction.js';

const acc = new Account(1, 'Serbentautas', 5);
acc.username = 'Serbas';

const acc2 = new Account(2, 'James Bond', 500);
acc2.deposit(500);
// acc2.owner = 'Mike';
acc.changeOwnerName('Serverijus', 'secret1');
console.log('acc ===', acc);
console.log('acc2 ===', acc2);

const tr1 = new Transaction('Serbentautas', 'Mike', 150);
console.log('tr1 ===', tr1);
