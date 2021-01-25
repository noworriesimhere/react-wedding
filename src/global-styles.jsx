import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --color-burgundy: #84223b;
  --color-burgundy-transparent: rgba(132, 34, 59, .9);
  --color-lightmint: #9bae98;
  --color-lightmint-transparent: rgba(155, 174, 152, .75);
  --color-darkmint: #274006;
  --color-darkmint-transparent: rgba(39, 64, 6, .75);
  --color-darkbrown: #27060f;
  --color-pink: #f7c9cc;
}

body {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Sacramento', cursive;
  color: white;
}


h1 { 
  font-size: 4rem;
  margin: 0 auto;
 }

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2.5rem;
}

h4 {
  font-size: 2.2rem;
}

h5{
  font-size: 1rem;
}

p {
  font-size: 1.25rem;
  line-height: 2rem;
  font-family: 'Montserrat', sans-serif;
}

a {
  font-family: 'Sacramento', cursive;
  color: var(--color-darkmint);
  font-size: 1.5rem;
  transition: color .5s ease;
  :hover {
    color: white;
  }
}

@media screen and (max-width: 511px) {
  h1 { 
    font-size: 2.8rem;
    margin: 0 auto;
   }
  
  h2 {
    font-size: 2.2rem;
  }
  
  h3 {
    font-size: 1.7rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5{
    font-size: .7rem;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-family: 'Montserrat', sans-serif;
  }
  
  a {
    font-size: 1.5rem;
  }
}

@media (min-width: 511px) and (max-height: 900px) {
  a {
    font-size: 1rem;
  }
}
`;
