import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../theme';
import mediaQuery from '../../../theme/mediaQuery';
import ContainerLayout from '../../layout/ContainerLayout';
import useAuthContext from '../../../hooks/useAuthContext';
import PublicNav from '../../molecules/PublicNav';
import PrivateNav from '../../molecules/PrivateNav';

const Container = styled(ContainerLayout)`
  display: grid;
  grid-auto-rows: ${theme.space * 4}px;
  align-items: center;
  ${mediaQuery(1)} {
    display: flex;
    justify-content: flex-start;
    padding: ${theme.space * 2}px;
  }
`;

const Navigation = () => {
  const auth = useAuthContext();

  return (
    <Container>
      <PublicNav />
      {auth.isLoggedIn && <PrivateNav />}
    </Container>
  );
};

export default Navigation;
