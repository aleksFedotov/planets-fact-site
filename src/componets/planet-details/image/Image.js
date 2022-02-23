import React from 'react';

import { ImageContainer, Illustration, PlanetImage } from './ImageStyles';

const Image = ({ isChanging, geo, planet, controller, width }) => {
  const name = planet.toLowerCase();

  let imgSource = require(`../../../assets/planet-${name}.svg`);
  let imgGeologySrc = require(`../../../assets/geology-${name}.png`);

  if (controller === 'structure') {
    imgSource = require(`../../../assets/planet-${name}-internal.svg`);
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: '20deg',
      x: 200,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      transition: { duration: 1.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotate: '-20deg',
      x: -200,
      transition: { duration: 1 },
    },
  };

  const imgWidths = {
    mercury: ['290', '184', '111'],
    venus: ['400', '253', '154'],
    earth: ['450', '285', '173'],
    mars: ['336', '213', '129'],
    jupiter: ['582', '369', '231'],
    saturn: ['666', '422', '256'],
    uranus: ['458', '290', '176'],
    neptune: ['450', '285', '173'],
  };

  let imgWidth;

  if (width > 1010) {
    imgWidth = imgWidths[name][0];
  } else if (width <= 1010 && width > 700) {
    imgWidth = imgWidths[name][1];
  } else {
    imgWidth = imgWidths[name][2];
  }

  return (
    <ImageContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Illustration
        isChanging={isChanging}
        geologyImg={imgGeologySrc}
        isGeo={geo}
        imgWidth={imgWidth}
      >
        <PlanetImage src={imgSource} />
      </Illustration>
    </ImageContainer>
  );
};

export default Image;
