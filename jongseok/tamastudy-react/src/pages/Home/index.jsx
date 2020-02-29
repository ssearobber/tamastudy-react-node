import React, { useContext } from 'react';
import WithAuth, { AuthContext } from '../../hoc/WithAuth';
import HomeNavSlider from '../../components/organisms/HomeNavSlider';
import HomeMainSlider from '../../components/organisms/HomeMainSlider';
import { css } from '@emotion/core';
import theme from '../../theme';
import ContentTitle from '../../components/molecules/ContentTitle';

const Home = () => {
  // eslint-disable-next-line
  const auth = useContext(AuthContext);
  return (
    <>
      {/* <HomeNavSlider css={marginBottom(1)} />
      <HomeMainSlider /> */}

      <ContentTitle text="DUMMY CONTENT" />
    </>
  );
};

const marginBottom = (num = 1) => css`
  margin-bottom: ${theme.space * num}px;
`;

export default WithAuth(Home);
