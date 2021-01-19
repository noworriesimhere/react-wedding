import styled, { css } from 'styled-components';

const subColor = 'white';
const mainColor = '#802002';

const shrinkLabelStyles = css`
  top: -18px;
  font-size: 1rem;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 35px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  color: ${subColor};
  font-size: 1rem;
  padding: 7px 7px 7px 3px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid ${subColor};
  margin: 15px 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: $sub-color;
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
