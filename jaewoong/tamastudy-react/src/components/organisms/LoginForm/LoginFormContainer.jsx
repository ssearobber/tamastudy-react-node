import React, { useState } from 'react';
import LoginFormPresenter from './LoginFormPresenter';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const LoginFormContainer = ({ history, handleLogInFn, loading }) => {
  //history는 export default withRouter(LoginFormContainer);에서 가상으로 만들어 지는 매게변수
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    // if (loginData.email.length > 5 && loginData.password.length > 2) {
    handleLogInFn(loginData, history);
    // if (!loading) {
    // setTimeout(() => {
    // history.push('/');
    // }, 3000);
    // }
    // }
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <LoginFormPresenter
      loginData={loginData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      loading={loading}
    />
  );
};

LoginFormContainer.propTypes = {
  logInFn: PropTypes.func,
};

export default withRouter(LoginFormContainer);
