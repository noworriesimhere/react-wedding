import styled, { css } from 'styled-components';

const bigButtonStyles = css`
  font-size: 50px;

  @media screen and (max-height: 900px) {
    font-size: 30px;
    display: none;
  }
`;

const guestbookStyles = css`
  @media screen and (min-height: 900px) {
    display: none;
  }
`;

const getButtonStyles = ({ big, guestbook }) => {
  if (big) {
    return bigButtonStyles;
  } else if (guestbook) {
    return guestbookStyles;
  }
};

export const HoverButtonContainer = styled.span`
  cursor: pointer;
  position: relative;
  color: white;
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
    border-top: 3px solid pink;
    border-left: 3px solid pink;
  }
  &:before {
    bottom: -2px;
    right: -2px;
    border-bottom: 3px solid pink;
    border-right: 3px solid pink;
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
