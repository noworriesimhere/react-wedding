import React from 'react';
import {
  ContentsContainer,
  ImageContainer,
  TextContainer,
} from './intro-card.styles';

import FloatWrapper from '../float-wrapper/float-wrapper.component';

export const homeRef = React.createRef();

const IntroCard = ({ children, src, alt }) => {
  return (
    <FloatWrapper>
      <ContentsContainer>
        <ImageContainer ref={homeRef}>
          <img src={src} alt={alt} />
        </ImageContainer>
        <TextContainer>{children}</TextContainer>
      </ContentsContainer>
    </FloatWrapper>
  );
};

export default IntroCard;
