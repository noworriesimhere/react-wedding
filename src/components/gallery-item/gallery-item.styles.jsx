import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const getGridArea = (props) => {
  if (props.gridarea) {
    return props.gridarea;
  }
};

const getHoverState = ({ ishovered }) => {
  if (ishovered === 'true') {
    return hoveredState;
  }
};

const hoveredState = css`
  div {
    opacity: 1 !important;
  }
  h5 {
    opacity: 1 !important;
  }
  i {
    opacity: 1 !important;
  }
`;

export const FloatStyled = styled(animated.div)`
  grid-area: ${getGridArea};

  height: 100%;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  ${getHoverState}

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }

  h5 {
    position: absolute;
    width: 100%;
    top: 25%;
    text-align: center;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    z-index: 1;
  }
  div {
    background-color: var(--color-burgundy-transparent);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    border-radius: 30px;
  }

  i {
    position: absolute;
    opacity: 0;
    z-index: 1;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  .fa-comment-dots {
    width: 100%;
    top: 60%;
    text-align: center;
  }

  .fa-times {
    display: none;
    top: 10%;
    left: 10%;
  }

  @media (pointer: fine) {
    :hover {
      div {
        opacity: 1;
      }
      h5 {
        opacity: 1;
      }
      i {
        opacity: 1;
      }
    }
  }

  @media (pointer: coarse) {
    .fa-times {
      display: block;
    }
  }

  @media screen and (max-width: 780px) {
    h5 {
      top: 15%;
    }
  }

  @media screen and (min-width: 780px) {
    i {
      font-size: 3rem;
    }
  }
`;
