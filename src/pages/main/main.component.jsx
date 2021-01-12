import React from 'react';
import IntroCard from '../../components/intro-card/intro-card.component';
import MessageCard from '../../components/message-card/message-card.component';
import OurStoryCard from '../../components/our-story-card/our-story-card.component';
import SignInOrSignUpCard from '../../components/sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import RsvpCard from '../../components/rsvp/rsvp.component';

const Main = () => {
  return (
    <>
      <IntroCard />
      <MessageCard />
      <OurStoryCard />
      <SignInOrSignUpCard />
      <RsvpCard />
    </>
  );
};

export default Main;
