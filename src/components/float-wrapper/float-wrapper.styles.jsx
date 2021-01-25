import styled from 'styled-components';
import { animated } from 'react-spring';

const getGridArea = (props) => {
  if (props.gridarea) {
    return props.gridarea;
  }
};

const getZIndex = (props) => {
  if (props.zindex) {
    return props.zindex;
  }
};

export const FloatContainer = styled(animated.div)`
  will-change: transform;
  grid-area: ${getGridArea};
  z-index: ${getZIndex};
`;

export const OtherContainer = styled.div`
  grid-area: ${getGridArea};
  z-index: ${getZIndex};
`;
