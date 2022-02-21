import styled from 'styled-components';

export const ImageContainer = styled.div`
  grid-area: Image;

  min-height: 59rem;

  @media (max-width: 1010px) {
    min-height: 42.2rem;
    padding: 0 4rem;
  }

  @media (max-width: 700px) {
    min-height: 30.4rem;
  }
`;

export const Illustration = styled.div`
  position: relative;
  background-image: url(${(props) => props.imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  min-height: inherit;

  @media (max-width: 1010px) {
    background-size: 60%;
  }

  @media (max-width: 700px) {
    background-size: 40%;
  }
`;

export const Geology = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  height: 20rem;
  width: 16rem;
  background-image: url(${(props) => props.geologyImg});
  background-size: contain;
  background-repeat: no-repeat;
  transform: translateX(-50%);
`;
