import React, { useContext } from 'react';
import IntroCard from '../../components/intro-card/intro-card.component';
import MessageCard from '../../components/message-card/message-card.component';
import OurStoryCard from '../../components/our-story-card/our-story-card.component';
import SignInOrSignUpCard from '../../components/sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import RsvpCard from '../../components/rsvp/rsvp.component';

import { CurrentUserContext } from '../../providers/user/user.provider';
import { InnerWrapper, OuterWrapper, SpacerDiv } from './main.styles';

const Wrapper = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <OuterWrapper>
        <InnerWrapper>
          <IntroCard />
          <MessageCard />
          <OurStoryCard />
          <SignInOrSignUpCard />
          {currentUser ? <RsvpCard /> : ''}
        </InnerWrapper>
      </OuterWrapper>
    </>
  );
};

export default Wrapper;
