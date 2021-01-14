import React from 'react';
import {
  ContentsContainer,
  ImageContainer,
  TextContainer,
} from './intro-card.styles';

import { handleOnClick } from '../../utils/util-functions';
import { messageRef } from '../message-card/message-card.component';
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
          <h2>June (something) 2021</h2>
          <i
            className='fas fa-chevron-circle-right fa-5x'
            onClick={handleOnClick(messageRef)}
          ></i>
          <i className='fas fa-chevron-circle-down fa-5x'></i>
        </TextContainer>
      </ContentsContainer>
    </FloatWrapper>
  );
};

export default IntroCard;
