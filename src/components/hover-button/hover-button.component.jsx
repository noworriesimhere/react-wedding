import React from 'react';
import { HoverButtonContainer } from './hover-button.styles';

const HoverButton = ({ children, ...otherProps }) => {
  return (
    <HoverButtonContainer {...otherProps}>{children} </HoverButtonContainer>
  );
};

export default HoverButton;
