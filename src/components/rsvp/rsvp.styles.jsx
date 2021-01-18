import styled, { css } from 'styled-components';
import { CardContainer } from '../card/card.styles';
import ZoomInfo from '../zoom-info/zoom-info.component';

const invisible = css`
  visibility: hidden;
`;

const isCurrentUser = (props) => {
  if (!props.currentUser) {
    return invisible;
  } else {
    return;
  }
};

export const ContentsContainer = styled(CardContainer)`
  ${isCurrentUser};
  width: 850px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const ImageContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-size: cover;
  background-position: -180px 0px;
  background-image: url('../../img/IMG_6922.jpg');
  z-index: -1;
`;

export const ZoomContainer = styled(ZoomInfo)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

export const TextContainer = styled.div`
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

export const SideContainer = styled(CardContainer)`
  ${isCurrentUser};

  width: 700px;
  margin: auto 10rem auto 2rem;
  padding: 1rem 1rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const LinksContainer = styled.p`
  display: flex;
  justify-content: space-around;
`;
