import styled from 'styled-components';

export const TextContainerLeft = styled.div`
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
  z-index: 3;
  border-radius: 30px;
  overflow: hidden;
  height: 600px;
  box-sizing: border-box;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
`;
export const TextContainerRight = styled.div`
  grid-column: 3 / 4;
  padding: 1rem 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  border-radius: 30px;
  height: 600px;
  box-sizing: border-box;

  h1 {
    margin-top: 2rem;
    line-height: 3.5rem;
  }
`;

export const ContentsContainer = styled.div`
  height: 600px;
  margin: auto 2rem;

  display: grid;
  grid-template-columns: 400px 1fr 450px;
`;

export const MiddleContainer = styled.div`
  grid-column: 2 / 3;
`;
