import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import GuestbookForm from '../../components/guestbook-form-card/guestbook-form.component';
import GuestbookGallery from '../../components/guestbook-gallery/guestbook-gallery.component';
import Header from '../../components/header/header.component';
import HoverButton from '../../components/hover-button/hover-button.component';
import IntroCard from '../../components/intro-card/intro-card.component';
import { CurrentUserContext } from '../../providers/user/user.provider';
import {
  MainPageLink,
  MobileLink,
  MobileLinkBackground,
} from './guestbook.styles';

const Guestbook = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <MobileLinkBackground>
        <MobileLink to='/'>
          <HoverButton guestbook>Go To Main Page</HoverButton>
        </MobileLink>
      </MobileLinkBackground>
      <Header>
        <HoverButton>Intro</HoverButton>
        <HoverButton guestbook>
          <MainPageLink to='/'>Main Page </MainPageLink>
        </HoverButton>
        <HoverButton>Sign Book</HoverButton>
      </Header>
      <IntroCard src='img/georgiabook.jpg' alt='Welcome to our Guest Book!'>
        <h1>Guest Book</h1>
        <p>
          Hey there {currentUser ? currentUser.displayName : 'Friend'}!
          <br />
          We'd love to see and hear from you
          <br />
          😊
        </p>
      </IntroCard>

      <GuestbookForm />
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
