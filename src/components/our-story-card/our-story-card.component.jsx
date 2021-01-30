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
          <TextContainerLeft ref={ourStoryRef}>
            <h1>Our Story</h1>
            <p>{`${instructions}`} Each Chapter</p>
          </TextContainerLeft>
        </FloatWrapper>
        <MiddleContainer>
          <Gallery />
        </MiddleContainer>
        <FloatWrapper>
          <TextContainerRight>
            <h1>To Be Continued...</h1>
            <p>We'd love for you to attend the wedding</p>
            <p>
              Please register to RSVP, access Zoom details, and sign our
              guestbook
            </p>
          </TextContainerRight>
        </FloatWrapper>
      </ContentsContainer>
    </>
  );
};

export default OurStoryCard;
