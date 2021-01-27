import React from 'react';
import Footer from '../../components/footer/footer.component';
import GuestbookForm from '../../components/guestbook-form-card/guestbook-form.component';
import Header from '../../components/header/header.component';
import HoverButton from '../../components/hover-button/hover-button.component';
import IntroCard from '../../components/intro-card/intro-card.component';

const Guestbook = () => {
  return (
    <>
      <Header>
        <HoverButton>Home</HoverButton>
        <HoverButton>Map</HoverButton>
        <HoverButton>Sign Book</HoverButton>
      </Header>
      <IntroCard src='img/georgiabook.jpg' alt='Welcome to our Guest Book!'>
        <h1>Guest Book</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </IntroCard>

      <GuestbookForm />
      <Footer>
        <HoverButton big to='/'>
          Return to Main Page
        </HoverButton>
      </Footer>
    </>
  );
};

export default Guestbook;
