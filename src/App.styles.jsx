import styled from 'styled-components';

export const AppWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(212, 223, 216);
  background: linear-gradient(
    58deg,
    var(--color-pink) 2%,
    var(--color-burgundy) 70%,
    var(--color-darkbrown) 100%
  );
`;

export const ScrollWrapper = styled.div`
  overflow-y: scroll;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }
  @supports (-webkit-touch-callout: none) {
    height: calc(var(--vh, 1vh) * 100);
  }

  @supports not (-webkit-touch-callout: none) {
    height: 100vh;
  }

  @media screen and (max-width: 511px) {
    flex-direction: column;
    overflow-x: hidden;
    padding-top: 2rem;

    background: linear-gradient(
      58deg,
      rgba(212, 223, 216, 1) 1%,
      rgba(128, 0, 32, 1) 75%
    );
  }
`;
