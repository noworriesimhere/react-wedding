import React from 'react';
import { ItemContainer } from './gallery-item.styles';

const GalleryItem = ({ gridArea, boxSize }) => {
  return (
    <>
      <ItemContainer gridArea={gridArea} boxSize={boxSize}></ItemContainer>
    </>
  );
};

export default GalleryItem;
