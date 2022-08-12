import { useState, useEffect } from 'react';
import SingleProductCard from '../components/products/SingleProductCard';

const ProductsPage = () => {
  const [productsArr, setProductsArr] = useState([]);
  const getProductsAndSetState = async () => {
    const resp = await fetch('/db/products.json');
    const dataInJs = await resp.json();
    // const onlyDataWeNeed = dataInJs.map((pObj) => {
    //   return {
    //     id: pObj.id,
    //     title: pObj.title,
    //     price: pObj.price,
    //     image: pObj.image,
    //   };
    // });
    const onlyDataWeNeed = dataInJs.map(({ id, title, price, image }) => ({
      id,
      title,
      price,
      image,
    }));
    setProductsArr(onlyDataWeNeed);
  };
  useEffect(() => {
    getProductsAndSetState();
  }, []);
  return (
    <div>
      <h1>Our products</h1>
      <div className='product-grid'>
        {productsArr.map((pObj) => (
          // <SingleProductCard
          //   key={pObj.id}
          //   id={pObj.id}
          //   title={pObj.title}
          //   image={pObj.image}
          //   price={pObj.price}
          // />
          <SingleProductCard key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
