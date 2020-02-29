import React, { useContext } from 'react';
import WithAuth, { AuthContext } from '../../hoc/WithAuth';
import HomeNavSlider from '../../components/organisms/HomeNavSlider';
import HomeMainSlider from '../../components/organisms/HomeMainSlider';
import { css } from '@emotion/core';
import theme from '../../theme';
import ContentTitle from '../../components/molecules/ContentTitle';
import ContentFrame from '../../components/molecules/ContentFrame';
import Intro from '../../components/organisms/Contents/Intro';
import Slider from '../../components/organisms/Contents/Slider';
import News from '../../components/organisms/Contents/News';
import Banner from '../../components/organisms/Contents/Banner';

const Home = () => {
  // eslint-disable-next-line
  const auth = useContext(AuthContext);
  return (
    <>
      {/* <HomeNavSlider css={marginBottom(1)} /> */}
      <HomeMainSlider css={marginBottom(8)} />
      <ContentFrame text="Intro" css={marginBottom(4)}>
        <Intro />
      </ContentFrame>

      <ContentFrame text="Slider" css={marginBottom(8)}>
        <Slider />
      </ContentFrame>

      <ContentFrame text="News" css={marginBottom(8)}>
        <News />
      </ContentFrame>

      <ContentFrame text="Banner" css={marginBottom(8)}>
        <Banner />
      </ContentFrame>
    </>
  );
};

const marginBottom = (num = 1) => css`
  margin-bottom: ${theme.space * num}px;
`;

export default WithAuth(Home);
