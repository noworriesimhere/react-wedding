import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  margin-top: calc((50vh - 362.4px) / 2);
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-height: 800px) {
    margin-top: calc((25vh - 200px) / 2);
    font-size: 1rem;
  }

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

export const ListItem = styled.div`
  transition: all 1s ease-in-out;
`;
