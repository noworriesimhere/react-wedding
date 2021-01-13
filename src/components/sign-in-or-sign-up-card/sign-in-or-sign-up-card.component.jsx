import React, { useContext } from 'react';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import {
  SlidesContainer,
  ContentsContainer,
  HeaderContainerTop,
  FormContainer,
  DoubleFormContainer,
} from './sign-in-or-sign-up-card.styles';

import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils';
import { CurrentUserContext } from '../../providers/user/user.provider';

export const signInRef = React.createRef();

const SignInOrSignUpCard = () => {
  const { currentUser, logOut } = useContext(CurrentUserContext);
  return (
    <>
      <ContentsContainer ref={signInRef}>
        {currentUser ? (
          <>
            <HeaderContainerTop>
              Hello {currentUser.displayName}!
            </HeaderContainerTop>
            <FormContainer>
              <h2>You're signed in</h2>
              <p>Please proceed to RSVP and sign our Guestbook</p>
              <i className='fas fa-chevron-circle-right fa-5x'></i>
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
    </>
  );
};

export default SignInOrSignUpCard;
