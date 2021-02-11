import React, { useState, useEffect } from 'react';
import { FloatStyled } from './guestbook-gallery-item.styles';
import { useSpring } from 'react-spring';

import FloatWrapper from '../float-wrapper/float-wrapper.component';
import { auth, firestore, storage } from '../../firebase/firebase.utils';

export const storyContainerRef = React.createRef();

const trans = (scale) => `scale(${scale})`;
let calculatedTransform = '50% 50%';
const scaleAmount = 3;

const GuestbookGalleryItem = ({
  gridArea,
  transformOrigin = '50% 50%',
  urlSrc,
  altSrc,
  date,
  chapter,
  story,
  uid,
  id,
  setActiveChild,
  activeChild,
}) => {
  useEffect(() => {
    if (activeChild !== id) {
      setIsHovered(false);
    }
  }, [activeChild, id]);

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

  const docRef = firestore.collection('posts').doc(id);
  const storageRef = storage.refFromURL(urlSrc);

  let deleteButton;
  if (auth.currentUser && uid === auth.currentUser.uid) {
    deleteButton = (
      <i
        className='fas fa-minus-circle'
        onClick={async () => {
          if (window.confirm('Delete the item?'))
            try {
              await docRef.delete();
              await storageRef.delete();
              alert('it worked!');
            } catch (err) {
              console.log(err);
            }
        }}
      />
    );
  } else {
    deleteButton = '';
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
              offsetX = targetCenterX - (screenCenterX - targetCenterX) / 2;
            } else {
              offsetX = targetCenterX + (targetCenterX - screenCenterX) / 2;
            }

            let offsetY;
            if (screenCenterY > targetCenterY) {
              offsetY = targetCenterY - (screenCenterY - targetCenterY) / 2;
            } else {
              offsetY = targetCenterY + (targetCenterY - screenCenterY) / 2;
            }

            const transformPercentageX = Math.floor(
              ((offsetX - targetTopLeftX) / targetWidth) * 100
            );
            const transformPercentageY = Math.floor(
              ((offsetY - targetTopLeftY) / targetHeight) * 100
            );
            calculatedTransform = `${transformPercentageX}% ${transformPercentageY}%`;
            setIsHovered(true);
            setActiveChild(id);
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
          <h5>{chapter}</h5>
          <h6>{date}</h6>

          <i
            className='fas fa-chevron-circle-down'
            onClick={(e) =>
              e.target.parentElement.scrollBy({
                top: e.target.parentElement.clientHeight - 10,
                behavior: 'smooth',
              })
            }
          />

          <div className='story'>
            <p>{story}</p>
          </div>
          <i
            className='fas fa-chevron-circle-up'
            onClick={(e) =>
              e.target.parentElement.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          />
          {deleteButton}
        </div>

        <img src={urlSrc} alt={altSrc} />
      </FloatStyled>
    </FloatWrapper>
  );
};

export default GuestbookGalleryItem;
