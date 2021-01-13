import styled from 'styled-components';

export const OuterWrapper = styled.div`
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background: rgb(223, 223, 223);
  background: linear-gradient(
    129deg,
    rgb(202, 202, 202) 20%,
    rgba(128, 0, 32, 1) 85%
  );

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
  height: 100vh;
`;
