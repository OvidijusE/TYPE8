import './App.css';
import HeaderSubtitle from './components/Header/HeaderSubtitle';
import HeaderTitle from './components/Header/HeaderTitle';
import PortfolioText from './components/PortolioText/Porfoliotext';
import PortfolioTitle from './components/PortolioText/PortfolioTitle';
import HeaderButton from './components/UI/Button';
// import img1 from './assets/forest.jpg';
// import img2 from './assets/girl-in-field.jpg';
import { Card } from './components/MainCards/Card';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <HeaderTitle title='Title' />
        <HeaderSubtitle subtitle='Some about text' subtitle1='in two lines' />
        <HeaderButton text='Button' />
      </header>
      <main className='main'>
        <div className='portfolio'>
          <PortfolioTitle title='Portfolio' />
          <PortfolioText text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium ex quasi expedita odio eius totam tempore laborum voluptates repellendus?' />
        </div>

        <Card />
      </main>
    </div>
  );
}
export default App;
