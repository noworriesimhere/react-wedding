import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  border-radius: 30px;
  overflow: hidden;
  margin: auto 2rem;
  display: grid;
  background: rgb(223, 223, 223);
  background: linear-gradient(
    370deg,
    rgba(202, 202, 202, 0.5) 20%,
    rgba(128, 0, 32, 0.5) 84%
  );
  height: 600px;
  box-sizing: border-box;

  @media screen and (max-width: 780px) {
    width: 88vw !important;
    margin: 1.5rem 6vw !important;
    overflow-x: hidden;
  }
`;
