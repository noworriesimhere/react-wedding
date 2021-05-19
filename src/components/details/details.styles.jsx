import styled from 'styled-components';
import { CardContainer } from '../card/card.styles';

export const ContentsContainer = styled(CardContainer)`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  p {
    text-align: center;
  }

  @media screen and (max-width: 511px) {

    margin: 4rem auto 2rem !important;
    height: 500px;
  }
`;


export const LinksContainer = styled.p`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;