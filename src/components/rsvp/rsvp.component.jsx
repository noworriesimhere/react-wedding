import React from 'react';
import {
  SlidesContainer,
  ContentsContainer,
  ImageContainer,
  TextContainer,
} from './rsvp.styles';
const RsvpCard = () => {
  return (
    <>
      <SlidesContainer>
        <ContentsContainer>
          <ImageContainer />
          <TextContainer>
            <h2>RSVP</h2>
            <p>For Zoom Details</p>
          </TextContainer>
        </ContentsContainer>
      </SlidesContainer>
    </>
  );
};

export default RsvpCard;
