import React, { useContext } from 'react';
import { CurrentUserContext } from '../../providers/user/user.provider';
import { ToggleSwitchContainer } from './radio.styles';

const Radio = ({ option1, option2 }) => {
  const { toggleForm, isLogIn } = useContext(CurrentUserContext);
  return (
    <ToggleSwitchContainer onChange={toggleForm}>
      <input type='radio' name='YesNo' id='Opt1' defaultChecked={isLogIn} />
      <input type='radio' name='YesNo' id='Opt2' defaultChecked={!isLogIn} />
      <label htmlFor='Opt1'>{option1}</label>
      <label htmlFor='Opt2'>{option2}</label>
      <span></span>
    </ToggleSwitchContainer>
  );
};

export default Radio;
