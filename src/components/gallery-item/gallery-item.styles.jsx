import styled, { css } from 'styled-components';

const square = css`
  width: 300px;
  height: 300px;
  // border: 5px solid blue;
`;

const vertical = css`
  width: 300px;
  height: 600px;
  // border: 5px solid green;
`;

const horizontal = css`
  width: 600px;
  height: 300px;
  // border: 5px solid purple;
`;

const getGalleryItemType = (props) => {
  switch (props.boxSize) {
    case 'vertical':
      return vertical;
    case 'horizontal':
      return horizontal;
    case 'square':
      return square;
    default:
      return;
  }
};

export const ItemContainer = styled.div`
  box-sizing: border-box;
  grid-area: ${(props) => props.gridArea};
  ${getGalleryItemType}

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
