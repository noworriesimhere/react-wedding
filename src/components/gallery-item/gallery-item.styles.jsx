import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const getGridArea = (props) => {
  if (props.gridarea) {
    return props.gridarea;
  }
};

const getHoverState = ({ ishovered }) => {
  if (ishovered === 'true') {
    return hoveredState;
  }
};

const hoveredState = css`
  .story-overlay {
    opacity: 1 !important;
  }
  h5 {
    opacity: 1 !important;
  }
  i {
    opacity: 1 !important;
  }
  .story {
    opacity: 1;
  }
  .fa-comment-dots {
    display: block;
  }
`;

export const FloatStyled = styled(animated.div)`
  grid-area: ${getGridArea};
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: -17px 26px 50px 10px rgba(0, 0, 0, 0.45);

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
    padding-top: 6rem;
    margin-top: 0;
    text-align: center;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    z-index: 1;
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
  }

  .story {
    max-width: 285px;
    margin: 0 auto;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    opacity: 0;
  }

  .container {
    overflow: scroll;
    max-height: 285px;
    max-width: 285px;
    margin: 0 auto;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  i {
    opacity: 0;
    z-index: 1;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  p {
    font-size: 0.9rem;
  }

  .fa-comment-dots {
    width: 100%;
    top: 60%;
    text-align: center;
    padding-bottom: 40px;
    display: none;
  }

  .fa-times {
    display: none;
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

      h5 {
        opacity: 1;
      }
      .fa-comment-dots {
        display: block;
        opacity: 1;
      }
    }
  }

  @media (pointer: coarse) {
    .fa-times {
      display: inline;
      position: absolute;
    }
    .container {
      opacity: 1;
    }
    ${getHoverState}
  }

  @media screen and (max-width: 780px) {
    h5 {
      padding-top: 3rem;
    }
    .container {
      height: 41vw;
      width: 41vw;
    }
    p {
      font-size: 0.6rem;
    }
  }

  @media screen and (min-width: 780px) {
    i {
      font-size: 3rem;
    }
  }
`;
