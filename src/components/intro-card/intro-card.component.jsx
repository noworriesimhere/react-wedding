import React from 'react';
import {
  SlidesContainer,
  ContentsContainer,
  ImageContainer,
  TextContainer,
} from './intro-card.styles';

export const homeRef = React.createRef();

const IntroCard = () => {
  return (
    <>
      <SlidesContainer>
        <ContentsContainer>
          <ImageContainer ref={homeRef} />
          <TextContainer>
            <h1>Georgia & Alan</h1>
            <p>Are Getting Married On</p>
            <h2>June (something) 2021</h2>
            <i className='fas fa-chevron-circle-right fa-5x'></i>
            <i className='fas fa-chevron-circle-down fa-5x'></i>
          </TextContainer>
        </ContentsContainer>
      </SlidesContainer>
    </>
  );
};

export default IntroCard;
