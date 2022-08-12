import { cardData } from '../../Data';

function Card() {
  return (
    <div className='portfolio-cards'>
      {cardData.map((cObj) => (
        <div className='card'>
          <img key={cObj.id} className='portfolio-image' src={cObj.image} alt='portfolio-pic' />
          <div className='image-text'>{cObj.text}</div>
        </div>
      ))}
    </div>
  );
}

export { Card };
