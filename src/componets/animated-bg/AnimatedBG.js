import React from 'react';
import { Fragment } from 'react';

import styled, { keyframes } from 'styled-components';

import bgStarts from '../../assets/background-stars.svg';

const StarsAnim = keyframes`
 
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
`;

const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: transparent url(${bgStarts}) repeat top center;

  &.static {
    z-index: -1;
  }

  &.moving {
    z-index: -2;
    animation: ${StarsAnim} 200s linear infinite;
  }
`;

const AnimatedBG = () => {
  return (
    <Fragment>
      <Stars className="static" />
      <Stars className="moving" />
    </Fragment>
  );
};

export default AnimatedBG;
