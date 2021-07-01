import React from 'react';
import { FixedFooter, FooterContainer, MenuContainer } from './footer.styles';
import { scrollRef } from '../../App.js';

import HoverButton from '../../components/hover-button/hover-button.component';

import { homeRef } from '../../components/intro-card/intro-card.component';
import { ourStoryRef } from '../../components/our-story-card/our-story-card.component';
import { zoomRef, registryRef } from '../../components/details/details.component';

import {signInRef } from '../../components/sign-in-or-sign-up-card/sign-in-or-sign-up-card.component';
import {galleryRef} from '../../components/guestbook-gallery/guestbook-gallery.component';

import { handleRefClick } from '../../utils/util-functions';


const Footer = ({ children, location }) => {
  console.log(location)
  return (
    <FooterContainer>

      <MenuContainer>
      {location === '/guestbook' &&
        <>
          <HoverButton onClick={handleRefClick(homeRef)}>Intro</HoverButton>
          <HoverButton onClick={handleRefClick(signInRef)}>Sign Book</HoverButton>
          <HoverButton onClick={handleRefClick(galleryRef)}>Messages</HoverButton>
        </>
        }
        {location === '/' &&
        <>
          <HoverButton onClick={handleRefClick(homeRef)}>Intro</HoverButton>
          <HoverButton onClick={handleRefClick(ourStoryRef)}>Our Story</HoverButton>
          <HoverButton onClick={handleRefClick(zoomRef)}>Zoom Info</HoverButton>
          <HoverButton onClick={handleRefClick(registryRef)}>Registry</HoverButton>
        </>
        }
      </MenuContainer>

      <i
        className='fas fa-chevron-circle-left fa-4x'
        onClick={() =>
          scrollRef.current.scrollBy({
            left: -800,
            behavior: 'smooth',
          })
        }
      />

      {children}
      <i
        className='fas fa-chevron-circle-right fa-4x'
        onClick={() => {
          scrollRef.current.scrollBy({
            left: 900,
            behavior: 'smooth',
          });
        }}
      />
      <FixedFooter>
        Designed and Developed by Alan Tran 2021 &copy;{' '}
        <a href='https://alantran.tech' target='blank' id="footer-link">
          Learn More.
        </a>
      </FixedFooter>
    </FooterContainer>
  );
};

export default Footer;
