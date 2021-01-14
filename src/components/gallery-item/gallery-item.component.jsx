import React from 'react';
import { ItemContainer } from './gallery-item.styles';

const GalleryItem = ({ gridArea, boxSize, urlSrc, altSrc }) => {
  return (
    <>
      <ItemContainer gridArea={gridArea} boxSize={boxSize}>
        <img src={urlSrc} alt={altSrc}></img>
      </ItemContainer>
    </>
  );
};

export default GalleryItem;
