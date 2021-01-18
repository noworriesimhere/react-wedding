import styled from 'styled-components';
import { CardContainer } from '../card/card.styles';

export const ContentsContainer = styled(CardContainer)`
  width: 850px;
  margin: auto 2rem auto 10rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const ImageContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  background-size: cover;
  background-position: -180px 0px;
  background-image: url('../../img/IMG_6922.jpg');
  z-index: -1;

  @media screen and (max-width: 650px) {
    background-position: -40px 0px;
  }
`;

export const TextContainer = styled.div`
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 650px) {
    h1 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1rem;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
`;
