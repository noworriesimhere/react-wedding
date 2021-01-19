import styled from 'styled-components';
import { CardContainer } from '../card/card.styles';

export const ContentsContainer = styled(CardContainer)`
  width: 850px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const ImageContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-size: cover;
  background-position: -150px 0px;
  background-image: url('../../img/IMG_6369.jpg');
  z-index: -1;

  @media screen and (max-width: 780px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    height: 300px;
    background-position: 0px 0px;
  }
`;

export const ZoomContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 780px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    height: 300px;
  }
`;

export const TextContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  @media screen and (max-width: 780px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

export const SideContainer = styled(CardContainer)`
  width: 700px;
  margin: auto 10rem auto 2rem;
  padding: 1rem 1rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 780px) {
    justify-content: center;
    height: 600px;
    margin-bottom: 5rem;
  }
`;

export const LinksContainer = styled.p`
  display: flex;
  justify-content: space-around;
`;
