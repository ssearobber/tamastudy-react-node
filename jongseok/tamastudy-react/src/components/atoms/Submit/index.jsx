import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from '../../../theme';

const Container = styled.button`
  width: 100%;
  padding: ${theme.space * 3}px 0;
  margin: ${theme.space}px 0;
  border: 0;
  color: ${theme.colors.base.white};
  background-color: ${(props) =>
    props.disabled ? theme.colors.base.grey : theme.colors.main.primary};
  pointer-events: ${(props) => props.disabled && 'none'};
  cursor: ${(props) => !props.disabled && 'pointer'};
`;

const Submit = ({ btnText, disabled, className, ...props }) => {
  return (
    <Container type={'submit'} disabled={disabled} className={className} {...props}>
      {btnText}
    </Container>
  );
};

Submit.propTypes = {
  btnText: PropTypes.string.isRequired,
  disabled: PropTypes.any,
  className: PropTypes.string,
};

export default Submit;
