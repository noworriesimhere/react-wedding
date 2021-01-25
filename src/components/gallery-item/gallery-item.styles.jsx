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
  h2,
  h5 {
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

  h2 {
    text-align: center;
    padding: 4rem 0 0 0;
    margin-bottom: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  h5 {
    margin-top: 0;
    margin-bottom: 4rem;
    text-align: center;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    z-index: 1;
    font-family: 'Montserrat', sans-serif;
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
    margin: 0 auto;
    padding: 1.4rem;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    opacity: 0;
  }

  .container {
    margin: auto;
    overflow: hidden;
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
    font-size: 0.9rem;
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

  .story {
    z-index: 2;
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

      h2,
      h5 {
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
    h2 {
      padding: 1rem 0;
      margin-top: 2rem;
      font-size: 1.4rem;
    }

    h5 {
      margin-bottom: 1.5rem;
    }

    .container {
      height: 41vw;
      width: 41vw;
    }
    p {
      font-size: 0.6rem;
      line-height: 1rem;
    }
    .fa-times-circle {
      transform: translate(300%, -150%);
    }
    .fa-chevron-circle-up {
      transform: translate(300%, -50%);
    }
    .fa-chevron-circle-down {
      transform: translate(300%, 50%);
    }
  }

  @media screen and (min-width: 511px) {
    i {
      font-size: 2rem;
    }
  }
`;
