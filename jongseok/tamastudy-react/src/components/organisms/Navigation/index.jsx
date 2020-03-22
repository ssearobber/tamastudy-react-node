import React from 'react';
import styled from '@emotion/styled';
import theme from '../../../theme';
import useAuthContext from '../../../hooks/useAuthContext';
import { NavLink } from 'react-router-dom';
import { PowerSettingsNew, AspectRatio, Close } from '@material-ui/icons';

const Container = styled.ul`
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${theme.colors.base.darkGrey};
  width: 345px;
  transition: transform 0.25s;
  transform: ${(props) => (props.isNavOpen ? 'translateX(-375px)' : 'translateX(0)')};
  height: 100vh;
  z-index: 10000;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavUl = styled.ul`
  margin-top: 6rem;
  position: relative;
`;

const NavList = styled.li`
  list-style: none;
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  &:hover {
    color: black !important;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: ${theme.colors.text.darkPrimary};
    transform: scaleY(0);
    transition: transform 0.1s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.1s, background-color 0.1s;
    transform-origin: center;
  }

  &:hover::before {
    transform: scaleY(1);
    width: 100%;
  }

  &:hover::before,
  &-active::before {
    transform: scaleY(1);
    width: 100%;
  }

  &:active::before {
    background-color: #444444;
  }
`;

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  padding: 2rem 0;
  padding-left: 5rem;
  position: relative;
  color: white;
  display: flex;
  align-items: center;
`;

const ListText = styled.span`
  margin-left: 3rem;
  font-size: 1.8rem;
`;

const Legal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  font-size: 1.4rem;
`;

const CloseBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1.5rem;
  cursor: pointer;
`;

const activeStyle = { backgroundColor: theme.colors.text.darkPrimary };

const Navigation = ({ isNavOpen, handleNavigation }) => {
  const auth = useAuthContext();

  return (
    <Container isNavOpen={isNavOpen}>
      <CloseBox onClick={handleNavigation}>
        <Close style={{ color: theme.colors.base.white, fontSize: 20 }} />
      </CloseBox>
      <NavUl>
        <NavList>
          <CustomNavLink to={'/posts'} activeStyle={activeStyle} onClick={handleNavigation}>
            <PowerSettingsNew style={{ fontSize: 14 }} />
            <ListText className={'list-text'}>Posts</ListText>
          </CustomNavLink>
        </NavList>
        <NavList>
          <CustomNavLink to={'/private'} activeStyle={activeStyle} onClick={handleNavigation}>
            <AspectRatio style={{ fontSize: 14 }} />
            <ListText className={'list-text'}>private 1</ListText>
          </CustomNavLink>
        </NavList>
        <NavList>
          <CustomNavLink to={'/4214'} activeStyle={activeStyle} onClick={handleNavigation}>
            <AspectRatio style={{ fontSize: 14 }} />
            <ListText className={'list-text'}>Board</ListText>
          </CustomNavLink>
        </NavList>
        <NavList>
          <CustomNavLink to={'/123'} activeStyle={activeStyle} onClick={handleNavigation}>
            <AspectRatio style={{ fontSize: 14 }} />
            <ListText className={'list-text'}>Study</ListText>
          </CustomNavLink>
        </NavList>
        <NavList>
          <CustomNavLink to={'/123'} activeStyle={activeStyle} onClick={handleNavigation}>
            <AspectRatio style={{ fontSize: 14 }} />
            <ListText className={'list-text'}>private 1</ListText>
          </CustomNavLink>
        </NavList>
        <NavList>
          <CustomNavLink to={'/123'} activeStyle={activeStyle} onClick={handleNavigation}>
            <AspectRatio style={{ fontSize: 14 }} />
            <ListText className={'list-text'}>Contact</ListText>
          </CustomNavLink>
        </NavList>
      </NavUl>

      <Legal>&copy; 2020 by Tamastudy. All rights reserved</Legal>
    </Container>
  );
};

export default Navigation;
