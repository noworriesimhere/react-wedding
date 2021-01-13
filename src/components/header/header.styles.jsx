import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  margin-top: calc((50vh - 362.4px) / 2);
  margin-bottom: calc((50vh - 362.4px) / 2);
  font-size: 1.2rem;
  color: white;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

export const ListItem = styled.li`
  transition: all 1s ease-in-out;
`;
