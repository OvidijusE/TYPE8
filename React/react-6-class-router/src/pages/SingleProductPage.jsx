import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const prId = 5;

const SingleProductPage = () => {
  const [currentProduct, setCurrentProduct] = useState([]);
  const { productId } = useParams();
  const getCurrentProductAndSave = async () => {
    const resp = await fetch('/db/products.json');
    const dataInJs = await resp.json();
    const currentProduct = dataInJs.find(({ id }) => id === +productId);
    console.log('currentProduct ===', currentProduct);
    setCurrentProduct(currentProduct);
  };
  useEffect(() => {
    getCurrentProductAndSave();
  }, []);
  return (
    <div>
      <h1>{currentProduct.title}</h1>
      <h2>{currentProduct.price}</h2>
      <img src={currentProduct.image} alt='product' />
      <p className='description'>{currentProduct.description}</p>
      <Link to={`/products`}>
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default SingleProductPage;
