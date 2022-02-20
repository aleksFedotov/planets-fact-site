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

const MainInfo = (props) => {
  return (
    <InfoContainer>
      <TextContainer>
        <PlanetName>{props.name}</PlanetName>
        <Text>{props.content}</Text>
      </TextContainer>

      <Source>
        <Span>Source :</Span>
        <SourceLink href={props.source}>
          Wikipedia <SourceIcon icon={sourceIcon} />
        </SourceLink>
      </Source>
    </InfoContainer>
  );
};

export default MainInfo;
