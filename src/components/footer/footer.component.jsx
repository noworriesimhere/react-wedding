import React from 'react';
import HoverButton from '../hover-button/hover-button.component';
import { FixedFooter, FooterContainer } from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <HoverButton big>Guestbook</HoverButton>
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
