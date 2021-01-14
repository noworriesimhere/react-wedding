import React, { useContext } from 'react';
import { CurrentUserContext } from '../../providers/user/user.provider';
import FloatWrapper from '../float-wrapper/float-wrapper.component';

import {
  ContentsContainer,
  ImageContainerLeft,
  ImageContainerRight,
  TextContainer,
  TitleContainer,
} from './message-card.styles';

export const messageRef = React.createRef();

const MessageCard = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <FloatWrapper>
      <ContentsContainer ref={messageRef}>
        <ImageContainerLeft />
        <TextContainer>
          <TitleContainer>
            Hello <br />{' '}
            {!currentUser ? (
              <span>Friend!</span>
            ) : (
              <span>{currentUser.displayName}!</span>
            )}
          </TitleContainer>
          <p>
            Thank you for stopping by. We're excited and honored to have you and
            the rest of our friends and family join us for our special day.
          </p>
          <p>
            Circumstances haven't allowed us to personally share our story with
            you, so we figured that we'd do it now!
          </p>
          <i className='fas fa-chevron-circle-right fa-5x'></i>
        </TextContainer>
        <ImageContainerRight />
      </ContentsContainer>
    </FloatWrapper>
  );
};

export default MessageCard;
