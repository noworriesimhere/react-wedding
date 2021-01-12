import React, { useContext } from 'react';
import { ListContainer, ListItem, NavContainer } from './header.styles';

import { CurrentUserContext } from '../../providers/user/user.provider';

import { homeRef } from '../intro-card/intro-card.component';
import { ourStoryRef } from '../our-story-card/our-story-card.component';
import { signInRef } from '../sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import { rsvpRef } from '../rsvp/rsvp.component';

const handleOnClick = (ref) => {
  return () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };
};

const Header = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <NavContainer>
      <ListContainer>
        <ListItem onClick={handleOnClick(homeRef)}>Home</ListItem>
        <ListItem onClick={handleOnClick(ourStoryRef)}>Our Story</ListItem>
        <ListItem onClick={handleOnClick(signInRef)}>
          {currentUser ? 'Log Out' : 'Sign Up / Log In'}
        </ListItem>
        {currentUser ? (
          <ListItem onClick={handleOnClick(rsvpRef)}>RSVP / Guestbook</ListItem>
        ) : (
          ''
        )}
      </ListContainer>
    </NavContainer>
  );
};

export default Header;
