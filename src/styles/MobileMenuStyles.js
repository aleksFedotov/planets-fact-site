import styled from 'styled-components';
import chevron from '../assets/icon-chevron.svg';

export const NavigationMobile = styled.nav`
  position: absolute;
  top: 9.7rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 9.7rem);
  padding: 4.5rem 2.4rem;
  display: block;
  background-color: var(--bg-main);
  z-index: 3;
`;

export const NavListMobile = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const NavListItemMobile = styled.li`
  width: 100%;
  padding: 2.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid #979797;
  }

  h3 {
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
  height: 0.8rem;
  width: 0.6rem;
  background-image: url(${chevron});
  margin-right: 0.6rem;
  justify-self: flex-end;
`;
