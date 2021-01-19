import React, { useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { SuccessContainer } from './sign-in-success.styles';

import { auth } from '../../firebase/firebase.utils';
import { CurrentUserContext } from '../../providers/user/user.provider';

const SignInSuccess = () => {
  const { logOut, currentUser } = useContext(CurrentUserContext);
  return (
    <SuccessContainer>
      <h2>Hello {currentUser.displayName}!</h2>
      <h3>You're signed in</h3>
      <p>Please proceed to RSVP and sign our Guestbook</p>
      <CustomButton
        onClick={async () => {
          await auth.signOut();
          logOut();
        }}
      >
        Sign Out
      </CustomButton>
    </SuccessContainer>
  );
};

export default SignInSuccess;
