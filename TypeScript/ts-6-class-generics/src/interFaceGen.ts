interface Result<Type> {
  data: Type;
  error: string | null;
}
interface ShopProduct {
  title: string;
}
interface ShopUser {
  name: string;
}

function myFetch<T>(url: string): Result<T> {
  // uzklausa
  return { data: 'OK', error: null };
}

const products1 = myFetch<ShopProduct>('www.shop.com/products');
console.log('products1.data.title ===', products1.data.title);

const user1 = myFetch<ShopUser>('www.shop.com/users');
console.log('user1.data.name ===', user1.data.name);

// sukurti funkcija echo
function echo(arg: string): void {
  console.log('arg ===', arg);
}
// ima viena argumenta : string ir atspausdina consoleje ir grazina
// panaudojam ta funkcija
// padaryti kad funkcija veiktu su bet kokiu tipu (generic tipas)
// apriboti kad funkcija galetu priimti tik skaiciu, stringa, boolena
