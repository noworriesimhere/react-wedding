import React, { useState } from 'react';
import { FloatStyled } from './gallery-item.styles';
import { useSpring } from 'react-spring';

const trans = (s) => `scale(${s})`;

const GalleryItem = ({
  gridArea,
  scaleAmount = 1.8,
  transformOrigin = 'center',
  urlSrc,
  altSrc,
  date,
  story,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const [props, set] = useSpring(() => ({
    scale: 1,
    zIndex: 0,
    transformOrigin: transformOrigin,
    willChange: 'transform',
    config: { mass: 4, tension: 400, friction: 40 },
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
          setIsClicked(true);
        }
      }}
      onClick={({
        view: { innerHeight, innerWidth },
        target: {
          x: targetTopLeftX,
          y: targetTopLeftY,
          clientWidth: targetWidth, //top left coordinate of target
          clientHeight: targetHeight,
        },
      }) => {
        if (window.innerWidth < 780 && !isClicked) {
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
          setIsClicked(true);
        } else if (window.innerWidth < 780 && isClicked) {
          set({ scale: 1, zIndex: 0 });
          setIsClicked(false);
        }
      }}
      onMouseLeave={() => {
        set({ scale: 1, zIndex: 0 });
        setIsClicked(false);
      }}
      style={{
        transform: props.scale.interpolate(trans),
        zIndex: props.zIndex,
        transformOrigin: props.transformOrigin,
      }}
      gridarea={gridArea}
      isClicked={isClicked}
    >
      <h4>{date}</h4>
      <i className='far fa-comment-dots fa-3x'></i>
      <div />
      <img src={urlSrc} alt={altSrc} />
    </FloatStyled>
  );
};

export default GalleryItem;
