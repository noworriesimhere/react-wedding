import React from 'react';
import {
  ContentsContainer,
  LinksContainer
} from './details.styles';

import FloatWrapper from '../float-wrapper/float-wrapper.component';

export const zoomRef = React.createRef();
export const registryRef = React.createRef();

const Details = () => {
  return (
    <>
      <FloatWrapper>
        <ContentsContainer ref={zoomRef}>
          <h2>Zoom Information</h2>
          <p>Meeting ID: 123 4567 1234 <br /> Password: 123456</p>
          <a href={'https://google.com'}>Direct Zoom Link</a>
          <p>As a fallback... Try connecting below</p>
          <a href='https://google.com'>YouTube Live</a>
        </ContentsContainer>
      </FloatWrapper>
      <FloatWrapper>
        <ContentsContainer ref={registryRef}>
          <h1>Registry</h1>
          <p>
            We don't want to "impose an expensive burden on any one of you" (2
            Thess 3:8). Yet, we gratefully recognize the joy that results from
            giving and don't wish to deny anyone that joy. (Acts 20:35)
          </p>
          <p>If you feel inclined to help us, please use the links below.</p>
          <LinksContainer>
            <a
              href='https://cash.app/$itsaniceday'
              rel='noreferrer'
              target='_blank'
            >
              Cash App
            </a>
            <a
              href='https://paypal.me/contactalantran'
              rel='noreferrer'
              target='_blank'
            >
              Paypal
            </a>
            <a
              href='https://www.amazon.com/wedding/share/alanlovesgeorgia'
              rel='noreferrer'
              target='_blank'
            >
              Registry
            </a>
          </LinksContainer>
          <p>We deeply appreciate and love every one of you!!</p>
        </ContentsContainer>
      </FloatWrapper>
    </>
  );
};

export default Details;