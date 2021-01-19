import React from 'react';
import {
  ContentsContainer,
  ImageContainer,
  TextContainer,
} from './intro-card.styles';

import FloatWrapper from '../float-wrapper/float-wrapper.component';

export const homeRef = React.createRef();

const IntroCard = () => {
  return (
    <FloatWrapper>
      <ContentsContainer>
        <ImageContainer ref={homeRef} />
        <TextContainer>
          <h1>Georgia & Alan</h1>
          <p>Are Getting Married On</p>
          <h3>June (something) 2021</h3>
        </TextContainer>
      </ContentsContainer>
    </FloatWrapper>
  );
};

export default IntroCard;
