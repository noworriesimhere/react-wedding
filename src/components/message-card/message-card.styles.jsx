import styled from 'styled-components';

export const SlidesContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  grid-column: 2 / 3;
  padding: 1rem 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  i {
    margin-left: 20px;
  }
`;

export const ContentsContainer = styled.div`
  min-width: 900px;
  max-width: 900px;
  height: 600px;
  margin: auto 0 auto 3rem;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  border-radius: 40px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-rows: 1fr;
  background: rgb(223, 223, 223);
  background: linear-gradient(
    370deg,
    rgba(202, 202, 202, 0.1) 20%,
    rgba(128, 0, 32, 0.3) 84%
  );
`;

export const ImageContainerLeft = styled.div`
  grid-column: 1 / 2;
  background-size: cover;
  background-position: -180px 0px;
  background-image: url('../../img/IMG_6922.jpg');
  z-index: -1;
`;

export const ImageContainerRight = styled.div`
  grid-column: 3 / 4;
  background-size: cover;
  background-position: -180px 0px;
  background-image: url('../../img/IMG_6922.jpg');
  z-index: -1;
`;
