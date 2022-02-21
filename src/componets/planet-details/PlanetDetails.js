import React, { useState, useEffect } from 'react';

import { Section, Container } from './PlanetDetailsStyles';

import Image from './image/Image';
import MainInfo from './main-info/MainInfo';
import data from '../../data.json';
import Controllers from './controllers/Controllers';
import DetailInfo from './detail-info/DetailInfo';

const PlanetDetails = (props) => {
  const [view, setView] = useState('overview');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', changeWindowWidth);

    return () => {
      window.removeEventListener('resize', changeWindowWidth);
    };
  }, []);

  const planetData = data.find(
    (planet) => planet.name.toLowerCase() === props.planetName
  );

  const changeViewHandler = (newView) => {
    setView(newView);
  };

  return (
    <Section>
      <Container>
        <Controllers
          planet={planetData.name}
          changeView={changeViewHandler}
          currentView={view}
          width={windowWidth}
        />
        <Image
          planet={planetData.name}
          controller={view}
          geo={view === 'geology'}
          width={windowWidth}
        />
        <MainInfo
          name={planetData.name}
          content={planetData[view].content}
          link={planetData[view].source}
        />

        <DetailInfo planetInfo={planetData} />
      </Container>
    </Section>
  );
};

export default PlanetDetails;
