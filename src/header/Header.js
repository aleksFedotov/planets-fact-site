import React from 'react';
import { useState } from 'react';

import {
  HeaderContainer,
  Logo,
  NavigationDesktop,
  NavList,
  NavListItem,
  Burger,
} from '../styles/HeaderStyles';

const planets = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
];

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const burgerHandler = () => {
    setBurgerMenu((prevState) => !prevState);
  };

  console.log(burgerMenu);
  return (
    <HeaderContainer>
      <Logo>the planets</Logo>
      <NavigationDesktop>
        <NavList>
          {planets.map((planet) => (
            <NavListItem key={planet} planet={planet}>
              <h4>{planet}</h4>
            </NavListItem>
          ))}
        </NavList>
      </NavigationDesktop>
      <Burger onClick={burgerHandler} />
    </HeaderContainer>
  );
};

export default Header;
