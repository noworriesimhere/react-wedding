import React from 'react';


import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import SignInOrSignUpCard from '../../components/sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import GuestbookGallery from '../../components/guestbook-gallery/guestbook-gallery.component';
import Header from '../../components/header/header.component';
import HoverButton from '../../components/hover-button/hover-button.component';

import IntroCard, {

} from '../../components/intro-card/intro-card.component';



const Guestbook = ({location}) => {
console.log(location.pathname)

  return (
    <>

      <Header location={location.pathname}>

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
