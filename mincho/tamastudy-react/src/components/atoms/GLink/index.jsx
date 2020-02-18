import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';

const GLink = ({ linkTitle, linkTo, ...rest }) => {
  return (
    <div {...rest}>
      <Link
        to={linkTo}
        css={css`
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
          color: grey;
          transition: all 0.3s;
          display: block;
          text-align: center;
          width: 100px;
          &:hover {
            color: black;
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
