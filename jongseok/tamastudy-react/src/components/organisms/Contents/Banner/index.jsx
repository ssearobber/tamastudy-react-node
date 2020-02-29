import React from 'react';
import { css } from '@emotion/core';
import mediaQuery from '../../../../theme/mediaQuery';
import theme from '../../../../theme';

const DATA = [
  'https://brandavenue.r10s.jp/img/brand/1040.jpg',
  'https://brandavenue.r10s.jp/img/brand/8785.jpg',
  'https://brandavenue.r10s.jp/img/brand/7415.jpg',
  'https://brandavenue.r10s.jp/img/brand/7364.jpg',
  'https://brandavenue.r10s.jp/img/brand/7364.jpg',
  'https://brandavenue.r10s.jp/img/brand/7415.jpg',
];

const Banner = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        ${mediaQuery(2)} {
          width: 1000px;
          margin: 0 auto;
          justify-content: space-between;
          flex-wrap: nowrap;
        }
      `}
    >
      {DATA.map((data) => (
        <div
          key={data}
          css={css`
            width: 182px;
            height: 55px;
            border: 1px solid ${theme.colors.base.grey};
            margin-bottom: ${theme.space}px;
            &:nth-of-type(4),
            :nth-of-type(5),
            :nth-of-type(6) {
              margin-bottom: 0;
            }
            ${mediaQuery(2)} {
              &:not(:last-of-type) {
                margin-right: ${theme.space}px;
              }
            }
          `}
        >
          <img
            src={data}
            alt="banner"
            css={css`
              width: 100%;
              height: 100%;
              object-fit: fill;
            `}
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;
