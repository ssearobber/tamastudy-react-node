import React from 'react';
import { css } from '@emotion/core';
import Modal from '../Modal';

const GlobalNavigator = ({ showModal }) => {
  return (
    <Modal>
      <div
        css={css`
          z-index: 11;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
          height: 100vh;
          width: 40%;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
          transition: all 200ms ease-in-out;
          transform: ${showModal ? `translateX(0%)` : `translateX(-100%)`};
          opacity: ${showModal ? 1 : 0.5};
        `}
      >
        content portal2
      </div>
    </Modal>
  );
};

export default GlobalNavigator;
