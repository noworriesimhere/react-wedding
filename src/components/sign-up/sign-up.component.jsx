import React, { useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer } from './sign-up.styles';
import { ButtonsBarContainer } from '../sign-in/sign-in.styles';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    console.log('submitted!');
    // signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          label='Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'>Sign Up</CustomButton>
          <CustomButton onClick={signInWithGoogle} type='button' isGoogleSignIn>
            Sign Up With <span></span>
            <span className='google-logo'>
              G<span className='red'>o</span>
              <span className='yellow'>o</span>g<span className='green'>l</span>
              <span className='red'>e</span>
            </span>
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignUpContainer>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
// });

export default SignUp;
// export default connect(null, mapDispatchToProps)(SignUp);
