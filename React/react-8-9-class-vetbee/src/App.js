import { useReducer, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ThemeContext from './components/store/themeContext';
import AddMedsPage from './pages/AddMedsPage/AddMedsPage';
import AddPetPage from './pages/AddPetPage/AddPetPage';
import MedicationsPage from './pages/MedicationsPage/MedicationsPage';
import PetsPage from './pages/PetsPage/PetsPage';
import ViewLogsPage from './pages/ViewLogsPage/ViewLogsPage';

function App() {
  const initialState = { darkMode: false };

  function themeReducer(state, action) {
    switch (action.type) {
      case 'LIGHTMODE':
        return { darkMode: false };
      case 'DARKMODE':
        return { darkMode: true };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(themeReducer, initialState);

  function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
      <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
        {props.children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeProvider>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/ViewLogsPage'>
            <ViewLogsPage />
          </Route>
          <Route path='/AddMedsPage'>
            <AddMedsPage />
          </Route>
          <Route path='/AddPetsPage'>
            <AddPetPage />
          </Route>
          <Route path='/medications'>
            <MedicationsPage />
          </Route>
          <Route exact path='/'>
            <PetsPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
