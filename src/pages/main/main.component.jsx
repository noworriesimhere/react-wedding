import React, { useContext } from 'react';
import IntroCard from '../../components/intro-card/intro-card.component';
import MessageCard from '../../components/message-card/message-card.component';
import OurStoryCard from '../../components/our-story-card/our-story-card.component';
import SignInOrSignUpCard from '../../components/sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import RsvpCard from '../../components/rsvp/rsvp.component';

import { CurrentUserContext } from '../../providers/user/user.provider';

import { FixedFooter } from './main.styles';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import { homeRef } from '../../components/intro-card/intro-card.component';
import { ourStoryRef } from '../../components/our-story-card/our-story-card.component';
import { signInRef } from '../../components/sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import { rsvpRef } from '../../components/rsvp/rsvp.component';
import { handleRefClick } from '../../utils/util-functions';

import HoverButton from '../../components/hover-button/hover-button.component';
import { Link } from 'react-router-dom';

const Main = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <Header>
        <HoverButton onClick={handleRefClick(homeRef)}>Home</HoverButton>
        <HoverButton onClick={handleRefClick(ourStoryRef)}>
          Our Story
        </HoverButton>
        <HoverButton guestbook>Guestbook</HoverButton>
        <HoverButton onClick={handleRefClick(signInRef)}>
          {currentUser ? 'Log Out' : 'Sign Up / Log In'}
        </HoverButton>
        {currentUser ? (
          <HoverButton onClick={handleRefClick(rsvpRef)}>RSVP</HoverButton>
        ) : (
          ''
        )}
      </Header>
      <IntroCard src='img/IMG_6922.jpg' alt='intro pic'>
        <h1>Georgia & Alan</h1>
        <p>Are Getting Married On</p>
        <h3>June (something) 2021</h3>
      </IntroCard>
      <MessageCard />
      <OurStoryCard />
      <SignInOrSignUpCard />
      {currentUser ? <RsvpCard /> : ''}
      {window.innerWidth < 511 ? (
        <FixedFooter>
          <p>Designed and Developed by Alan Tran 2021 &copy; </p>
          <a href='https://alantran.tech' target='blank'>
            Learn More.
          </a>
        </FixedFooter>
      ) : (
        <Footer>
          <Link to='/guestbook' style={{ textDecoration: 'none' }}>
            <HoverButton big>
              {currentUser ? 'Sign' : 'See'} Our Guestbook
            </HoverButton>
          </Link>
        </Footer>
      )}
    </>
  );
};

export default Main;
