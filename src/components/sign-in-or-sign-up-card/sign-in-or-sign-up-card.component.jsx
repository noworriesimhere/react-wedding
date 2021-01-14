import React, { useContext } from 'react';
import SignIn from '../sign-in/sign-in.component';
import SignUp from '../sign-up/sign-up.component';
import {
  ContentsContainer,
  HeaderContainerTop,
  FormContainer,
  DoubleFormContainer,
} from './sign-in-or-sign-up-card.styles';

import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils';
import { CurrentUserContext } from '../../providers/user/user.provider';

import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 200,
  (x - window.innerWidth / 2) / 200,
  1.05,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const signInRef = React.createRef();

const SignInOrSignUpCard = () => {
  const { currentUser, logOut } = useContext(CurrentUserContext);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
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
    </animated.div>
  );
};

export default SignInOrSignUpCard;
