import React from 'react';
import { css } from '@emotion/core';
import GLink from '../../../atoms/GLink';
import Logo from '../../../atoms/Logo';
import { TITLE } from '../../../atoms/GLink/Constants';
const GlobalHeader = () => {
  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 20px;
      `}
    >
      <Logo />

      <nav
        css={css`
          display: flex;
        `}
      >
        {TITLE.map(title => {
          return (
            <GLink
              key={title}
              linkTo={`/${title}`}
              linkTitle={title}
              css={css`
                margin-right: 20px;
              `}
            />
          );
        })}
      </nav>
    </header>
  );
};
export default GlobalHeader;
