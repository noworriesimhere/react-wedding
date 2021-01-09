import React from 'react';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import {
  SlidesContainer,
  ContentsContainer,
  HeaderContainerTop,
  FormContainer,
} from './sign-in-or-sign-up-card.styles';

const SignInOrSignUpCard = () => {
  return (
    <>
      <SlidesContainer>
        <ContentsContainer>
          <HeaderContainerTop>
            Sign Up <span>or</span> Log In
          </HeaderContainerTop>
          <FormContainer>
            <SignUp />
            <SignIn />
          </FormContainer>
        </ContentsContainer>
      </SlidesContainer>
    </>
  );
};

export default SignInOrSignUpCard;
