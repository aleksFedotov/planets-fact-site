import React from 'react';

import { ImageContainer, Illustration } from './ImageStyles';

const Image = (props) => {
  let imgSource = require(`../../../assets/planet-${props.planet}.svg`);

  if (props.controller === 'internal structure') {
    imgSource = require(`../../../assets/planet-${props.planet}-internal.svg`);
  } else if (props.controller === 'surface geology') {
  }

  return (
    <ImageContainer>
      <Illustration imgSrc={imgSource}></Illustration>
    </ImageContainer>
  );
};

export default Image;
