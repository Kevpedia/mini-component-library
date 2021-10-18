import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const iconSizeInPx = 24;

  return (
    <Wrapper>
      <NativeSelect
        style={{ '--show-select': 0 }}
        value={value}
        onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}{' '}
        <IconWrapper style={{ '--icon-size': iconSizeInPx + 'px' }}>
          <Icon id='chevron-down' strokeWidth={1} size={iconSizeInPx} />
        </IconWrapper>
      </PresentationalSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: var(--show-select);
`;

const PresentationalSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray500};
  border-radius: 8px;
  padding: 12px 1rem;
  padding-right: 52px;
  font-size: ${16 / 16}rem;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--icon-size);
  height: var(--icon-size);
  pointer-events: none;
`;

export default Select;
