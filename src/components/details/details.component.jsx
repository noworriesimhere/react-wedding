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
          <h1>Zoom Information</h1>
          <p>Meeting ID: 897 9730 4558 <br /> Password: WeLove</p>
          <a href={'https://us02web.zoom.us/j/89797304558?pwd=T3kxbzZQUmRWSW1JZS9XcUQzYmZhQT09'} target="_blank" rel="noreferrer">Direct Zoom Link</a>

          <p>
            Saturday, September 4th at 3:30pm
            <br />
            The ceremony will start in a timely fashion
          </p>

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