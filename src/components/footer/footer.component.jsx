import React from 'react';
import HoverButton from '../hover-button/hover-button.component';
import { FixedFooter, FooterContainer } from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <i
        className='fas fa-chevron-circle-left fa-5x'
        onClick={console.log('left')}
      ></i>
      <HoverButton big>Sign Our Guestbook</HoverButton>
      <i
        className='fas fa-chevron-circle-right fa-5x'
        onClick={console.log('right')}
      ></i>
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
