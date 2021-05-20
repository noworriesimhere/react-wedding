import React, { useState, useEffect } from 'react';
import Burger from '../burger/burger.component';
import HoverButton from '../../components/hover-button/hover-button.component';

import { homeRef } from '../../components/intro-card/intro-card.component';
import { ourStoryRef } from '../../components/our-story-card/our-story-card.component';
import { zoomRef, registryRef } from '../../components/details/details.component';

import {signInRef } from '../../components/sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import {galleryRef} from '../../components/guestbook-gallery/guestbook-gallery.component';

import { handleRefClick } from '../../utils/util-functions';

import { HeaderContainer, ListContainer, NavContainer, MobileLink } from './header.styles';

const Header = ({ location }) => {
  const [click, setClick] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);


  const showMobileMenu = () => {
    if (window.innerWidth <= 511) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    showMobileMenu();
  }, []);


  window.addEventListener('resize', showMobileMenu);

  return (
    <>
      {mobileMenu && <HeaderContainer>A & G<Burger click={click} setClick={setClick}/></HeaderContainer>}
    <NavContainer click={click}>
      <ListContainer setClick={setClick}>
        {location === '/guestbook' &&
        <>
          <MobileLink to='/'>
            <HoverButton guestbook>Go To Main Page</HoverButton>
          </MobileLink>
          <HoverButton onClick={handleRefClick(homeRef, true, setClick)}>Intro</HoverButton>
          <HoverButton onClick={handleRefClick(signInRef, true, setClick)}>Sign Book</HoverButton>
          <HoverButton onClick={handleRefClick(galleryRef, true, setClick)}>Messages</HoverButton>
        </>
        }
        {location === '/' &&
        <>
          <MobileLink to='/guestbook'>
            <HoverButton guestbook>Go To Guestbook</HoverButton>
          </MobileLink>
          <HoverButton onClick={handleRefClick(homeRef, true, setClick)}>Intro</HoverButton>
          <HoverButton onClick={handleRefClick(ourStoryRef, true, setClick)}>Our Story</HoverButton>
          <HoverButton onClick={handleRefClick(zoomRef, true, setClick)}>Zoom Info</HoverButton>
          <HoverButton onClick={handleRefClick(registryRef, true, setClick)}>Registry</HoverButton>
        </>
        }

      </ListContainer>
    </NavContainer>
    </>
  );
};

export default Header;
