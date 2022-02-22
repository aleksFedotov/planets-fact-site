import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import chevron from '../../assets/icon-chevron.svg';
import { motion } from 'framer-motion';

export const NavigationMobile = styled.nav`
  position: absolute;
  top: 9.7rem;
  left: 0;
  width: 100%;

  padding: 4.5rem 2.4rem;
  display: block;
  background-color: var(--bg-main);
  z-index: 3;
  overflow: hidden;
`;

export const NavListMobile = styled(motion.ul)`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const NavListItemMobile = styled(motion.li)`
  width: 100%;
  padding: 2.2rem 0;

  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid #979797;
  }

  h3 {
    margin-top: 4px;
    font-size: 1.5rem;
    letter-spacing: 2.6px;
    text-transform: uppercase;
  }
`;

export const NavListItemContext = styled.div`
  display: flex;
  gap: 2.6rem;
  align-items: center;
`;

export const MiniPlanet = styled.div`
  background-color: var(--${(props) => props.planet});
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`;

export const Chevron = styled.div`
  height: 1rem;
  width: 1rem;
  background-image: url(${chevron});
  margin-right: 0.6rem;
  justify-self: flex-end;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
`;
