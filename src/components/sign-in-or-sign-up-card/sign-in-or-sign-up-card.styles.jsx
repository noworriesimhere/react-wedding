import styled from 'styled-components';
import { CardContainer } from '../card/card.styles';

export const ContentsContainer = styled(CardContainer)`
  width: 1000px;
  grid-template-rows: 1fr 3fr;

  @media screen and (max-width: 511px) {
    grid-template-rows: 1fr 6fr;
    height: 33rem;
  }
`;

export const HeaderContainerTop = styled.h1`
  grid-row: 1 / 2;
  margin-top: 2rem;

  span {
    margin: 0 8rem;
  }
`;

export const DoubleFormContainer = styled.div`
  grid-row: 2 / 3;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
