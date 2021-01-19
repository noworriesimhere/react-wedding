import React, { useContext } from 'react';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import FloatWrapper from '../float-wrapper/float-wrapper.component';
import {
  ContentsContainer,
  HeaderContainerTop,
  DoubleFormContainer,
} from './sign-in-or-sign-up-card.styles';

import { CurrentUserContext } from '../../providers/user/user.provider';
import SignInSuccess from '../sign-in-success/sign-in-success.component';
import Radio from '../radio/radio.component';

export const signInRef = React.createRef();

const SignInOrSignUpCard = () => {
  const { currentUser, isLogIn } = useContext(CurrentUserContext);

  return (
    <FloatWrapper>
      {currentUser ? (
        <ContentsContainer ref={signInRef}>
          <SignInSuccess />
        </ContentsContainer>
      ) : window.innerWidth > 780 ? (
        <ContentsContainer ref={signInRef}>
          <HeaderContainerTop>
            Sign Up <span>or</span> Log In
          </HeaderContainerTop>
          <DoubleFormContainer>
            <SignUp />
            <SignIn />
          </DoubleFormContainer>
        </ContentsContainer>
      ) : (
        <ContentsContainer ref={signInRef}>
          <Radio option1='Sign Up' option2='Log In' />
          {isLogIn ? <SignIn /> : <SignUp />}
        </ContentsContainer>
      )}
    </FloatWrapper>
  );
};

export default SignInOrSignUpCard;
