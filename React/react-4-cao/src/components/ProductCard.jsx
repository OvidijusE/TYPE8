import { useEffect, useState } from 'react';

export default function CardList() {
  const [cardsArray, setCardsArray] = useState([]);
  async function getCard() {
    const resp = await fetch(`https://golden-whispering-show.glitch.me`);
    const dataInJS = await resp.json();
    setCardsArray(dataInJS);
  }
  useEffect(() => {
    getCard();
  });
  return (
    <div className='cards-display'>
      {cardsArray.length === 0 && <h2>Loading products...</h2>}
      {cardsArray.map((cObj, id) => (
        <div key={id} className='card'>
          <img className='product-img' src={cObj.image} alt='Product' />
          <h2 className='title'>{cObj.title}</h2>
          <p className='price'>{cObj.price}</p>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
