import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const getHoverState = ({ ishovered }) => {
  if (ishovered === 'true') {
    return hoveredState;
  }
};

const hoveredState = css`
  cursor: initial;
  img {
    opacity: 0.2;
    filter: grayscale(100%);
  }
  .container {
    opacity: 1 !important;
    overflow: scroll !important;
  }
  h5,
  h6 {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
  i {
    opacity: 1 !important;
  }

  .fa-chevron-circle-down,
  .fa-chevron-circle-up,
  .fa-times-circle,
  .fa-trash-alt {
    display: block;
    opacity: 1;
  }
`;

export const FloatStyled = styled(animated.div)`
  background-color: var(--color-burgundy);
  height: 100%;
  width: 100%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);
  cursor: pointer;
  ${getHoverState}

  img {
    position: fixed;
    top: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    z-index: -2;
    transition: all 0.5s ease-in-out;
  }

  .chapter-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

  h5,
  h6 {
    text-align: center;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    transform: scale(0);
    transition: transform 400ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.4);
  }

  h5 {
    margin: 0;
    font-size: 1.75rem;
  }

  h6 {
    margin: 0;
    z-index: 1;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
  }

  .story {
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }

  .container {
    margin: auto;
    overflow: hidden;
    border-radius: 30px;
    max-height: 285px;
    max-width: 285px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  i {
    opacity: 0;
    z-index: 1;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    display: none;
  }

  p {
    font-size: 0.6rem;
    line-height: 1rem;
  }

  .fa-times-circle {
    transform: translate(350%, -150%);
  }
  .fa-chevron-circle-up {
    transform: translate(350%, -50%);
  }
  .fa-chevron-circle-down {
    transform: translate(350%, 50%);
  }

  .fa-trash-alt {
    transform: translate(400%, 200%);
  }

  @media (pointer: fine) {
    :hover {
      img {
        opacity: 0.2;
        filter: grayscale(100%);
      }
      .container {
        opacity: 1;
      }

      h5,
      h6 {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  @media (pointer: coarse) {
    i {
      font-size: 1.5rem;
    }

    .container {
      opacity: 1;
    }
  }

  @media screen and (max-width: 511px) {
    border-radius: 20px;

    h5 {
  
      font-size: .85rem;
    }

    h6 {
  
      font-size: 0.35rem;
    }
    .story {
      padding: 0 0.25rem;
    }
    
    .container {
      height: 28vw;
      width: 28vw;
      border-radius: 20px;
    }

    img {
      border-radius: 20px;
    }

    p {
      font-size: 6px;
      line-height: 0.75rem;
    }

    i {
      font-size: 1rem;
    }
    .fa-times-circle {
      transform: translate(280%, -150%);
    }
    .fa-chevron-circle-up {
      transform: translate(280%, -50%);
    }
    .fa-chevron-circle-down {
      transform: translate(280%, 50%);
    }
    .fa-trash-alt {
      transform: translate(325%, 180%);
    }
  }

  @media screen and (min-width: 511px) {
    i {
      font-size: 1.5rem;
    }
  }
`;
