import styled from 'styled-components';
import { CardContainer } from '../card/card.styles';

export const ContentsContainer = styled(CardContainer)`
  width: 850px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 511px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 225px 5fr;
    height: 550px !important;
  }
`;


export const ImageContainerUp = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-size: cover;
  background-position: 0px -10px;
  background-image: url('../../img/alanwave.jpeg');

  @media screen and (max-width: 511px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background-position: 0px 0px;
  }
`;

export const ImageContainerDown = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-size: cover;
  background-position: 0px -230px;
  background-image: url('../../img/georgiawave.jpeg');

  @media screen and (max-width: 511px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background-position: 0px -120px;
  }
`;

export const TextContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 511px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    padding: 0 0.5rem;
  }
`;

export const TitleContainer = styled.h2`
  margin-bottom: 0;
  margin-top: 0;
`;
