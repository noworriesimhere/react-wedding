import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FixedFooter = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const MobileLink = styled(Link)`
  font-family: Montserrat, sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  text-align: center;
  @media screen and (min-width: 511px) {
    display: none;
  }
`;
