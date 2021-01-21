import React, { useState } from 'react';
import { FloatStyled } from './gallery-item.styles';
import { useSpring } from 'react-spring';

const trans = (scale) => `scale(${scale})`;

const GalleryItem = ({
  gridArea,
  scaleAmount = 1.8,
  transformOrigin = '50% 50%',
  urlSrc,
  altSrc,
  date,
  story,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const [props, set] = useSpring(() => ({
    scale: 1,
    zIndex: 0,
    transformOrigin: transformOrigin,
    config: { mass: 5, tension: 300, friction: 40 },
    immediate: (key) => key === 'zIndex',
  }));

  return (
    <FloatStyled
      onMouseMove={() => {
        if (window.innerWidth > 780) {
          set({
            scale: scaleAmount,
            zIndex: 5,
          });
        }
      }}
      onTouchStart={({
        view: { innerHeight, innerWidth },
        target: {
          parentElement: {
            children: [, , , { x: targetTopLeftX, y: targetTopLeftY }],
            clientWidth: targetWidth,
            clientHeight: targetHeight,
          },
        },
      }) => {
        if (window.innerWidth < 780) {
          const targetCenterX = targetTopLeftX + targetWidth / 2;
          const targetCenterY = targetTopLeftY + targetHeight / 2;

          const screenCenterX = innerWidth / 2;
          const screenCenterY = innerHeight / 2;

          let offsetX;
          if (screenCenterX > targetCenterX) {
            offsetX = targetCenterX - (screenCenterX - targetCenterX);
          } else {
            offsetX = targetCenterX + (targetCenterX - screenCenterX);
          }

          let offsetY;
          if (screenCenterY > targetCenterY) {
            offsetY = targetCenterY - (screenCenterY - targetCenterY);
          } else {
            offsetY = targetCenterY + (targetCenterY - screenCenterY);
          }

          const transformPercentageX = Math.floor(
            ((offsetX - targetTopLeftX) / targetWidth) * 100
          );
          const transformPercentageY = Math.floor(
            ((offsetY - targetTopLeftY) / targetHeight) * 100
          );
          const calculatedTransform = `${transformPercentageX}% ${transformPercentageY}%`;

          set({
            scale: scaleAmount,
            zIndex: 5,
            transformOrigin: calculatedTransform,
          });
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        set({ scale: 1, zIndex: 0 });
        setIsHovered(false);
      }}
      style={{
        transform: props.scale.interpolate(trans),
        zIndex: props.zIndex,
        transformOrigin: props.transformOrigin,
      }}
      gridarea={gridArea}
      ishovered={isHovered ? 'true' : ''}
    >
      <h5>{date}</h5>
      <i className='far fa-comment-dots'></i>
      <div />
      <img src={urlSrc} alt={altSrc} />
      <i
        className='fas fa-times'
        onTouchEnd={() => {
          set({ scale: 1, zIndex: 0 });
          setIsHovered(false);
        }}
      ></i>
    </FloatStyled>
  );
};

export default GalleryItem;
