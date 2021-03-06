import styled, { css } from 'styled-components';

const bigButtonStyles = css`
  font-size: 50px;
  font-family: 'Sacramento', cursive;

  @media screen and (max-height: 900px) {
    font-size: 25px;
    padding: 0 1.5rem;
    margin: 0 0.5rem;
  }
`;

const guestbookStyles = css`
  @media screen and (min-height: 900px) {
    display: none;
  }
  @media screen and (max-width: 511px) {
    font-family: 'Sacramento',cursive;
    font-size: 2.1rem;
  }

`;

const getButtonStyles = ({ big, guestbook }) => {
  if (big) {
    return bigButtonStyles;
  } else if (guestbook) {
    return guestbookStyles;
  }
};

export const HoverButtonContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: white;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  padding: 10px 10px;
  transition: all 1s;
  ${getButtonStyles}
  &:after,
  &:before {
    content: ' ';
    width: 20px;
    height: 20px;
    position: absolute;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    transition: width 0.5s, height 0.5s, border-color 0.5s,
      border-radius 1.5s ease;
  }
  &:after {
    top: -2px;
    left: -2px;
    border-top: 3px solid var(--color-pink);
    border-left: 3px solid var(--color-pink);
  }
  &:before {
    bottom: -2px;
    right: -2px;
    border-bottom: 3px solid var(--color-pink);
    border-right: 3px solid var(--color-pink);
  }
  &:hover {
    &:before,
    &:after {
      width: 100%;
      height: 100%;
      border-color: white;
      border-top-right-radius: 15px;
      border-bottom-left-radius: 15px;
    }
  }
`;
