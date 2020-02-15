import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';

const GLink = ({ linkTitle, ...rest }) => {
  const LinkMapping = {
    HOME: '/',
    TAMA: '/tama',
    CONTACT: '/contact'
  };

  return (
    <div {...rest}>
      <Link
        to={LinkMapping[linkTitle]}
        css={css`
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
          color: inherit;
          transition: all 0.5s;
          display: block;
          width: 100px;
          text-align: center;
          &:hover {
            color: black;
            font-weight: 1000;
          }
        `}
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default GLink;
