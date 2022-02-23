import { Fragment, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import GlobalStyle from './styles/GlobalStyles';
import AnimatedBG from './componets/animated-bg/AnimatedBG';
import HeaderComponent from './componets/header/Header';
import MobileMenu from './componets/mobile-menu/MobileMenu';
import PlanetDetails from './componets/planet-details/PlanetDetails';

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const burgerToggleHandler = () => {
    setBurgerMenu((prevState) => !prevState);
  };

  const location = useLocation();
  return (
    <Fragment>
      <GlobalStyle />
      <AnimatedBG />
      <HeaderComponent burgerToggle={burgerToggleHandler} />
      {burgerMenu && <MobileMenu menuToggle={burgerToggleHandler} />}
      {!burgerMenu && (
        <main>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/:planetName" element={<PlanetDetails />} />
              <Route path="/" element={<Navigate to="/mercury" />} />
              <Route path="*" element={<Navigate to="/mercury" />} />
            </Routes>
          </AnimatePresence>
        </main>
      )}
    </Fragment>
  );
}

export default App;
