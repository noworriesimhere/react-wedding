import React from 'react';
import { HoverButtonContainer } from './hover-button.styles';

const HoverButton = ({ children, big, onClick }) => {
  return (
    <HoverButtonContainer big={big} onClick={onClick}>
      {children}{' '}
    </HoverButtonContainer>
  );
};

export default HoverButton;
