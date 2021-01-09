import React from 'react';
import IntroCard from '../intro-card/intro-card.component';
import MessageCard from '../message-card/message-card.component';
import OurStoryCard from '../our-story-card/our-story-card.component';
import SignInOrSignUpCard from '../sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';

const Slides = () => {
  return (
    <>
      <IntroCard />
      <MessageCard />
      <OurStoryCard />
      <SignInOrSignUpCard />
    </>
  );
};

export default Slides;
