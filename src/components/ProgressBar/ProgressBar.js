/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 16,
    radius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <>
      <Wrapper
        style={{
          '--width': `370px`,
          '--padding': `${styles.padding}px`,
          '--radius': `${styles.radius}px`,
        }}
        role='progressbar'
        aria-valuenow={value}
        aria-valuemin='0'
        aria-valuemax='100'>
        <BarTrimmer>
          <Bar
            style={{
              '--width': `${value}%`,
              '--height': `${styles.height}px`,
            }}
          />
        </BarTrimmer>
      </Wrapper>
      <VisuallyHidden>Progress {value} Percent</VisuallyHidden>
    </>
  );
};

const Wrapper = styled.div`
  border-radius: var(--radius);
  width: var(--width);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
`;
const BarTrimmer = styled.div`
  border-radius: 4px;

  /* trim off corners when near 100% */
  overflow: hidden;
`;
const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
