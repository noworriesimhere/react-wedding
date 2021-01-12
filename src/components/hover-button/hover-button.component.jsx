import React from 'react';
import { HoverButton } from './hover-button.styles';

const ListItem = ({ children }) => {
  return (
    <>
      <HoverButton>{children} </HoverButton>
    </>
  );
};

export default ListItem;
