import styled from 'styled-components';
import { CardContainer } from '../card/card.styles';

export const ContentsContainer = styled(CardContainer)`
  width: 1000px;
  grid-template-rows: 150px 450px;
`;

export const HeaderContainerTop = styled.h1`
  grid-row: 1 / 2;
  margin-top: 3rem;
  color: white;

  span {
    margin: 0 8rem;
  }
`;

export const DoubleFormContainer = styled.div`
  grid-row: 2 / 3;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
`;

export const FormContainer = styled.div`
  grid-row: 2 / 3;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
