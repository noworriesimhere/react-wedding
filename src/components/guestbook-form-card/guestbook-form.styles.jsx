import styled from 'styled-components';
import { CardContainer } from '../card/card.styles';

const getSelectedHover = (props) => {
  if (props.selected !== 'Upload Pic!') {
    return '-24px';
  } else {
    return '10px';
  }
};

const getOpacity = (props) => {
  if (props.selected !== 'Upload Pic!') {
    return '1';
  } else {
    return '0';
  }
};

export const FormContainer = styled(CardContainer)`
  width: 400px;
  padding: 2rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 2rem;
  text-align: center;

  h2 {
    margin: 0.1rem 0;
  }

  div {
    width: 100%;
  }

  @media screen and (max-width: 511px) {
    width: 80vw;
  }
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FileInputContainer = styled.div`
  width: 100%;
  height: 40px;
  border: 2px solid white;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  padding-bottom: 1rem;

  span {
    position: absolute;
    top: ${getSelectedHover};
    left: 5px;
    transition: 300ms ease all;
  }

  p {
    position: absolute;
    top: -15px;
    left: 5px;
    opacity: ${getOpacity};
    transition: all 0.5s ease-in-out;
    z-index: 0;
    font-size: 1rem;
    @media screen and (max-width: 511px) {
      font-size: 0.7rem;
      top: -5px;
    }
  }

  input {
    width: 100%;
    padding: 0.5rem 0;
    height: 100%;
    cursor: pointer;
    opacity: 0;

    ::-webkit-file-upload-button {
      cursor: pointer;
    }
  }
  :hover {
    p {
      opacity: 1;
    }
    span {
      top: -24px;
    }
  }
`;
