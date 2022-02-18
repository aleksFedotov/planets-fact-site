import { Fragment, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';
import AnimatedBG from './componets/animated-bg/AnimatedBG';
import Header from './componets/header/Header';
import MobileMenu from './componets/mobile-menu/MobileMenu';

import PlanetDetails from './componets/planet-details/PlanetDetails';

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const burgerToggleHandler = () => {
    console.log('click');
    setBurgerMenu((prevState) => !prevState);
  };
  return (
    <Fragment>
      <GlobalStyle />
      <AnimatedBG />
      <Header burgerToggle={burgerToggleHandler} />
      {burgerMenu && <MobileMenu />}
      <main>
        <Routes>
          <Route path="/:planet" element={<PlanetDetails />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
