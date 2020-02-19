import React from 'react';
import { css } from '@emotion/core';
import Modal from '../Modal';

const GlobalAlert = ({ showAlert, handleCloseAlert }) => {
  return (
    <Modal>
      <div
        css={css`
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 200ms ease-in-out;
          opacity: ${showAlert ? 1 : 0};
        `}
        onClick={handleCloseAlert}
      >
        <p
          css={css`
            width: 200px;
            height: 100px;
            background-color: red;
            color: white;
          `}
        >
          alert!!!!{'   '}
        </p>
      </div>
    </Modal>
  );
};

export default GlobalAlert;
