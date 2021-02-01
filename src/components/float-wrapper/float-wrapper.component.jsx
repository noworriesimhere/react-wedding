import React, { useRef } from 'react';
import { useSpring } from 'react-spring';
import { FloatContainer, OtherContainer } from './float-wrapper.styles';
import { isMobile } from 'react-device-detect';

import gsap from 'gsap';
import { useIntersection } from 'react-use';

let yOffset;
let xOffset;
if (window.innerWidth < 511) {
  yOffset = 0;
  xOffset = -100;
} else {
  yOffset = 100;
  xOffset = 0;
}

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 200,
  (x - window.innerWidth / 2) / 200,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const FloatWrapper = ({ children, gridarea, zindex = 15 }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    zIndex: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const floatRefDesktop = useRef(null);

  const intersection = useIntersection(floatRefDesktop, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });

  const fadeIn = (el) => {
    gsap.to(el, 1, {
      opacity: 1,
      y: 0,
      x: 0,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (el) => {
    gsap.to(el, 1, {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      ease: 'power4.out',
    });
  };

  intersection && intersection.intersectionRatio < 0.3
    ? fadeOut(floatRefDesktop.current)
    : fadeIn(floatRefDesktop.current);

  if (!isMobile) {
    return (
      <FloatContainer
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
        gridarea={gridarea}
        zindex={zindex}
        ref={floatRefDesktop}
      >
        {children}
      </FloatContainer>
    );
  } else {
    return (
      <OtherContainer gridarea={gridarea} ref={floatRefDesktop}>
        {children}
      </OtherContainer>
    );
  }
};

export default FloatWrapper;
