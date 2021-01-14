import styled from 'styled-components';

export const ContentsContainer = styled.div`
  min-width: 850px;
  max-width: 850px;
  height: 600px;
  margin: auto 4rem auto 10rem;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  border-radius: 40px;
  background-color: whitesmoke;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background: rgb(223, 223, 223);
  background: linear-gradient(
    370deg,
    rgba(202, 202, 202, 0.1) 20%,
    rgba(128, 0, 32, 0.3) 84%
  );
`;

export const ImageContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-size: cover;
  background-position: -180px 0px;
  background-image: url('../../img/IMG_6922.jpg');
  z-index: -1;
`;

export const TextContainer = styled.div`
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .fa-chevron-circle-right {
    margin-top: 20px;
  }

  .fa-chevron-circle-down {
    display: none;
  }
`;
