import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import AuthContext from './store/authContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  function login(loginName) {
    // ar sutampa email ir password
    setCurrentUser(loginName);
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  const ctx = {
    currentUser,
    login,
    logout,
    isLoggedIn,
  };
  return (
    <AuthContext.Provider value={ctx}>
      <div className='App'>
        <Navigation />
        <Login />
        <Counter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
