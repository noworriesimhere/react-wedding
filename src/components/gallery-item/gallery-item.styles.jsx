import styled from 'styled-components';
import { animated } from 'react-spring';

export const ItemContainer = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);

  grid-area: ${(props) => props.gridArea};

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
    z-index: 1;
    opacity: 0;
    transition: all 1s ease;
  }
  div {
    background-color: var(--color-burgundy);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  i {
    position: absolute;
    width: 100%;
    top: 60%;
    text-align: center;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
  }

  :hover {
    h4 {
      opacity: 1;
    }
    div {
      opacity: 0.75;
    }
    i {
      opacity: 1;
    }
  }
`;

const getGridArea = (props) => {
  if (props.gridarea) {
    return props.gridarea;
  }
};

export const FloatStyled = styled(animated.div)`
  grid-area: ${getGridArea};
`;
