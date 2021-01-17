import React from 'react';
import HoverButton from '../hover-button/hover-button.component';
import { FixedFooter, FooterContainer } from './footer.styles';
import { appRef } from '../../App.js';

const Footer = () => {
  return (
    <FooterContainer>
      <i
        className='fas fa-chevron-circle-left fa-4x'
        onClick={() =>
          appRef.current.scrollBy({
            left: -800,
            behavior: 'smooth',
          })
        }
      />

      <HoverButton big>See Our Guestbook</HoverButton>
      <i
        className='fas fa-chevron-circle-right fa-4x'
        onClick={() =>
          appRef.current.scrollBy({
            left: 900,
            behavior: 'smooth',
          })
        }
      />
      <FixedFooter>
        Designed and Developed by Alan Tran 2021 &copy;{' '}
        <a href='https://alantran.netlify.app' target='blank'>
          Learn More.
        </a>
      </FixedFooter>
    </FooterContainer>
  );
};

export default Footer;
