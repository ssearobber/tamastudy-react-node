import { css } from '@emotion/core';
import { ReactComponent as Logo } from '../../../assets/images/logo/nike.svg';
import { PowerSettingsNew } from '@material-ui/icons';
import { useTheme } from 'emotion-theming';
import React, { useState } from 'react';
import SideNav from '../SideNav';
import Typo from '../../atoms/Typo';
import Container from '../../atoms/Container';

const Header = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 리랜더링이 일어날때 key를 계산하여 map을 실행시키는 함수를 기억하여, (memoization)
  // 계속 실행되는 것을 방지 -> 퍼포먼스 상승
  // 만약 이게 100초가 걸리는 함수라면 ? 라고 생각하면 편함.

  return (
    <Container>
      <header
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 2rem 2rem 2rem 0;
        `}
      >
        <div
          onClick={() => setIsModalOpen(true)}
          css={css`
            cursor: pointer;
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              width: 10rem;
            `}
          >
            <Logo />
          </div>
          <Typo variant="h2">Tokyo Tamastudy</Typo>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            padding: 1rem, 2rem, 1rem, 2rem;
            cursor: pointer;
          `}
        >
          <PowerSettingsNew />
          <Typo
            variant="body2"
            css={css`
              margin-left: ${theme.space}px;
            `}
          >
            Logout
          </Typo>
        </div>
      </header>
      <SideNav isModalOpen={isModalOpen} onClickBackdrop={() => setIsModalOpen(false)} />
    </Container>
  );
};

export default Header;
