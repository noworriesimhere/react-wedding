import React from 'react';
import { BurgerContainer } from './burger.styles';


const Burger = ({setClick, click}) => {
  return (
    <BurgerContainer
    click={click}
    onClick={() => {setClick(!click)}}
    >
      <div />
      <div />
      <div />

    </BurgerContainer>
  );
};

export default Burger;