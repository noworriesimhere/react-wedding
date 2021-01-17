import React, { useContext } from 'react';
import { ListContainer, NavContainer } from './header.styles';

import { CurrentUserContext } from '../../providers/user/user.provider';

import { homeRef } from '../intro-card/intro-card.component';
import { ourStoryRef } from '../our-story-card/our-story-card.component';
import { signInRef } from '../sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import { rsvpRef } from '../rsvp/rsvp.component';
import { handleRefClick } from '../../utils/util-functions';

import HoverButton from '../hover-button/hover-button.component';

const Header = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <NavContainer>
      <ListContainer>
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
      </ListContainer>
    </NavContainer>
  );
};

export default Header;
