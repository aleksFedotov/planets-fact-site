import { Fragment } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import AnimatedBG from './componets/animated-bg/AnimatedBG';
import Header from './header/Header';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AnimatedBG />
      <Header />
    </Fragment>
  );
}

export default App;
