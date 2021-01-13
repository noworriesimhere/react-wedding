import React, { useContext } from 'react';
import { ListContainer, ListItem, NavContainer } from './header.styles';

import { CurrentUserContext } from '../../providers/user/user.provider';

import { homeRef } from '../intro-card/intro-card.component';
import { ourStoryRef } from '../our-story-card/our-story-card.component';
import { signInRef } from '../sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import { rsvpRef } from '../rsvp/rsvp.component';
import { handleOnClick } from '../../utils/util-functions';

import HoverButton from '../hover-button/hover-button.component';

const Header = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <NavContainer>
      <ListContainer>
        <ListItem onClick={handleOnClick(homeRef)}>
          <HoverButton>Home</HoverButton>
        </ListItem>
        <ListItem onClick={handleOnClick(ourStoryRef)}>
          <HoverButton>Our Story</HoverButton>
        </ListItem>
        <ListItem onClick={handleOnClick(signInRef)}>
          <HoverButton>
            {currentUser ? 'Log Out' : 'Sign Up / Log In'}
          </HoverButton>
        </ListItem>
        {currentUser ? (
          <ListItem onClick={handleOnClick(rsvpRef)}>
            <HoverButton>RSVP / Guestbook</HoverButton>
          </ListItem>
        ) : (
          ''
        )}
      </ListContainer>
    </NavContainer>
  );
};

export default Header;
