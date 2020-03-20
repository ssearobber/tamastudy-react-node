import React from 'react';
import HeaderPresenter from './HeaderPresenter';
import useAuthContext from '../../../hooks/useAuthContext';

const HeaderContainer = () => {
  const auth = useAuthContext();

  return (
    <HeaderPresenter
      isLoggedIn={auth.isLoggedIn}
      handleLogInFn={auth.handleLogInFn}
      handleLogOutFn={auth.handleLogOutFn}
    />
  );
};

export default HeaderContainer;
