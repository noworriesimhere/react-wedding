import React from 'react';

import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
  TextAreaContainer,
} from './form-input.styles';

const FormInput = ({ handleChange, type, label, ...otherProps }) => {
  if (type === 'textarea') {
    return (
      <GroupContainer>
        <TextAreaContainer
          onChange={handleChange}
          type={type}
          {...otherProps}
        />
        {label ? (
          <FormInputLabel
            className={`${otherProps.value.length ? 'shrink' : ''}`}
          >
            {label}
          </FormInputLabel>
        ) : null}
      </GroupContainer>
    );
  } else if (type === 'file') {
    return (
      <GroupContainer>
        {label ? (
          <FormInputLabel
            className={`${otherProps.value.length ? 'shrink' : ''}`}
          >
            <FormInputContainer
              onChange={handleChange}
              type={type}
              {...otherProps}
            />
            <span>{label}</span>
          </FormInputLabel>
        ) : null}
      </GroupContainer>
    );
  } else {
    return (
      <GroupContainer>
        <FormInputContainer
          onChange={handleChange}
          type={type}
          {...otherProps}
        />
        {label ? (
          <FormInputLabel
            className={`${otherProps.value.length ? 'shrink' : ''}`}
          >
            {label}
          </FormInputLabel>
        ) : null}
      </GroupContainer>
    );
  }
};

export default FormInput;
