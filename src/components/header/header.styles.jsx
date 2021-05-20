import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

const getBurgerState = ({ click }) => {
  if (click === true) {
    return openBurger;
  } else {
    return closedBurger;
  }
};

const closedBurger = css`
  transform: translateY(-500px);
  visibility: hidden;
`

const openBurger = css`
  transform: translateY(0px);
  visibility: visible;
`
export const HeaderContainer = styled.header`
  font-family:'Sacramento',cursive;
  text-align: center;
  background-color: var(--color-burgundy);
  padding: .75rem 0;
  font-size: 2rem;
  z-index:10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`
export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  margin-top: calc((50vh - 362.4px) / 2);
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-height: 800px) {
    /* display: none; */
  }

  @media screen and (max-width: 511px) {
    margin-top: 0;
    position: absolute;
    top: 70px;
    left: 0;
    z-index: 1;
    width: 100vw;
    transition: all .25s ease;
    ${getBurgerState}
  }
`;

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 511px) {
    flex-direction: column;
    padding: 1rem 2.5rem;
    background-color: var(--color-burgundy);
    margin-top: 0;




    div {
      padding: 1rem;
      margin: .1rem 0;
      text-align: center;
    }
  }
`;

export const ListItem = styled.div`
  transition: all 1s ease-in-out;
`;

export const MobileLink = styled(Link)`

  text-decoration: none;
  color: white;
  text-align: center;
  @media screen and (min-width: 511px) {
    display: none;
  }
`;