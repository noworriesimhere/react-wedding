import React from 'react';
import {
  SlidesContainer,
  ContentsContainer,
  ImageContainerLeft,
  ImageContainerRight,
  TextContainer,
} from './message-card.styles';
const MessageCard = () => {
  return (
    <>
      <SlidesContainer>
        <ContentsContainer>
          <ImageContainerLeft />
          <TextContainer>
            <h1>
              Hello <br /> Friend!
            </h1>
            <p>
              Thank you for stopping by. We're excited and honored to have you
              and the rest of our friends and family join us for our special
              day.
            </p>
            <p>
              Circumstances haven't allowed us to personally share our story
              with you, so we figured that we'd do it now!
              <i className='fas fa-chevron-circle-right'></i>
            </p>
          </TextContainer>
          <ImageContainerRight />
        </ContentsContainer>
      </SlidesContainer>
    </>
  );
};

export default MessageCard;
