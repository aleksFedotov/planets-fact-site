import React from 'react';

import { Section, Container } from './PlanetDetailsStyles';

import Image from './image/Image';

const PlanetDetails = (props) => {
  return (
    <Section>
      <Container>
        <Image planet={props.planetName} controller={'internal structure'} />
      </Container>
    </Section>
  );
};

export default PlanetDetails;
