import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ImageContainer = styled(motion.div)`
  grid-area: Image;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 59rem;

  @media (max-width: 1010px) {
    height: 42.2rem;
    padding: 0 4rem;
  }

  @media (max-width: 700px) {
    height: 30.4rem;
  }
`;

export const Illustration = styled.div`
  position: relative;
  animation: ${(props) =>
    props.isChanging ? 'changeView 2000ms ease' : 'none'};
  width: ${(props) => props.imgWidth}px;

  &::after {
    display: ${(props) => (props.isGeo ? 'blcok' : 'none')};
    position: absolute;
    content: '';
    top: 66%;
    left: 50%;
    height: 20rem;
    width: 16rem;
    background-image: url(${(props) => props.geologyImg});
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateX(-50%);

    @media (max-width: 1010px) {
      top: 55%;
    }

    @media (max-width: 700px) {
      top: 50%;
      height: 15rem;
      width: 11rem;
    }
  }

  @keyframes changeView {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1) rotate(0);
    }
    50% {
      opacity: 0;
      transform: translateY(100px) scale(0.5) rotate(180deg);
    }
    100% {
      opacity: 1;
      transform: translateX(0) scale(1) rotate(0);
    }
  }
`;

export const PlanetImage = styled.img`
  width: 100%;
`;
