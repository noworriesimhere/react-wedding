import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: 150px;
  left: 0;
  z-index: 100;
  width: 100vw;
  font-size: 1.2rem;
  color: white;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
`;

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
`;

export const ListItem = styled.li`
  margin-left: 11vw;
`;
