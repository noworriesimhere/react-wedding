import styled from 'styled-components';
import { animated } from 'react-spring';

export const AnimatedThing = styled(animated.div)`
  width: 800px;
  height: 600px;
  background: grey;
  margin: 1000px;
  border-radius: 5px;
  background-image: url('../../img/IMG_6922.jpg');
  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;

  :hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;
