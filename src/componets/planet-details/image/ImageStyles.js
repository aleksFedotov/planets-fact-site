import styled from 'styled-components';

export const ImageContainer = styled.div`
  grid-area: Image;
  min-height: 58rem;
`;

export const Illustration = styled.div`
  position: relative;
  background-image: url(${(props) => props.imgSrc});
  background-position: center;

  background-repeat: no-repeat;
  height: 100%;
  margin: 0 auto;
`;

export const Geology = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  height: 20rem;
  width: 16rem;
  background-image: url(${(props) => props.geologyImg});
  background-size: contain;
  background-repeat: no-repeat;
  transform: translateX(-50%);
`;
