import React from 'react';
import { ListContainer, NavContainer } from './header.styles';

const Header = ({ children }) => {
  return (
    <NavContainer>
      <ListContainer>{children}</ListContainer>
    </NavContainer>
  );
};

export default Header;
