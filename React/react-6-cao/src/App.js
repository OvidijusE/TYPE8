import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/NavigationStyled/Navigation';
import AddPage from './pages/AddPageStyled/AddPage';
import HomePage from './pages/HomePageStyled/HomePage';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route path='/add'>
          <AddPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
