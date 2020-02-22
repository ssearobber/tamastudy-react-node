import { Global, css } from '@emotion/core';
import React from 'react';
import mediaQuery from './mediaQuery';
import 'normalize.css';
import './font-family.css';

const GlobalStyles = () => (
  <Global
    styles={css`
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
    `}
  />
);
export default GlobalStyles;
