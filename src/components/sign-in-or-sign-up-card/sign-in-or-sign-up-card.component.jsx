import React, { useContext, useState } from 'react';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import {
  SlidesContainer,
  ContentsContainer,
  HeaderContainerTop,
  FormContainer,
  DoubleFormContainer,
} from './sign-in-or-sign-up-card.styles';

import CurrentUserContext from '../../contexts/current-user/current-user.context';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils';

const SignInOrSignUpCard = () => {
  const { currentUser, logOut } = useContext(CurrentUserContext);
  return (
    <>
      <SlidesContainer>
        <ContentsContainer>
          {currentUser ? (
            <>
              <HeaderContainerTop>
                Hello {currentUser.displayName}!
              </HeaderContainerTop>
              <FormContainer>
                <h2>You're signed in</h2>
                <CustomButton
                  onClick={async () => {
                    await auth.signOut();
                    logOut();
                  }}
                >
                  Sign Out
                </CustomButton>
              </FormContainer>
            </>
          ) : (
            <>
              <HeaderContainerTop>
                Sign Up <span>or</span> Log In
              </HeaderContainerTop>
              <DoubleFormContainer>
                <SignUp />
                <SignIn />
              </DoubleFormContainer>
            </>
          )}
        </ContentsContainer>
      </SlidesContainer>
    </>
  );
};

export default SignInOrSignUpCard;
