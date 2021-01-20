import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const clickedStyles = css`
  h4 {
    opacity: 1;
    z-index: 2;
  }
  div {
    opacity: 0.75;
    z-index: 1;
  }
  i {
    opacity: 1;
    z-index: 2;
  }
`;

const unclickedStyles = css`
  h4 {
    opacity: 0;
    z-index: 2;
  }
  div {
    opacity: 0;
    z-index: -1;
  }
  i {
    opacity: 0;
  }
`;

const getClickStyles = ({ isClicked }) => {
  if (!isClicked) {
    return unclickedStyles;
  } else {
    return clickedStyles;
  }
};

const getGridArea = (props) => {
  if (props.gridarea) {
    return props.gridarea;
  }
};

export const FloatStyled = styled(animated.div)`
  grid-area: ${getGridArea};

  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  ${getClickStyles}

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  h4 {
    position: absolute;
    width: 100%;
    top: 25%;
    text-align: center;
    transition: all 1s ease;
  }
  div {
    background-color: var(--color-burgundy);
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 30px;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
  }

  i {
    position: absolute;
    width: 100%;
    top: 60%;
    text-align: center;
    cursor: pointer;
  }

  @media screen and (min-width: 780px) {
    :hover {
      h4 {
        opacity: 1;
        z-index: 2;
      }
      div {
        opacity: 0.75;
        z-index: 1;
      }
      i {
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 780px) {
    h4 {
      top: 0;
    }
  }
`;
