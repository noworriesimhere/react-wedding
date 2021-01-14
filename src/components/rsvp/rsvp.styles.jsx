import styled, { css } from 'styled-components';
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

export const ContentsContainer = styled.div`
  ${isCurrentUser};

  min-width: 850px;
  max-width: 850px;
  height: 600px;
  margin: auto 4rem;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  border-radius: 40px;
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

export const SideContainer = styled.div`
  ${isCurrentUser};

  min-width: 700px;
  max-width: 700px;
  height: 600px;
  box-sizing: border-box;
  margin: auto 6rem auto 4rem;
  padding: 1rem 1rem 2rem;
  text-align: center;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  color: white;
  background: rgb(223, 223, 223);
  background: linear-gradient(
    370deg,
    rgba(202, 202, 202, 0.1) 20%,
    rgba(128, 0, 32, 0.3) 84%
  );

  will-change: transform;
`;

export const LinksContainer = styled.p`
  display: flex;
  justify-content: space-around;
`;
