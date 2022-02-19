import React from 'react';
import { AnimatePresence } from 'framer-motion';
import data from '../../data.json';

import {
  NavListItemMobile,
  NavListMobile,
  NavigationMobile,
  MiniPlanet,
  Chevron,
  NavListItemContext,
  NavigationLink,
} from './MobileMenuStyles';

const MobileMenu = (props) => {
  const clickHandler = () => {
    props.menuToggle();
  };
  return (
    <NavigationMobile>
      <AnimatePresence>
        <NavListMobile
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'linear', duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          {data.map((planet, ind) => (
            <NavListItemMobile
              key={ind}
              planet={planet.name}
              initial={{ x: `100vw` }}
              animate={{ x: '0vw' }}
              transition={{
                ease: [0.06, 0.9, 1, 0.98],
                duration: 0.7,
                delay: `${(ind * 5 + 0.5) / 100}`,
              }}
            >
              <NavigationLink
                to={`/${planet.name.toLowerCase()}`}
                onClick={clickHandler}
              >
                <NavListItemContext>
                  <MiniPlanet planet={planet.name} />
                  <h3>{planet.name}</h3>
                </NavListItemContext>
                <Chevron />
              </NavigationLink>
            </NavListItemMobile>
          ))}
        </NavListMobile>
      </AnimatePresence>
    </NavigationMobile>
  );
};

export default MobileMenu;
