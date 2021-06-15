import styled from 'styled-components';
import { CardContainer } from '../card/card.styles';

export const ContentsContainer = styled(CardContainer)`
  width: 850px;
  margin: auto 2rem auto 10rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  @media screen and (max-width: 511px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 4rem auto 2rem !important;
    height: 500px;
  }
`;

export const ImageContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 511px) {
    img {
      object-position: 0px 0px;
    }
  }
`;

export const TextContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
