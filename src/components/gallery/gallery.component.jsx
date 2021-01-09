import React from 'react';
import GalleryRectangleVertical from '../gallery-rectangle-vertical/gallery-rectangle-vertical.component.jsx';
import GallerySquare from '../gallery-square/gallery-square.component.jsx';
import GalleryRectangleHorizontal from '../galley-rectangle-horizontal/gallery-rectangle-horizontal.component.jsx';
import { GalleryContainer } from './gallery.styles.jsx';

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryRectangleHorizontal gridArea={'一'} />
      <GallerySquare gridArea={'二'} />
      <GallerySquare gridArea={'三'} />
      <GalleryRectangleVertical gridArea={'四'} />
      <GallerySquare gridArea={'五'} />
      <GallerySquare gridArea={'六'} />
      <GalleryRectangleHorizontal gridArea={'七'} />
      <GallerySquare gridArea={'八'} />
      <GalleryRectangleHorizontal gridArea={'九'} />
      <GallerySquare gridArea={'十'} />
      <GalleryRectangleVertical gridArea={'十一'} />
    </GalleryContainer>
  );
};

export default Gallery;
