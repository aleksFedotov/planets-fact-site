import styled from 'styled-components';
import burger from '../../assets/icon-hamburger.svg';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
  z-index: 3;
  border-bottom: 1px solid #979797;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 4.4rem;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    gap: 0;
  }
`;
export const Logo = styled.p`
  text-transform: uppercase;
  font-family: 'Antonio', sans-serif;
  font-weight: 500;
  font-size: 2.8rem;
  letter-spacing: -1px;
`;
export const Navigation = styled.nav`
  max-width: 66.5rem;
  width: 100%;
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;
export const NavListItem = styled.li`
  position: relative;
  text-transform: uppercase;
  font-size: 1.1rem;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;

  &::after {
    position: absolute;
    content: '';
    top: -40px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--${(props) => props.planet});

    transform: scale(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover::after {
    transform: scale(1);
  }

  &.active::after {
    transform: scale(1);
  }

  @media (max-width: 900px) {
    &::after {
      display: none;
    }
  }
`;

export const Burger = styled.div`
  background-image: url(${burger});
  background-size: cover;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;
