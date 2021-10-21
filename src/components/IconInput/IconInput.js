import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZES = {
    small: {
      fontSize: 14 / 16 + 'rem',
      iconSize: 16,
      paddingLeft: 24 + 'px',
    },
    large: {
      fontSize: 18 / 16 + 'rem',
      iconSize: 24,
      paddingLeft: 32 + 'px',
    },
  };

  return (
    <Wrapper
      style={{
        '--width': width + 'px',
        '--font-size': SIZES[size].fontSize,
        '--padding-left': SIZES[size].paddingLeft,
      }}>
      <VisuallyHidden>
        <label for={label}>{label}</label>
      </VisuallyHidden>
      <Input id={label} placeholder={label}></Input>
      <IconWrapper>
        <Icon id={icon} size={SIZES[size].iconSize} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 18px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 4px;
  color: ${COLORS.gray500};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${COLORS.black};
  width: var(--width);
  font-size: var(--font-size);
  padding-left: var(--padding-left);
  padding-bottom: 4px;
  font-weight: 700;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
    & + ${IconWrapper} {
      color: ${COLORS.black};
    }
  }
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
