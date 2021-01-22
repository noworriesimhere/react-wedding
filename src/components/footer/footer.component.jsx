import React from 'react';
import { FixedFooter, FooterContainer } from './footer.styles';
import { scrollRef } from '../../App.js';

const Footer = ({ children }) => {
  return (
    <FooterContainer>
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
          console.log('clicked!');
        }}
      />
      <FixedFooter>
        Designed and Developed by Alan Tran 2021 &copy;{' '}
        <a href='https://alantran.tech' target='blank'>
          Learn More.
        </a>
      </FixedFooter>
    </FooterContainer>
  );
};

export default Footer;
