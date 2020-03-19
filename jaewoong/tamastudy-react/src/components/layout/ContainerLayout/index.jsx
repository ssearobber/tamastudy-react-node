import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../theme';
import mediaQuery from '../../../theme/mediaQuery';

const Container = styled.div`
  box-sizing: border-box;
  padding: 0 ${theme.space * 2}px;
  width: 100%;
  ${mediaQuery(2)} {
    width: 1000px;
    margin: 0 auto;
  }
`;

const ContainerLayout = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};

export default ContainerLayout;
