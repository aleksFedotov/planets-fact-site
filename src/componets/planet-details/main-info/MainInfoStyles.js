import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: MainInfo;
  min-height: 32.6rem;
`;

export const TextContainer = styled.div`
  min-height: 27.7rem;
  display: flex;
  flex-flow: column;
  gap: 3.4rem;
`;

export const PlanetName = styled.h1`
  font-size: 8rem;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2.5rem;
  opacity: 0.75;
`;

export const Source = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const Span = styled.span`
  opacity: 0.5;
`;

export const SourceLink = styled.a`
  font-family: inherit;
  color: hsl(240, 6%, 54%);

  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SourceIcon = styled.div`
  background-image: url(${(props) => props.icon});
  width: 1.2rem;
  height: 1.2rem;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 1;
`;
