import React from 'react';
import { Global, css } from '@emotion/core';
import 'normalize.css';
import './font-family.css';

const GlobalStyles = () => (
  <Global
    styles={css`
      body > * {
        all: unset;
        font-family: 'Nanum Gothic';
      }
    `}
  />
);
export default GlobalStyles;
