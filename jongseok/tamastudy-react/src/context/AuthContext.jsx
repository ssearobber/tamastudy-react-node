import { createContext } from 'react';

const initialAuthContext = {
  isLoggedIn: false,
};

const AuthContext = createContext(initialAuthContext);

export default AuthContext;
