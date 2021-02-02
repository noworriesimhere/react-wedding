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

  @media screen and (max-width: 511px) {
    display: none;
  }

  @media screen and (max-height: 900px) {
    background-color: var(--color-burgundy-transparent);
    flex-direction: column;
    justify-content: center;
    left: 0;
    top: 0;
    width: 150px;
    height: 100vh;

    .fa-chevron-circle-left,
    .fa-chevron-circle-right {
      font-size: 2.6rem;
      margin: 0;
      padding: 0.5rem;
    }

    .fa-chevron-circle-left {
      order: 1;
      align-self: flex-start;
    }

    .fa-chevron-circle-right {
      order: 2;
      align-self: flex-end;
      transform: translateY(-3.5rem);
    }
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
    font-size: 0.75rem;
    height: 200px;
    width: 110px;
    margin: 0;
    top: 0;
    color: white;
    padding-top: 1rem;
    line-height: 1.25;

    a {
      color: white;
    }
  }
`;
