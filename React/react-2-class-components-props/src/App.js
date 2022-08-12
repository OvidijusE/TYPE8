import './App.css';
import img1 from './assets/newyork.jpg';
import img2 from './assets/paris.jpg';
import img3 from './assets/sanfran.jpg';

import MyBtn from './components/UI/MyBtn';
import CardImage from './components/Card/CardImage';
import CardContent from './components/Card/CardContent';
import Icon from './components/UI/Icon';
import Card from './components/Card/Card';

const card1Data = {
  title: 'New York',
  image: img1,
  date: '2022-05-15',
  text: 'Heloo from New York',
};
const card2Data = {
  title: 'Paris',
  image: img2,
  date: '2022-06-15',
  text: 'Heloo from Paris',
};
const card3Data = {
  title: 'San Francisko',
  image: img3,
  date: '2022-06-15',
  text: 'Heloo from San Francisko',
};

const cardsData = [card1Data, card2Data, card3Data];

function App() {
  return (
    <div className='App'>
      <MyBtn text='I am reusable component' />

      <h1 className='main-title'>Heloo again world</h1>
      <Icon icon='fa-facebook-official' />
      <Icon icon='fa-instagram' />
      <div className='card-container'>
        <Card data={cardsData[0]} />
        <Card data={cardsData[1]} />
        <Card data={cardsData[2]} />
      </div>
    </div>
  );
}

export default App;
