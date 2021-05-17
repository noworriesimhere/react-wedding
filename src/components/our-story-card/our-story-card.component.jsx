import React from 'react';
import Gallery from '../gallery/gallery.component';
import FloatWrapper from '../float-wrapper/float-wrapper.component';
import { isMobile } from 'react-device-detect';
import {
  ContentsContainer,
  TextContainerRight,
  TextContainerLeft,
  MiddleContainer,
} from './our-story-card.styles';

export const ourStoryRef = React.createRef();
let instructions;
if (isMobile) {
  instructions = 'Tap and Swipe';
} else {
  instructions = 'Click and Scroll';
}
const OurStoryCard = () => {
  return (
    <>
      <ContentsContainer>
        <FloatWrapper>
          <TextContainerLeft>
            <h1>Our Story</h1>
            <p>{`${instructions}`} Each Chapter</p>
          </TextContainerLeft>
        </FloatWrapper>
        <MiddleContainer ref={ourStoryRef}>
          <Gallery />
        </MiddleContainer>
        <FloatWrapper>
          <TextContainerRight>
            <h1>Just One More Thing...</h1>
            <p>We want you to be a part of our story!</p>
            <p>Keep scrolling to see Zoom and other details.</p>
            <p>We also have a virtual guestbook, we'd love to have you sign it!</p>
          </TextContainerRight>
        </FloatWrapper>
      </ContentsContainer>
    </>
  );
};

export default OurStoryCard;
