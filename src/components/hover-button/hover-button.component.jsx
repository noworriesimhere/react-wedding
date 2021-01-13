import React from 'react';
import { HoverButtonContainer } from './hover-button.styles';

const HoverButton = ({ children, big }) => {
  return <HoverButtonContainer big={big}>{children} </HoverButtonContainer>;
};

export default HoverButton;
