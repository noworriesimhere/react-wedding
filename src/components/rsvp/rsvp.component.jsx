import React, { useContext } from 'react';
import { CurrentUserContext } from '../../providers/user/user.provider';
import Checkbox from '../checkbox/checkbox.component';
import FloatWrapper from '../float-wrapper/float-wrapper.component';

import {
  ContentsContainer,
  ImageContainer,
  TextContainer,
  SideContainer,
  LinksContainer,
  ZoomContainer,
} from './rsvp.styles';

export const rsvpRef = React.createRef();

const RsvpCard = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <FloatWrapper>
        <ContentsContainer ref={rsvpRef} currentUser={currentUser}>
          {currentUser && currentUser.isRsvpd ? (
            <ZoomContainer />
          ) : (
            <ImageContainer />
          )}
          <TextContainer>
            <h2>R.S.V.P.</h2>
            <Checkbox>I'd love to come!</Checkbox>
          </TextContainer>
        </ContentsContainer>
      </FloatWrapper>
      <FloatWrapper>
        <SideContainer currentUser={currentUser}>
          <h1>Registry?</h1>
          <p>Things are hard for everyone right now. </p>{' '}
          <p>
            We don't want to "impose an expensive burden on any one of you" (2
            Thess 3:8). Yet, we gratefully recognize the joy that result from
            giving and don't wish to deny anyone that either. (Acts 20:35)
          </p>
          <p>
            If you still feel inclined to help us in any way, we'd still want to
            keep it simple and modest.
          </p>
          <LinksContainer>
            <a href='https://cash.app/$itsaniceday'>Cash App</a>
            <a href='https://paypal.me/contactalantran'>Paypal</a>
          </LinksContainer>
        </SideContainer>
      </FloatWrapper>
    </>
  );
};

export default RsvpCard;
