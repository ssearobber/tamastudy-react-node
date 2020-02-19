import React, { useMemo, useState } from 'react';
import { css } from '@emotion/core';
import GLink from '../../atoms/GLink';
import { GHeaderLinkMapping } from '../../atoms/GLink/LinkMapping';
import { ReactComponent as Logo } from '../../../img/logo/nike-logo@logotyp.us.svg';
import GlobalNavigator from '../GlobalNavigator';
import GlobalBackdrop from '../GlobalBackdrop';

const GlobalHeader = () => {
  // 리랜더링이 일어날때 key를 계산하여 map을 실행시키는 함수를 기억하여, (memoization)
  // 계속 실행되는 것을 방지 -> 퍼포먼스 상승
  // 만약 이게 100초가 걸리는 함수라면 ? 라고 생각하면 편함.

  const [showNavi, setShowNavi] = useState(false);
  const handleShowNavi = () => {
    setShowNavi(true);
  };
  const handleCloseNavi = () => {
    setShowNavi(false);
  };

  const renderLinks = useMemo(() => {
    console.log('I am a renderLinks!!!!'); // 최초 1번만 랜더링되는지 확인용
    const LinkKeys = Object.keys(GHeaderLinkMapping);
    return LinkKeys.map(title => (
      <GLink
        key={title}
        linkTitle={title}
        linkTo={GHeaderLinkMapping[title]}
        css={css`
          &:not(:last-of-type) {
            margin-right: 10px;
          }
        `}
      />
    ));
  }, []);

  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 20px 20px 20px 0;
      `}
    >
      <div
        css={css`
          width: 100px;
          cursor: pointer;
        `}
        onClick={handleShowNavi}
      >
        <Logo />
      </div>
      <nav
        css={css`
          display: flex;
        `}
      >
        {renderLinks}
      </nav>
      {showNavi && <GlobalBackdrop onClick={handleCloseNavi} />}
      <GlobalNavigator showModal={showNavi} />
    </header>
  );
};

export default GlobalHeader;
