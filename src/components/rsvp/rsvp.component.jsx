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
        <ContentsContainer ref={rsvpRef}>
          {currentUser && currentUser.isRsvpd ? (
            <ZoomContainer>
              <h2>Zoom Credentials</h2>
              <p>Meeting ID: 123 4567 1234</p>
              <p>Password: 123456</p>
              <a href={'https://google.com'}>Direct Link</a>
            </ZoomContainer>
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
        <SideContainer>
          <h1>Registry?</h1>
          <p>Things are hard for everyone right now. </p>{' '}
          <p>
            We don't want to "impose an expensive burden on any one of you" (2
            Thess 3:8). Yet, we gratefully recognize the joy that results from
            giving and don't wish to deny anyone that joy. (Acts 20:35)
          </p>
          <p>If you feel inclined to help us, please use the links below.</p>
          <LinksContainer>
            <a
              href='https://cash.app/$itsaniceday'
              rel='noreferrer'
              target='_blank'
            >
              Cash App
            </a>
            <a
              href='https://paypal.me/contactalantran'
              rel='noreferrer'
              target='_blank'
            >
              Paypal
            </a>
          </LinksContainer>
          <p>We deeply appreciate and love every one of you!!</p>
        </SideContainer>
      </FloatWrapper>
    </>
  );
};

export default RsvpCard;
