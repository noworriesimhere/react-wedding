import React, { useState } from 'react';
import { FloatStyled } from './gallery-item.styles';
import { useSpring } from 'react-spring';

const trans = (scale) => `scale(${scale})`;

const GalleryItem = ({
  gridArea,
  scaleAmount = 2,
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

  if (!isHovered) {
    set({ scale: 1, zIndex: 0 });
  }

  return (
    <FloatStyled
      onMouseMove={() => {
        set({
          scale: scaleAmount,
          zIndex: 5,
        });
      }}
      onTouchMove={(e) => {
        e.stopPropagation();
      }}
      onClick={({
        view: { innerHeight, innerWidth },
        target: {
          parentElement: {
            children: [, , , { x: targetTopLeftX, y: targetTopLeftY }],
            clientWidth: targetWidth,
            clientHeight: targetHeight,
          },
        },
      }) => {
        if (navigator.maxTouchPoints > 0 && !isHovered) {
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
        } else {
          console.log('click');
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        set({ scale: 1, zIndex: 0 });
      }}
      style={{
        transform: props.scale.to(trans),
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
        onTouchEnd={(e) => {
          console.log(e);
          e.preventDefault();
          setIsHovered(false);
        }}
      ></i>
    </FloatStyled>
  );
};

export default GalleryItem;
