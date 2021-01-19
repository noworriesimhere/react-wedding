import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { ButtonsBarContainer, SignInContainer } from './sign-in.styles';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
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
          <CustomButton onClick={signInWithGoogle} type='button' isGoogleSignIn>
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

export default SignIn;
