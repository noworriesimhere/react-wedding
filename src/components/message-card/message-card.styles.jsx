import styled from 'styled-components';
import { CardContainer } from '../card/card.styles';

export const ContentsContainer = styled(CardContainer)`
  width: 1000px;
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 5fr;
  }
`;

export const ImageContainerLeft = styled.div`
  grid-column: 1 / 2;
  background-size: cover;
  background-position: -60px 0px;
  background-image: url('../../img/alanwave.jpeg');

  @media screen and (max-width: 780px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background-position: 0px -30px;
  }
`;

export const ImageContainerRight = styled.div`
  grid-column: 3 / 4;
  background-size: cover;
  background-position: -50px 0px;
  background-image: url('../../img/georgiawave.jpeg');

  @media screen and (max-width: 780px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background-position: 0px -30px;
  }
`;

export const TextContainer = styled.div`
  grid-column: 2 / 3;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 780px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    padding: 0 0.5rem;
  }
`;

export const TitleContainer = styled.h2`
  margin-bottom: 0;
  margin-top: 0;
`;
