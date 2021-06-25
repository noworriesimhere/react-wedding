import React, { useContext, useState } from 'react';
import {
  storage,
  firestore,
  timestamp,
  auth,
} from '../../firebase/firebase.utils';
import { CurrentUserContext } from '../../providers/user/user.provider';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  FormContainer,
  ButtonsBarContainer,
  FileInputContainer,
} from './guestbook-form.styles';
import FloatWrapper from '../float-wrapper/float-wrapper.component';

let handPointer;
if (window.innerWidth < 511) {
  handPointer = <i className='far fa-hand-point-down fa-3x' />;
} else {
  handPointer = <i className='far fa-hand-point-right fa-3x' />;
}

export const guestFormRef = React.createRef();

const GuestbookForm = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [postDetails, setPostDetails] = useState({
    location: '',
    comment: '',
  });
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('Upload Pic!');
  const [isPosted, setIsPosted] = useState(false);

  const { location, comment } = postDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const storageRef = storage.ref(file.name);
    const collectionRef = firestore.collection('posts');
    storageRef
      .put(file)
      .then(async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        const uid = auth.currentUser.uid;
        const name = currentUser.displayName;
        collectionRef.add({ url, createdAt, location, comment, name, uid });
        console.log(uid)
      })
    setFile(null);
    setUploadMessage('Upload Pic!');
    setPostDetails({ location: '', comment: '' });
    setIsPosted(true);
  };

  const handlePictureSelect = (event) => {
    let selected = event.target.files[0];
    if (selected && selected.type.includes('image/')) {
      setFile(selected);
      setUploadMessage('Picture selected! - ' + selected.name.substring(0, 18));

      console.log(selected);
    } else {
      setFile(null);

      setUploadMessage(`Whoops! That's not a picture`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostDetails({ ...postDetails, [name]: value });
  };

  if (currentUser && !isPosted) {
    return (
      <FloatWrapper>
        <FormContainer ref={guestFormRef}>
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
            <FileInputContainer selected={uploadMessage}>
              <span>Your Picture</span>
              <p>{uploadMessage}</p>
              <input
                type='file'
                onChange={handlePictureSelect}
                accept='image/*'
                required
              />
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
  } else if (isPosted) {
    return (
      <FloatWrapper>
        <FormContainer>
          <h1>Thank You</h1>
          <p>You've sucessfully signed our Guest Book.</p>
          {handPointer}
          <p>See all the messages!</p>
          <CustomButton onClick={() => setIsPosted(false)}>
            I wanna leave another message!
          </CustomButton>
        </FormContainer>
      </FloatWrapper>
    );
  } else {
    return <></>
  }
};

export default GuestbookForm;
