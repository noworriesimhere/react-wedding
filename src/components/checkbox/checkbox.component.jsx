import React, { useContext } from 'react';
import { CurrentUserContext } from '../../providers/user/user.provider';
import { CheckboxLabel, InputCheck } from './checkbox.styles';

const Checkbox = ({ children }) => {
  const { rsvp, isRsvpd } = useContext(CurrentUserContext);
  return (
    <>
      <CheckboxLabel>
        <div type='checkbox' name='check' onClick={rsvp}>
          <InputCheck isRsvpd={isRsvpd}></InputCheck>
          <p style={{ display: 'inline-block' }}>{children}</p>
        </div>
      </CheckboxLabel>
    </>
  );
};

export default Checkbox;
