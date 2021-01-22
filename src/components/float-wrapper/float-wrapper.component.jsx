import React from 'react';
import { useSpring } from 'react-spring';
import { FloatContainer } from './float-wrapper.styles';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 200,
  (x - window.innerWidth / 2) / 200,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const FloatWrapper = ({ children }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  if (navigator.maxTouchPoints === 0) {
    return (
      <FloatContainer
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
      >
        {children}
      </FloatContainer>
    );
  } else {
    return <div>{children}</div>;
  }
};

export default FloatWrapper;
