import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import GuestbookForm from '../../components/guestbook-form-card/guestbook-form.component';
import GuestbookGallery from '../../components/guestbook-gallery/guestbook-gallery.component';
import Header from '../../components/header/header.component';
import HoverButton from '../../components/hover-button/hover-button.component';
import IntroCard from '../../components/intro-card/intro-card.component';
import { CurrentUserContext } from '../../providers/user/user.provider';

const Guestbook = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <Header>
        <HoverButton>Home</HoverButton>
        <HoverButton>Map</HoverButton>
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
