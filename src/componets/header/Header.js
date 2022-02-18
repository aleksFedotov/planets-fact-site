import React from 'react';

import {
  HeaderContainer,
  Logo,
  Navigation,
  NavList,
  NavListItem,
  Burger,
} from '../../styles/HeaderStyles';

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

const Header = (props) => {
  const burgerHandler = () => {
    props.burgerToggle();
  };

  return (
    <HeaderContainer>
      <Logo>the planets</Logo>
      <Navigation>
        <NavList>
          {planets.map((planet) => (
            <NavListItem key={planet} planet={planet}>
              <h4>{planet}</h4>
            </NavListItem>
          ))}
        </NavList>
      </Navigation>
      <Burger onClick={burgerHandler} />
    </HeaderContainer>
  );
};

export default Header;
