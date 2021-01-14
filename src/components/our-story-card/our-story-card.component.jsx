import React from 'react';
import Gallery from '../gallery/gallery.component';
import {
  ContentsContainer,
  TextContainerRight,
  TextContainerLeft,
} from './our-story-card.styles';

export const ourStoryRef = React.createRef();

const OurStoryCard = () => {
  return (
    <>
      <ContentsContainer>
        <TextContainerLeft ref={ourStoryRef}>
          <h1>Our Story</h1>
          <p>Click Any Image For a Chapter</p>
        </TextContainerLeft>
        <Gallery />
        <TextContainerRight>
          <h1>To Be Continued...</h1>
          <p>We'd love for you to attend the wedding</p>
          <p>
            Please sign up to RSVP, access Zoom details, and sign our guestbook
          </p>
          <i className='fas fa-chevron-circle-right fa-5x'></i>
        </TextContainerRight>
      </ContentsContainer>
    </>
  );
};

export default OurStoryCard;
