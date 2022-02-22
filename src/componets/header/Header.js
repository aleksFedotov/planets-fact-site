import React, { useState } from 'react';

import data from '../../data.json';

import {
  Header,
  HeaderContaainer,
  Logo,
  Navigation,
  NavList,
  NavListItem,
  Burger,
  NavigationLink,
} from './HeaderStyles';

const HeaderComponent = (props) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const burgerHandler = () => {
    props.burgerToggle();
    setIsMobileOpen((prevState) => !prevState);
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  return (
    <Header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeaderContaainer>
        <Logo to="/">the planets</Logo>
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
      </HeaderContaainer>
    </Header>
  );
};

export default HeaderComponent;
