import React, { useContext } from 'react';
import { CurrentUserContext } from '../../providers/user/user.provider';
import { CheckboxLabel, InputCheck } from './checkbox.styles';
import { firestore } from '../../firebase/firebase.utils';

const Checkbox = ({ children }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const toggleRsvp = () =>
    firestore.doc(`users/${currentUser.id}`).update({
      isRsvpd: !currentUser.isRsvpd,
    });

  return (
    <>
      <CheckboxLabel>
        <div type='checkbox' name='check' onClick={toggleRsvp}>
          <InputCheck
            isRsvpd={currentUser ? currentUser.isRsvpd : false}
          ></InputCheck>
          <p style={{ display: 'inline-block' }}>{children}</p>
        </div>
      </CheckboxLabel>
    </>
  );
};

export default Checkbox;
