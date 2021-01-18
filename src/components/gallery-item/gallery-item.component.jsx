import React from 'react';
import { FloatStyled, ItemContainer } from './gallery-item.styles';
import { useSpring } from 'react-spring';

const calc = (x, y, scaleAmount) => [
  -(y - window.innerHeight / 2) / 60,
  (x - window.innerWidth / 2) / 60,
  scaleAmount,
  5,
];
const trans = (x, y, s) =>
  `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const GalleryItem = ({ gridArea, scaleAmount = 1.7, urlSrc, altSrc }) => {
  const [props, set] = useSpring(() => ({
    xysz: [0, 0, 1, 0],
    zIndex: 0,
    transformOrigin: 'center',
    config: { mass: 5, tension: 350, friction: 40 },
    immediate: (key) => key === 'zIndex',
  }));

  return (
    <FloatStyled
      onMouseMove={({ clientX: x, clientY: y, screenX, screenY }) => {
        set({
          xysz: calc(x, y, scaleAmount),
          zIndex: 5,
          transformOrigin: `${screenX}% ${screenY}%`,
        });
      }}
      onMouseLeave={() => set({ xysz: [0, 0, 1, 0], zIndex: 0 })}
      style={{
        transform: props.xysz.interpolate(trans),
        zIndex: props.zIndex,
        transformOrigin: props.transformOrigin,
      }}
      gridarea={gridArea}
    >
      <ItemContainer>
        <img src={urlSrc} alt={altSrc}></img>
      </ItemContainer>
    </FloatStyled>
  );
};

export default GalleryItem;
