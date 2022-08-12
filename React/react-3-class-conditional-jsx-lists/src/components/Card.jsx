function Card(props) {
  console.log('props ===', props);
  // jeigu isLarge === true tai pridedam klase text-large
  // jei kortele turi klase dark tai tada ji yra tamsiu fonu ir sviesiom raidem
  // korteles dark mode sprendzia propsai <Card dark>
  const isLarge = true;
  const isDarkModeOn = props.dark;
  console.log('isDarkModeOn ===', isDarkModeOn);
  //   calculate class using variable
  const cardClasses = isDarkModeOn ? 'card dark' : 'card';
  //   calculate class using function
  function calculateCardClass() {
    let rezClass = 'card';
    if (isDarkModeOn) {
      rezClass += ' dark';
    }
    return rezClass;
  }
  return (
    // <div className={`card ${isDarkModeOn ? 'dark' : ''}`}>
    <div className={cardClasses}>
      <p>isLarge : {isLarge.toString()}</p>
      <h2 className='card-title'>Card title</h2>
      <p className={isLarge ? 'text-large' : ''}>This is card body</p>
      <button>Read more</button>
    </div>
  );
}

export default Card;
