import './App.css';
import Card from './components/Card/Card';
import CardStyled from './components/CardStyled/CardStyled';
import Header from './components/header/Header';
import MyButton from './components/MyButton/MyButton';
import Search from './components/Search/Search';

function App() {
  const isLarge = true;

  const btnStyles = {
    background: 'blue',
    fontSize: isLarge ? '25px' : '10px',
  };

  return <Search />;

  return (
    <div className='App'>
      <Header />
      <CardStyled />
      <button style={btnStyles}>click</button>
      <button>click no style</button>
      <MyButton />
      <Card />
    </div>
  );
}

export default App;
