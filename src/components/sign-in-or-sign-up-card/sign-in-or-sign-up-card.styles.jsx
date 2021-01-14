import styled from 'styled-components';

export const ContentsContainer = styled.div`
  min-width: 1000px;
  max-width: 1000px;
  height: 600px;
  margin: auto 4rem;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  border-radius: 40px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 150px 450px;
  background: rgb(223, 223, 223);
  background: linear-gradient(
    370deg,
    rgba(202, 202, 202, 0.1) 20%,
    rgba(128, 0, 32, 0.3) 84%
  );
`;

export const HeaderContainerTop = styled.h1`
  grid-row: 1 / 2;
  margin-top: 3rem;
  color: white;

  span {
    margin: 0 8rem;
  }
`;

export const DoubleFormContainer = styled.div`
  grid-row: 2 / 3;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
`;

export const FormContainer = styled.div`
  grid-row: 2 / 3;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
