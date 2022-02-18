import React from 'react';

import {
  NavListItemMobile,
  NavListMobile,
  NavigationMobile,
  MiniPlanet,
  Chevron,
  NavListItemContext,
} from '../../styles/MobileMenuStyles';

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

const MobileMenu = () => {
  return (
    <NavigationMobile>
      <NavListMobile>
        {planets.map((planet) => (
          <NavListItemMobile key={planet} planet={planet}>
            <NavListItemContext>
              <MiniPlanet planet={planet} />
              <h3>{planet}</h3>
            </NavListItemContext>
            <Chevron />
          </NavListItemMobile>
        ))}
      </NavListMobile>
    </NavigationMobile>
  );
};

export default MobileMenu;
