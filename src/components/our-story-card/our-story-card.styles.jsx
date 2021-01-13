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
`;
export const TextContainerRight = styled.div`
  grid-column: 3 / 4;
  padding: 1rem 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1 {
    margin-top: 2rem;
    line-height: 3.5rem;
  }
`;

export const ContentsContainer = styled.div`
  min-width: 3250px;
  max-width: 3250px;
  height: 600px;
  margin: auto 0 auto 3rem;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  border-radius: 40px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 400px 2400px 450px;
  background: rgb(223, 223, 223);
  background: linear-gradient(
    370deg,
    rgba(202, 202, 202, 0.1) 20%,
    rgba(128, 0, 32, 0.3) 84%
  );
`;

export const ImagesContainer = styled.div`
  grid-column: 2 / 3;
  background-size: cover;
  background-image: url('../../img/IMG_6922.jpg');
  z-index: -1;
`;
