import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className='App'>
      <h1>Heloo again world</h1>
      <Button size='large'>Large btn</Button>
      <Button variant='secondary' size='small'>
        Small btn
      </Button>
      <Button>Click me</Button>
      <Button>ha</Button>
      <Button customFontSize={30}>customFontSize 30</Button>
    </div>
  );
}

export default App;
