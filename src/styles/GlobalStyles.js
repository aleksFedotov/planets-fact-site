import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {

  /* Primary */

--text-main:#FFFFFF;
--ligth-gray:#838391;
--dark-gray:#38384F;
--bg-main:#070724;


--Mercury:#419EBB;
--Venus:#EDA249;
--Earth:#6f2ed6;
--Mars:#D14C32;
--Jupiter:#D83A34;
--Saturn:#CD5120;
--Uranus:#1ec2a4;
--Neptune:#2d68f0;




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
  
  
}
`;

export default GlobalStyle;
