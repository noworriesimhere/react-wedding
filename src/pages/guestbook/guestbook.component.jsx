import React from 'react';


import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import SignInOrSignUpCard, {signInRef } from '../../components/sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import GuestbookGallery, {galleryRef} from '../../components/guestbook-gallery/guestbook-gallery.component';
import Header from '../../components/header/header.component';
import HoverButton from '../../components/hover-button/hover-button.component';
import IntroCard, {
  homeRef,
} from '../../components/intro-card/intro-card.component';

import { handleRefClick } from '../../utils/util-functions';
import { MobileLink, MobileLinkBackground } from './guestbook.styles';


const Guestbook = () => {


  return (
    <>
      <MobileLinkBackground>
        <MobileLink to='/'>
          <HoverButton guestbook>Go To Main Page</HoverButton>
        </MobileLink>
      </MobileLinkBackground>
      <Header>
        <HoverButton onClick={handleRefClick(homeRef)}>Intro</HoverButton>
        <HoverButton onClick={handleRefClick(signInRef)}>Sign Book</HoverButton>
        <HoverButton onClick={handleRefClick(galleryRef)}>Messages</HoverButton>
      </Header>
      <IntroCard src='img/georgiabook.jpg' alt='Welcome to our Guest Book!'>
        <h1>Guest Book</h1>
        <p>Login in with Google or register to write us a message</p>
        <p>Your personal email stays here with us. We'll use it for any anouncements and updates for our event.</p>
      </IntroCard>

      <SignInOrSignUpCard />
      <GuestbookGallery />

      <Footer>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <HoverButton big>Return to Main Page</HoverButton>
        </Link>
      </Footer>
    </>
  );
};

export default Guestbook;
