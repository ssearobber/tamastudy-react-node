import React from 'react';
import { Apps } from '@material-ui/icons';
import { css } from '@emotion/core';
import Typo from '../../atoms/Typo';
import { useTheme } from 'emotion-theming';
import NavTagItem from '../../molecules/NavTagItem';
const HomeNavSlider = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 2rem 2rem 2rem 0;
      `}
    >
      <div>
        <div
          css={css`
            display: flex;
            width: 100vw;
            overflow-x: scroll;
            &::-webkit-scrollbar {
              display: none;
            }
          `}
        >
          <NavTagItem variant="Android" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="Apple" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="Brightness2" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BlurCircular" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
        </div>
      </div>
      {/* <div
        css={css`
          width: 20px;
          text-align: right;
        `}
      >
        <Apps style={{ fontSize: 30 }} />
      </div> */}
    </div>
  );
};
export default HomeNavSlider;
