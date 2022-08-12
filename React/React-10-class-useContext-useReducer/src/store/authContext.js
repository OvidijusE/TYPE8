import { createContext } from 'react';

// sukuriam context
// argumentai tik autocompletui
const AuthContext = createContext({
  currentUser: '',
  login: () => {},
  logout: () => {},
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;
