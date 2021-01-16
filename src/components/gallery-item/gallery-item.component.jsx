import React from 'react';
import { FloatStyled, ItemContainer } from './gallery-item.styles';
import { useSpring } from 'react-spring';

const calc = (x, y, scaleAmount) => [
  -(y - window.innerHeight / 2) / 60,
  (x - window.innerWidth / 2) / 60,
  scaleAmount,
  5,
];
const trans = (x, y, s, z) =>
  `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translate3d(0, 0, ${z}px)`;

const GalleryItem = ({ gridArea, scaleAmount = 1.6, urlSrc, altSrc }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1, 0],
    zIndex: 0,
    config: { mass: 5, tension: 350, friction: 40 },
    immediate: (key) => key === 'zIndex',
  }));

  return (
    <FloatStyled
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xys: calc(x, y, scaleAmount), zIndex: 5 })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1, 0], zIndex: 0 })}
      style={{ transform: props.xys.interpolate(trans), zIndex: props.zIndex }}
      gridarea={gridArea}
    >
      <ItemContainer>
        <img src={urlSrc} alt={altSrc}></img>
      </ItemContainer>
    </FloatStyled>
  );
};

export default GalleryItem;
