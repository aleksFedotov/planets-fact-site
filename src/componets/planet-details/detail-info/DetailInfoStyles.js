import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DetailInfoList = styled(motion.ul)`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  grid-area: DetailInfo;
  margin-top: 8.7rem;

  @media (max-width: 1010px) {
    gap: 1.1rem;
    margin-top: 3.2rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0 2.4rem;
  }
`;

export const DetailInfoItem = styled.li`
  padding: 2.3rem;

  width: 100%;
  border: solid 1px rgba(255, 255, 255, 0.2);

  @media (max-width: 1010px) {
    gap: 1.9rem 1.6rem;
  }

  @media (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.8rem;
    padding: 0 2.5rem;
  }
`;

export const Parameter = styled.h4`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 700;
  opacity: 0.5;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;

  @media (max-width: 1010px) {
    font-size: 0.8rem;
    letter-spacing: 0.63px;
    line-height: 1.6rem;
  }

  @media (max-width: 700px) {
    margin-bottom: 0rem;
    letter-spacing: 0.73px;
  }
`;

export const Value = styled.h2`
  font-size: 4rem;
  letter-spacing: -1.5px;

  @media (max-width: 1010px) {
    font-size: 2.4rem;
    letter-spacing: -0.9px;
  }

  @media (max-width: 700px) {
    font-size: 2rem;
    letter-spacing: -0.75px;
  }
`;
