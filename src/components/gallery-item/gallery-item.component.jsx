import React, { useState } from 'react';
import { FloatStyled } from './gallery-item.styles';
import { useSpring } from 'react-spring';
import { isMobile } from 'react-device-detect';
import FloatWrapper from '../float-wrapper/float-wrapper.component';

export const storyContainerRef = React.createRef();

const trans = (scale) => `scale(${scale})`;
let calculatedTransform = '50% 50%';
const GalleryItem = ({
  gridArea,
  scaleAmount = 2,
  transformOrigin = '50% 50%',
  urlSrc,
  altSrc,
  date,
  chapter,
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
  let zIndex = 0;
  if (isHovered) {
    set({
      scale: scaleAmount,
      zIndex: 5,
      transformOrigin: calculatedTransform,
    });
    zIndex = 5;
  } else {
    set({ scale: 1, zIndex: 0 });
    zIndex = 0;
  }

  return (
    <FloatWrapper gridarea={gridArea} zindex={zIndex} hovered={isHovered}>
      <FloatStyled
        onClick={({ view: { innerHeight, innerWidth }, nativeEvent }) => {
          const {
            x: targetTopLeftX,
            y: targetTopLeftY,
            width: targetWidth,
            height: targetHeight,
          } = nativeEvent
            .composedPath()
            .find((e) => e.id === 'selectMe')
            .lastChild.getBoundingClientRect();

          if (!isHovered) {
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
            calculatedTransform = `${transformPercentageX}% ${transformPercentageY}%`;
            setIsHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (isMobile) {
            setIsHovered(false);
          }
        }}
        style={{
          transform: props.scale.to(trans),
          zIndex: props.zIndex,
          transformOrigin: props.transformOrigin,
        }}
        ishovered={isHovered ? 'true' : ''}
        id='selectMe'
      >
        <div className={isHovered ? 'container scrolled' : 'container'}>
          <i
            className='fas fa-times-circle'
            onClick={(e) => {
              setIsHovered(false);
              const target = e.target.parentElement;
              setTimeout(() => {
                target.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }, 300);
            }}
          />
          <h2>{chapter}</h2>
          <h5>{date}</h5>

          <i
            className='fas fa-chevron-circle-down'
            onClick={(e) =>
              e.target.parentElement.scrollBy({
                top: e.target.parentElement.clientHeight - 10,
                behavior: 'smooth',
              })
            }
          />

          <div className='story'>{story}</div>
          <i
            className='fas fa-chevron-circle-up'
            onClick={(e) =>
              e.target.parentElement.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          />
        </div>
        <div className='story-overlay' />

        <img src={urlSrc} alt={altSrc} />
      </FloatStyled>
    </FloatWrapper>
  );
};

export default GalleryItem;
