import styled from 'styled-components';

export const HoverButton = styled.span`
  cursor: pointer;
  position: relative;
  padding: 10px 10px;
  transition: all 1s;
  &:after,
  &:before {
    content: ' ';
    width: 20px;
    height: 20px;
    position: absolute;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    transition: all 0.5s;
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
