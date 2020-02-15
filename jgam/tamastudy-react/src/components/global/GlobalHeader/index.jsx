import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import GLink from '../../atoms/GLink';

const GlobalHeader = () => {
  const NAV_TITLE = ['HOME', 'TAMA', 'CONTACT'];
  return (
    <header>
      {/* Global Header */}
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          padding: 20px;
        `}
      >
        <div
          css={css`
            width: 100px;
          `}
        >
          <img
            css={css`
              width: 100%;
              height: 100%;
              object-fit: fill;
            `}
            src='data:image/png;base64,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'
            alt='logoName'
          />
        </div>
        <nav
          css={css`
            display: flex;
            > div {
              margin-right: 10px;
            }
          `}
        >
          {NAV_TITLE.map(title => (
            <GLink
              key={title}
              linkTitle={title}
              css={css`
                margin-right: 10px;
              `}
            />
          ))}
          {/* <GLink
            linkTitle='Home'
            css={css`
              margin-right: 10px;
            `}
          />
          <GLink
            linkTitle='Tama'
            css={css`
              margin-right: 10px;
            `}
          />
          <GLink
            linkTitle='Contact'
            css={css`
              margin-right: 10px;
            `}
          /> */}
        </nav>
      </div>
    </header>
  );
};

export default GlobalHeader;
