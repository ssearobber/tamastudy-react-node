import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';

const GLink = ({ linkTitle, ...rest }) => {
  const linkMapping = {
    HOME: '/',
    TAMA: '/tama',
    CONTACT: '/contact',
  };

  return (
    <div {...rest}>
      <Link
        to={linkMapping[linkTitle]}
        css={css`
          text-decoration: none;
          color: inherit;
          font-size: 20px;
          font-weight: 600;
          color: grey;
          transition: all 0.5s;
          width: 100px;
          &:hover {
            color: black;
            font-weight: 900px;
          }
        `}
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default GLink;
