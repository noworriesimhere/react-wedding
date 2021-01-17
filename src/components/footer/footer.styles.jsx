import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  margin-bottom: calc((50vh - 370px) / 2);
  display: flex;
  justify-content: space-between;
  color: white;

  .fas {
    margin: 0 2rem;
  }
`;

export const FixedFooter = styled.p`
  color: #800020;
  font-size: 1rem;
  position: fixed;
  bottom: 0px;
  left: 20px;
  transition: all 1s ease;

  @media screen and (max-height: 900px) {
    font-size: 0.85rem;
    bottom: -15px;
    left: 5px;
    a {
      font-size: 1rem;
    }
  }
`;
