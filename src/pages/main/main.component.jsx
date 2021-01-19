import React, { useContext } from 'react';
import IntroCard from '../../components/intro-card/intro-card.component';
import MessageCard from '../../components/message-card/message-card.component';
import OurStoryCard from '../../components/our-story-card/our-story-card.component';
import SignInOrSignUpCard from '../../components/sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import RsvpCard from '../../components/rsvp/rsvp.component';

import { CurrentUserContext } from '../../providers/user/user.provider';

import { FixedFooter } from './main.styles';

const Main = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <IntroCard />
      <MessageCard />
      <OurStoryCard />
      <SignInOrSignUpCard />
      {currentUser ? <RsvpCard /> : ''}
      {window.innerWidth < 780 ? (
        <FixedFooter>
          <p>Designed and Developed by Alan Tran 2021 &copy; </p>
          <a href='https://alantran.tech' target='blank'>
            Learn More.
          </a>
        </FixedFooter>
      ) : (
        ''
      )}
    </>
  );
};

export default Main;
