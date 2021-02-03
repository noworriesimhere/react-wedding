import styled from 'styled-components';

export const ContentsContainer = styled.div`
  height: 600px;
  margin: auto 2rem;
  display: grid;
  grid-template-columns: 400px 1fr 300px;

  @media screen and (max-width: 511px) {
    height: calc(429vw + 500px);
    width: 88vw;
    margin: 2rem 6vw;
    grid-template-columns: 88vw;
    grid-template-rows: 200px 429vw 400px;
  }
`;

export const TextContainerLeft = styled.div`
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  border-radius: 30px;
  overflow: hidden;
  grid-column: 1 / 2;
  padding: 5rem 3rem;
  color: #800020;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  background-size: cover;
  background-image: url('../../img/our-story-background.jpg');
  background-position: -180px 0px;
  height: 100%;
  box-sizing: border-box;
  margin: 0;

  @media screen and (max-width: 511px) {
    grid-row: 1 / 2;
    background-position: -80px 0px;
    background-size: 150%;
    width: 88vw;
    padding: 3rem 0.5rem;
    p {
      margin: 0;
    }
  }
`;

export const MiddleContainer = styled.div`
  grid-column: 2 / 3;
  @media screen and (max-width: 511px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`;

export const TextContainerRight = styled.div`
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  border-radius: 30px;
  overflow: hidden;
  background: rgb(223, 223, 223);
  background: linear-gradient(
    370deg,
    rgba(202, 202, 202, 0.1) 20%,
    rgba(128, 0, 32, 0.3) 84%
  );
  height: 600px;
  grid-column: 3 / 4;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0;
  box-sizing: border-box;

  h1 {
    margin-top: 2rem;
    line-height: 3.5rem;
  }

  @media screen and (max-width: 511px) {
    grid-row: 3 / 4;
    padding: 0 1rem;
    height: 300px;

    h1 {
      margin: 1.5rem 0;
      line-height: 2.5rem;
    }

    p {
      margin: 0.25rem;
    }
  }
`;
