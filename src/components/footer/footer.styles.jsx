import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  margin-top: calc((50vh - 362.4px) / 2);
  margin-bottom: calc((50vh - 362.4px) / 2);
  display: flex;
  justify-content: center;
`;

export const FixedFooter = styled.p`
  color: #800020;
  font-size: 1rem;
  position: fixed;
  bottom: 0px;
  left: 20px;
`;
