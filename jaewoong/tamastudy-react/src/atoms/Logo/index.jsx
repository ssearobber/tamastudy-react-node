import React from 'react';
import { css } from '@emotion/core';
import LOGO from '../../img/logo/Swoo.png';

const Logo = () => {
  return (
    <div
      css={css`
        width: 200px;
      `}
    >
      <img
        css={css`
          width: 50%;
          height: 50%;
          object-fit: fill;
        `}
        src={LOGO}
        alt="logoImage"
      />
    </div>
  );
};

export default Logo;
