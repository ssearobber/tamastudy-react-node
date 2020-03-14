import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import theme from '../../../theme';
import mediaQuery from '../../../theme/mediaQuery';
import ContainerLayout from '../../layout/ContainerLayout';

const Container = styled(ContainerLayout)`
  display: grid;
  grid-auto-rows: ${theme.space * 4}px;
  align-items: center;
  ${mediaQuery(1)} {
    display: flex;
    justify-content: flex-start;
    padding: ${theme.space * 2}px;
  }
`;

const NavList = styled.div`
  text-align: center;
  ${mediaQuery(1)} {
    &:not(:first-of-type) {
      margin-left: ${theme.space * 2}px;
    }
    &:not(:last-of-type) {
      margin-right: ${theme.space * 2}px;
    }
  }
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  text-shadow: ${(props) => props.isNow && `2px 2px 3px rgba(0,0,0,0.3)`};
  font-size: 18px;
  line-height: ${theme.space * 3}px;
`;

const Navigation = ({ isLoggedIn, location }) => {
  return (
    <Container>
      <IsPublicNav location={location} />
      {isLoggedIn && <IsPrivateNav location={location} />}
    </Container>
  );
};

const IsPublicNav = ({ location }) => (
  <>
    <NavList>
      <NavLink to={'/posts'} isNow={location.pathname.startsWith('/posts')}>
        posts
      </NavLink>
    </NavList>
    <NavList>
      <NavLink to={'/contact'} isNow={location.pathname.startsWith('/contact')}>
        contact
      </NavLink>
    </NavList>
    <NavList>
      <NavLink to={'/public1'} isNow={location.pathname.startsWith('/public1')}>
        public 1
      </NavLink>
    </NavList>
    <NavList>
      <NavLink to={'/public2'} isNow={location.pathname.startsWith('/public2')}>
        public 2
      </NavLink>
    </NavList>
  </>
);

const IsPrivateNav = ({ location }) => (
  <>
    <NavList>
      <NavLink to={'/private1'} isNow={location.pathname.startsWith('/private1')}>
        private 1
      </NavLink>
    </NavList>
    <NavList>
      <NavLink to={'/private2'} isNow={location.pathname.startsWith('/private2')}>
        private 2
      </NavLink>
    </NavList>
  </>
);

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default withRouter(Navigation);
