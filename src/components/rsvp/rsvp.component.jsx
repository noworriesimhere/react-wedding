import React, { useContext } from 'react';
import { CurrentUserContext } from '../../providers/user/user.provider';

import {
  SlidesContainer,
  ContentsContainer,
  ImageContainer,
  TextContainer,
} from './rsvp.styles';
const RsvpCard = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <SlidesContainer>
        <ContentsContainer currentUser={currentUser}>
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
