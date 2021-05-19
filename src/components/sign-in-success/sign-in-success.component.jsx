import React, { useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { SuccessContainer } from './sign-in-success.styles';

import { auth } from '../../firebase/firebase.utils';
import { CurrentUserContext } from '../../providers/user/user.provider';

let handPointer;
if (window.innerWidth < 511) {
  handPointer = <i className='far fa-hand-point-down fa-3x' />;
} else {
  handPointer = <i className='far fa-hand-point-right fa-3x' />;
}

const SignInSuccess = () => {
  const { logOut, currentUser } = useContext(CurrentUserContext);
  return (
    <SuccessContainer>
      <h2>Hello {currentUser.displayName}!</h2>
      <p>You're signed in</p>
      {handPointer}
      <p>Please proceed to sign our Guestbook</p>
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
