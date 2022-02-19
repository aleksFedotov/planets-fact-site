import React, { useState } from 'react';

import data from '../../data.json';

import {
  HeaderContainer,
  Logo,
  Navigation,
  NavList,
  NavListItem,
  Burger,
  NavigationLink,
} from './HeaderStyles';

const Header = (props) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const burgerHandler = () => {
    props.burgerToggle();
    setIsMobileOpen((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
      <Logo>the planets</Logo>
      <Navigation>
        <NavList>
          {data.map((planet, ind) => (
            <NavListItem key={ind} planet={planet.name}>
              <NavigationLink
                to={`/${planet.name.toLowerCase()}`}
                className={(navData) => (navData.isActive ? 'active' : '')}
                planet={planet.name}
              >
                <h4>{planet.name}</h4>
              </NavigationLink>
            </NavListItem>
          ))}
        </NavList>
      </Navigation>
      <Burger onClick={burgerHandler} isOpen={isMobileOpen} />
    </HeaderContainer>
  );
};

export default Header;
