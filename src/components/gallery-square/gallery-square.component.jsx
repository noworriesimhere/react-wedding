import React from 'react';
import { SquareContainer } from './gallery-square.styles';

const GallerySquare = ({ gridArea }) => {
  return (
    <>
      <SquareContainer gridArea={gridArea}></SquareContainer>
    </>
  );
};

export default GallerySquare;
