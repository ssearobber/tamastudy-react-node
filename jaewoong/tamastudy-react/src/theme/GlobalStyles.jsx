import { Global, css } from '@emotion/core';
import React from 'react';
import mediaQuery from './mediaQuery';
import 'normalize.css';
import './font-family.css';
import 'swiper/css/swiper.css';
import { useTheme } from 'emotion-theming';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }
        html {
          font-size: 62.5%;

          ${mediaQuery(0)} {
            font-size: 45%;
          }

          ${mediaQuery(1)} {
            font-size: 50%;
          }

          ${mediaQuery(2)} {
            font-size: 62.5%;
          }

          ${mediaQuery(3)} {
            font-size: 75%;
          }
        }

        body > * {
          font-family: 'Nanum Gothic';
          all: unset;
        }
        /* &는 자기 자신 .main-pagination .swiper-pagination-bullet를 의미한다.*/
        .main-pagination .swiper-pagination-bullet {
          width: 1.5rem;
          height: 1.5rem;
          &-active {
            background-color: ${theme.colors.main.primary};
          }
        }
      `}
    />
  );
};
export default GlobalStyles;
