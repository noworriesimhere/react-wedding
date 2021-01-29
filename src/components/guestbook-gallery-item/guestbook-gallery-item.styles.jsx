import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const getHoverState = ({ ishovered }) => {
  if (ishovered === 'true') {
    return hoveredState;
  }
};

const hoveredState = css`
  cursor: initial;
  .story-overlay {
    opacity: 1 !important;
  }
  .container {
    opacity: 1 !important;
    overflow: scroll !important;
  }
  h5,
  h6 {
    opacity: 1 !important;
  }
  i {
    opacity: 1 !important;
  }
  .story {
    opacity: 1 !important;
  }
  .fa-chevron-circle-down,
  .fa-chevron-circle-up,
  .fa-times-circle {
    display: block;
    opacity: 1;
  }
`;

export const FloatStyled = styled(animated.div)`
  position: relative;
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
  }

  h5 {
    text-align: center;
    padding-top: 1rem;
    margin-bottom: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out;
    font-size: 2rem;
  }

  h6 {
    margin-top: 0;
    margin-bottom: 3rem;
    text-align: center;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    z-index: 1;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
  }

  .story-overlay {
    background-color: var(--color-burgundy-transparent);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    border-radius: 30px;
    z-index: -1;
    margin: auto;
  }

  .story {
    max-width: 285px;
    max-height: 285px;
    margin: 0 auto;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    opacity: 0;
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

  @media (pointer: fine) {
    :hover {
      .story-overlay {
        opacity: 1;
      }
      .story {
        opacity: 1;
      }
      .container {
        opacity: 1;
      }

      h5,
      h6 {
        opacity: 1;
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
    h5 {
      margin-top: 1.5rem;
      font-size: 1rem;
    }

    h6 {
      margin-bottom: 2.5rem;
      font-size: 0.4rem;
    }
    .story {
      padding: 0 0.5rem;
    }
    .container {
      height: 28vw;
      width: 28vw;
    }
    p {
      font-size: 7px;
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
  }

  @media screen and (min-width: 511px) {
    i {
      font-size: 1.5rem;
    }
  }
`;
