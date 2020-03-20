import React, { useContext } from 'react';
import LoginForm from '../../components/organisms/LoginForm';
import AuthContext from '../../context/AuthContext';

const Login = () => {
  const auth = useContext(AuthContext);
  return <LoginForm handleLogInFn={auth.handleLogInFn} />;
};

export default Login;
