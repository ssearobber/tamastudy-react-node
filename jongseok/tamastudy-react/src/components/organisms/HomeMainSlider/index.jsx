import React from 'react';
import Swiper from 'react-id-swiper';
import uuid from 'uuid/v4';
import { css } from '@emotion/core';
import mediaQuery from '../../../theme/mediaQuery';

const DUMMY_DATA = [
  {
    id: uuid(),
    imgSrc:
      'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imgAlt: 'sample image',
  },
  {
    id: uuid(),
    imgSrc:
      'https://images.unsplash.com/photo-1536584754829-12214d404f32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imgAlt: 'sample image',
  },
  {
    id: uuid(),
    imgSrc:
      'https://images.unsplash.com/photo-1582499520676-c432ca4c5596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    imgAlt: 'sample image',
  },
];

const HomeMainSlider = ({ ...props }) => {
  const params = {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  return (
    <div {...props}>
      <Swiper {...params}>
        {DUMMY_DATA.map((data) => (
          <div
            key={data.id}
            css={css`
              width: 100vw;
              height: 400px;
              ${mediaQuery(2)} {
                height: 600px;
              }
            `}
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
              `}
              src={data.imgSrc}
              alt={data.imgAlt}
            />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeMainSlider;
