import styled from 'styled-components';
import { animated } from 'react-spring';

const getGridArea = (props) => {
  if (props.gridarea) {
    return props.gridarea;
  }
};

export const FloatStyled = styled(animated.div)`
  grid-area: ${getGridArea};

  height: 100%;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);

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

  .fa-comment-dots {
    position: absolute;
    width: 100%;
    top: 60%;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    z-index: 1;
  }

  .fa-times {
    display: none;
    opacity: 0;
    position: absolute;
    top: 10%;
    left: 10%;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    z-index: 1;
  }

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

  @media screen and (max-width: 780px) {
    .fa-times {
      display: block;
    }

    h5 {
      top: 15%;
    }
  }
`;
