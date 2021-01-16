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
`;

const getGridArea = (props) => {
  if (props.gridarea) {
    return props.gridarea;
  }
};

export const FloatStyled = styled(animated.div)`
  grid-area: ${getGridArea};
`;
