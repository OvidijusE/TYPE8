import { useState, useEffect } from 'react';
import CartCard from '../components/products/CartCard';

const CartPage = () => {
  const [cartArr, setCartArr] = useState([]);
  const getProductsAndSetState = async () => {
    const resp = await fetch('../src/db/store.json');
    const dataInJs = await resp.json();
    const cartData = dataInJs['cart'];
    console.log('cartData ===', cartData);

    const onlyDataWeNeed = cartData.map(({ id, item, price }) => ({
      id,
      item,
      price,
    }));
    setCartArr(onlyDataWeNeed);
  };
  useEffect(() => {
    getProductsAndSetState();
  }, []);
  return (
    <div>
      <h1>Cart</h1>
      <div className='product-grid'>
        {cartArr.map((cObj) => (
          <CartCard key={cObj.id} {...cObj} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
