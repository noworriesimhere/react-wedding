import styled, { css, keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.3, 0.7);
  }
  55% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.2, 0.8);
  }
  80% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.1, 0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const inputCheck = keyframes`
  0% {
    transform: scale(0) rotate(-45deg);
  }
  100% {
    transform: scale(1) rotate(-45deg);
  }
`;

const checkedStyles = css`
  background-color: #800020;
  border-color: white;
  animation-name: ${bounceAnimation};
  animation-duration: 0.5s;

  ::before {
    transform: scale(1) rotate(-45deg);
    animation-name: ${inputCheck};
    animation-duration: 0.2s;
    animation-delay: 0.3s;
  }
`;

export const CheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
`;

const isRsvpd = ({ isRsvpd }) => {
  if (isRsvpd) {
    return checkedStyles;
  }
};

export const InputCheck = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 3px solid #ccc;
  position: relative;
  top: 6px;
  margin-right: 7px;
  transition: 0.4s;
  box-sizing: border-box;

  ${isRsvpd}

  ::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 6px;
    border-bottom: 4px solid #fff;
    border-left: 4px solid #fff;
    transform: scale(0) rotate(-45deg);
    position: absolute;
    top: 4px;
    left: 3px;
    transition: 0.4s;
    animation-fill-mode: forwards;
  }
`;
