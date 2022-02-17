import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {

  /* Primary */

--text-main:#FFFFFF;
--ligth-gray:#838391;
--dark-gray:#38384F;
--bg-main:#070724;


--mercury:#419EBB;
--venus:#EDA249;
--earth:#6f2ed6;
--mars:#D14C32;
--jupiter:#D83A34;
--saturn:#CD5120;
--uranus:#1ec2a4;
--neptune:#2d68f0;




}


*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



html {
    font-size: 62.5%;
}

body {
    font-size: 1.4rem;
    font-family: 'Spartan', sans-serif;
  
    background: var(--bg-main);
    color: var(--text-main);
    
}

h1,h2 {
    font-family: 'Antonio', sans-serif;
}

#root{
 
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  
}
`;

export default GlobalStyle;
