import React, { useState, useEffect } from 'react';
import { FloatStyled } from './gallery-item.styles';
import { useSpring } from 'react-spring';
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
  setActiveChild,
  activeChild,
}) => {
  useEffect(() => {
    if (activeChild !== chapter) {
      setIsHovered(false);
    }
  }, [activeChild, chapter]);

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
    document.querySelectorAll('container') && 
      document.querySelectorAll('.container')
        .forEach(thing => {
          setTimeout(() => {
            thing.scrollTo({
            top: 0,
            behavior: 'smooth',})
          }, 300)
          })
  }

  return (
    <FloatWrapper
      gridarea={gridArea}
      zindex={zIndex}
      setIsHovered={setIsHovered}
    >
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
            setActiveChild(chapter);
          }
        }}
        style={{
          transform: props.scale.to(trans),
          zIndex: props.zIndex,
          transformOrigin: props.transformOrigin,
        }}
        ishovered={isHovered ? 'true' : ''}
        id='selectMe'
        src={urlSrc}
      >
        <div className={isHovered ? 'container scrolled' : 'container'}>
          <i
            className='fas fa-times-circle'
            onClick={(e) => {
              setIsHovered(false);
              // const target = e.target.parentElement;
              // setTimeout(() => {
              //   target.scrollTo({
              //     top: 0,
              //     behavior: 'smooth',
              //   });
              // }, 300);
            }}
          />
          <div className="chapter-text">
            <h2>{chapter}</h2>
            <h5>{date}</h5>

          </div>

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

        <img src={urlSrc} alt={altSrc} />
      </FloatStyled>
    </FloatWrapper>
  );
};

export default GalleryItem;
