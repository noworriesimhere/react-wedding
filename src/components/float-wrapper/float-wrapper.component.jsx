import React from 'react';
import { useSpring } from 'react-spring';
import { FloatContainer, OtherContainer } from './float-wrapper.styles';
import { isMobile } from 'react-device-detect';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 200,
  (x - window.innerWidth / 2) / 200,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const FloatWrapper = ({ children, gridarea, zindex, hovered }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    zIndex: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  if (!isMobile) {
    return (
      <FloatContainer
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
        gridarea={gridarea}
        zindex={zindex}
      >
        {children}
      </FloatContainer>
    );
  } else {
    return <OtherContainer gridarea={gridarea}>{children}</OtherContainer>;
  }
};

export default FloatWrapper;
