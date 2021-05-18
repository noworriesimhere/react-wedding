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
  h2,
  h5 {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
  i {
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
  background-color: var(--color-burgundy);
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
    transition: all 0.5s ease-in-out;
  }

  h2,
  h5 {
    text-align: center;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    transform: scale(0);
    transition: transform 400ms 100ms cubic-bezier(0.175, 0.885, 0.32, 1.4);
  }

  h2 {
    padding: 4rem 0 0 0;
    margin-bottom: 0;
  }

  h5 {
    margin-top: 0;
    margin-bottom: 6rem;

    z-index: 1;
    font-family: 'Montserrat', sans-serif;
  }

  .story {
    margin: 0 auto;
    padding: 0 0.75rem;
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
    font-size: 0.8rem;
    line-height: 1.4rem;
  }

  .fa-times-circle {
    transform: translate(400%, -150%);
  }
  .fa-chevron-circle-up {
    transform: translate(400%, -50%);
  }
  .fa-chevron-circle-down {
    transform: translate(400%, 50%);
  }

  @media (pointer: fine) {
    :hover {
      .story {
        opacity: 1;
      }
      .container {
        opacity: 1;
      }

      img {
        opacity: 0.2;
        filter: grayscale(100%);
      }

      h2,
      h5 {
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
    .chapter-text {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    h2 {
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
    }

    h5 {
      margin-bottom: 0;
    }

    .container {
      height: 41vw;
      width: 41vw;
    }
    p {
      font-size: 0.5rem;
      line-height: 0.9rem;
    }
    .fa-times-circle {
      transform: translate(18vw, -150%);
    }
    .fa-chevron-circle-up {
      transform: translate(18vw, -50%);
    }
    .fa-chevron-circle-down {
      transform: translate(18vw, 50%);
    }
  }

  @media screen and (min-width: 511px) {
    i {
      font-size: 2rem;
    }
  }
`;
