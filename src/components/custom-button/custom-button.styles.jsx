import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #800020;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: #800020;
    border: 1px solid #800020;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #357ae8;
  color: white;
  border: none;

  .google-logo {
    margin-left: 3px;
  }

  &:hover {
    background-color: white;
    color: #357ae8;
    border: 1px solid #357ae8;

    .google-logo {
      font-weight: 600;
    }
    .red {
      color: rgb(299, 70, 60);
    }

    .yellow {
      color: rgb(249, 187, 45);
    }

    .green {
      color: rgb(65, 166, 86);
    }
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px 0 25px;
  font-size: 0.8rem;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  font-family: 'Montserrat', sans-serif;
  margin: 0.5rem 0;

  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
