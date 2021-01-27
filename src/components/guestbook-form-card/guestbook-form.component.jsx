import React, { useState } from 'react';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  FormContainer,
  ButtonsBarContainer,
  FileInputContainer,
} from './guestbook-form.styles';
import FloatWrapper from '../float-wrapper/float-wrapper.component';

const GuestbookForm = () => {
  const [postDetails, setPostDetails] = useState({
    location: '',
    url: '',
    comment: '',
  });
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('Upload Pic!');
  const [error, setError] = useState(null);

  const { location, url, comment } = postDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert('submitted!');
    console.log(event);
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const types = ['image/png', 'image/jpeg', 'image/heic'];

  const handlePictureSelect = (event) => {
    let selected = event.target.files[0];
    if (selected) {
      setFile(selected);
      setUploadMessage('Picture selected! - ' + selected.name.substring(0, 18));
      setError(null);
      console.log(selected);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostDetails({ ...postDetails, [name]: value });
  };

  return (
    <FloatWrapper>
      <FormContainer>
        <h2>Leave a Message</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='location'
            value={location}
            handleChange={handleChange}
            label='Your Location'
            required
          />
          <FileInputContainer selected={file}>
            <span>Your Picture</span>
            <p>{uploadMessage}</p>
            <input type='file' onChange={handlePictureSelect} required />
          </FileInputContainer>

          <FormInput
            type='textarea'
            rows='8'
            name='comment'
            value={comment}
            handleChange={handleChange}
            label='Message'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'>Post to Guestbook</CustomButton>
          </ButtonsBarContainer>
        </form>
      </FormContainer>
    </FloatWrapper>
  );
};

export default GuestbookForm;
