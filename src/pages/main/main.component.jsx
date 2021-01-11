import React from 'react';
import IntroCard from '../../components/intro-card/intro-card.component';
import MessageCard from '../../components/message-card/message-card.component';
import OurStoryCard from '../../components/our-story-card/our-story-card.component';
import SignInOrSignUpCard from '../../components/sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import RsvpCard from '../../components/rsvp/rsvp.component';

import { FooterContainer, InnerWrapper, OuterWrapper } from './main.styles';

const Wrapper = () => {
  return (
    <>
      <OuterWrapper>
        <InnerWrapper>
          <IntroCard />
          <MessageCard />
          <OurStoryCard />
          <SignInOrSignUpCard />
          <RsvpCard />
        </InnerWrapper>
      </OuterWrapper>
      <FooterContainer>
        Designed and Developed by Alan Tran 2021 &copy;{' '}
        <a href='https://alantran.netlify.app' target='blank'>
          Learn More.
        </a>
      </FooterContainer>
    </>
  );
};

export default Wrapper;
