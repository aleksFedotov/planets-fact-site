import React, { useState, useEffect } from 'react';

import { Section, Container } from './PlanetDetailsStyles';

import { useParams } from 'react-router-dom';

import Image from './image/Image';
import MainInfo from './main-info/MainInfo';
import data from '../../data.json';
import Controllers from './controllers/Controllers';
import DetailInfo from './detail-info/DetailInfo';

const PlanetDetails = () => {
  const { planetName } = useParams();

  const [view, setView] = useState('overview');
  const [isChanging, setIsChanging] = useState(false);
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
    (planet) => planet.name.toLowerCase() === planetName
  );

  const changeViewHandler = (newView) => {
    if (newView === view) return;

    setIsChanging(true);
    setTimeout(() => {
      setView(newView);
    }, 1000);

    setTimeout(() => {
      setIsChanging(false);
    }, 2000);
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
          isChanging={isChanging}
        />
        <MainInfo
          name={planetData.name}
          content={planetData[view].content}
          link={planetData[view].source}
          isChanging={isChanging}
        />

        <DetailInfo planetInfo={planetData} />
      </Container>
    </Section>
  );
};

export default PlanetDetails;
