import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  margin-bottom: calc((50vh - 370px) / 2);
  display: flex;
  justify-content: space-between;

  i {
    :hover {
      cursor: pointer;
    }
  }

  .fa-chevron-circle-left {
    margin-left: 10vw;
  }
  .fa-chevron-circle-right {
    margin-right: 10vw;
  }

  @media screen and (max-width: 780px) {
    display: none;
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
    text-align: center;
    width: 100vw;
  }
`;
