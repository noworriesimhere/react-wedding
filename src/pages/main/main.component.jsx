import React, { useContext } from 'react';
import IntroCard from '../../components/intro-card/intro-card.component';
import MessageCard from '../../components/message-card/message-card.component';
import OurStoryCard from '../../components/our-story-card/our-story-card.component';

import { CurrentUserContext } from '../../providers/user/user.provider';

import { FixedFooter } from './main.styles';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';


import HoverButton from '../../components/hover-button/hover-button.component';
import { Link } from 'react-router-dom';
import Details from '../../components/details/details.component';

const Main = ({location}) => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <Header location={location.pathname}/>

      <IntroCard src='img/IMG_6922.jpg' alt='intro pic'>
        <h1>Georgia & Alan</h1>
        <p>Are Getting Married On</p>
        <h3>September 4th, 2021</h3>
      </IntroCard>
      <MessageCard />
      <OurStoryCard />
      <Details />
      {window.innerWidth < 511 ? (
        <FixedFooter>
          <p>Designed and Developed by Alan Tran 2021 &copy; </p>
          <a href='https://alantran.tech' target='blank'>
            Learn More.
          </a>
        </FixedFooter>
      ) : (
        <Footer location={location.pathname}>
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
