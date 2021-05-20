import styled, { css } from 'styled-components';

const getBurgerState = ({ click }) => {
  if (click === true) {
    return openBurger;
  } else {
    return closedBurger;
  }
};

const closedBurger = css`
  background: white;
`

const openBurger = css`
  background: white;
    &:nth-of-type(1) {
      transform: rotate(45deg);
    }
    &:nth-of-type(2) {
      opacity: 0;
      transform: translateX(60px);
    }
    &:nth-of-type(3) {
      transform: rotate(-45deg);
    }
`



export const BurgerContainer = styled.div`
  position: absolute;
  top: 25%;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;

  @media screen and (min-width: 512px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;

    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    ${getBurgerState}
  }
`

