import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/core';

const GLink = ({ linkTitle, linkTo, ...rest }) => {
  return (
    <div {...rest}>
      <Link
        to={linkTo}
        css={css`
          text-decoration: none;
          font-size: 20px;
          color: inherit;
          font-weight: 600;
          transition: all 0.2s; /*애니메이션 효과*/
          display: block;
          width: 100px;
          &:hover {
            color: gold;
            font-weight: 900;
          }
        `}
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default GLink;
