import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
  text-decoration: none;
`;

export const MainPageLink = styled(Link)`
  font-family: Montserrat, sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
`;

export const MobileLinkBackground = styled.div`
  position: fixed;
  background-color: var(--color-burgundy-transparent);
  width: 100%;
  top: 0;
  padding: 0.75rem;
  z-index: 10;

  div {
    margin: 0 3rem;
  }

  @media screen and (min-width: 511px) {
    display: none;
  }
`;

export const MobileLink = styled(Link)`
  font-family: Montserrat, sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  width: 50%;
  text-align: center;
`;
