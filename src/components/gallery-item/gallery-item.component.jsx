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

const GalleryItem = ({
  gridArea,
  scaleAmount = 1.7,
  transformOrigin = '50% 50%',
  urlSrc,
  altSrc,
  date,
  story,
}) => {
  // const [isFlipped, setIsFlipped] = useState(false);

  // const { transform, opacity } = useSpring({
  //   opacity: isFlipped ? 1 : 0,
  //   transform: `rotateX(${isFlipped ? 180 : 0}deg)`,
  //   config: { mass: 5, tension: 500, friction: 80 },
  // });

  const [props, set] = useSpring(() => ({
    xysz: [0, 0, 1, 0],
    zIndex: 0,
    transformOrigin: transformOrigin,
    willChange: 'transform',
    config: { mass: 5, tension: 350, friction: 40 },
    immediate: (key) => key === 'zIndex',
  }));

  return (
    <FloatStyled
      // onClick={() => {
      //   setIsFlipped((state) => !state);
      //   console.log('clicked!');
      // }}
      onMouseMove={({
        clientX: x,
        clientY: y,
        view: { innerHeight, innerWidth },
        target: {
          x: targetTopLeftX,
          y: targetTopLeftY,
          clientWidth: targetWidth,
          clientHeight: targetHeight,
        }, //top left coordinate of target
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
            xysz: calc(x, y, scaleAmount),
            zIndex: 5,
            transformOrigin: calculatedTransform,
          });
        } else {
          set({
            xysz: calc(x, y, scaleAmount),
            zIndex: 5,
          });
        }
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
        <h4>{date}</h4>
        <div />
        <i className='fas fa-sync-alt fa-3x'></i>
        <img
          src={urlSrc}
          alt={altSrc}
          // style={{
          //   opacity,
          //   transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          // }}
        />
      </ItemContainer>
    </FloatStyled>
  );
};

export default GalleryItem;
