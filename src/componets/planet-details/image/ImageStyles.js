import styled from 'styled-components';

export const ImageContainer = styled.div`
  grid-area: Image;
  min-height: 60rem;
`;

export const Illustration = styled.div`
  background-image: url(${(props) => props.imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
`;
