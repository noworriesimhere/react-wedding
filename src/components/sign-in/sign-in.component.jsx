import React, { useState } from 'react';
// import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import {
//   googleSignInStart,
//   emailSignInStart,
// } from '../../redux/user/user.actions';

import { ButtonsBarContainer, SignInContainer } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'>Log In</CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            type='button'
            isGoogleSignIn
          >
            Log In With <span></span>
            <span className='google-logo'>
              G<span className='red'>o</span>
              <span className='yellow'>o</span>g<span className='green'>l</span>
              <span className='red'>e</span>
            </span>
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart: (email, password) =>
//     dispatch(emailSignInStart({ email, password })),
// });

export default SignIn;
// export default connect(null, mapDispatchToProps)(SignIn);
