import React from 'react';

import { ImageContainer, Illustration, Geology } from './ImageStyles';

const Image = (props) => {
  const name = props.planet.toLowerCase();

  let imgSource = require(`../../../assets/planet-${name}.svg`);
  let imgGeologySrc = require(`../../../assets/geology-${name}.png`);

  if (props.controller === 'structure') {
    imgSource = require(`../../../assets/planet-${name}-internal.svg`);
  }
  return (
    <ImageContainer>
      <Illustration imgSrc={imgSource}>
        {props.geo && <Geology geologyImg={imgGeologySrc} />}
      </Illustration>
    </ImageContainer>
  );
};

export default Image;
