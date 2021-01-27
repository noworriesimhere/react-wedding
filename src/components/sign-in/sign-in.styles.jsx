import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (max-width: 511px) {
    width: 80vw;
  }
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
