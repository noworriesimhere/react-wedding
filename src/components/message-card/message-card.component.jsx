import React, { useContext } from 'react';
import CurrentUserContext from '../../contexts/current-user/current-user.context';

import {
  SlidesContainer,
  ContentsContainer,
  ImageContainerLeft,
  ImageContainerRight,
  TextContainer,
} from './message-card.styles';
const MessageCard = () => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <SlidesContainer>
        <ContentsContainer>
          <ImageContainerLeft />
          <TextContainer>
            <h1>
              Hello <br />{' '}
              {!currentUser ? (
                <span>Friend!</span>
              ) : (
                <span>{currentUser.displayName}!</span>
              )}
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
