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
        <HoverButton onClick={handleOnClick(homeRef)}>Home</HoverButton>

        <HoverButton onClick={handleOnClick(ourStoryRef)}>
          Our Story
        </HoverButton>

        <HoverButton onClick={handleOnClick(signInRef)}>
          {currentUser ? 'Log Out' : 'Sign Up / Log In'}
        </HoverButton>
        {currentUser ? (
          <HoverButton onClick={handleOnClick(rsvpRef)}>
            RSVP / Guestbook
          </HoverButton>
        ) : (
          ''
        )}
      </ListContainer>
    </NavContainer>
  );
};

export default Header;
