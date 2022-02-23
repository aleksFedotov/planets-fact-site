import React from 'react';

import sourceIcon from '../../../assets/icon-source.svg';

import {
  InfoContainer,
  PlanetName,
  Text,
  Source,
  SourceLink,
  Span,
  SourceIcon,
  TextContainer,
} from './MainInfoStyles';

const MainInfo = ({ name, content, source, isChanging }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.5 },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 1 },
    },
  };

  return (
    <InfoContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <TextContainer>
        <PlanetName>{name}</PlanetName>
        <Text isChanging={isChanging}>{content}</Text>
      </TextContainer>

      <Source>
        <Span>Source :</Span>
        <SourceLink href={source}>
          Wikipedia <SourceIcon icon={sourceIcon} />
        </SourceLink>
      </Source>
    </InfoContainer>
  );
};

export default MainInfo;
