import { Fragment, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import GlobalStyle from './styles/GlobalStyles';
import AnimatedBG from './componets/animated-bg/AnimatedBG';
import HeaderComponent from './componets/header/Header';
import MobileMenu from './componets/mobile-menu/MobileMenu';

import Mercury from './pages/Mercury';
import Venus from './pages/Venus';
import Earth from './pages/Earth';
import Mars from './pages/Mars';
import Jupiter from './pages/Jupiter';
import Saturn from './pages/Saturn';
import Uranus from './pages/Uranus';
import Neptune from './pages/Neptune';

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
          <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Mercury />} />
              <Route path="/mercury" element={<Mercury />} />
              <Route path="/venus" element={<Venus />} />
              <Route path="/earth" element={<Earth />} />
              <Route path="/mars" element={<Mars />} />
              <Route path="/jupiter" element={<Jupiter />} />
              <Route path="/saturn" element={<Saturn />} />
              <Route path="/uranus" element={<Uranus />} />
              <Route path="/neptune" element={<Neptune />} />
            </Routes>
          </AnimatePresence>
        </main>
      )}
    </Fragment>
  );
}

export default App;
