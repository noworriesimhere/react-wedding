import React from 'react';
import GalleryItem from '../gallery-item/gallery-item.component.jsx';
import { GalleryContainer } from './gallery.styles.jsx';

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryItem boxSize='horizontal' gridArea={'一'} />
      <GalleryItem boxSize='square' gridArea={'二'} />
      <GalleryItem boxSize='square' gridArea={'三'} />
      <GalleryItem boxSize='vertical' gridArea={'四'} />
      <GalleryItem boxSize='square' gridArea={'五'} />
      <GalleryItem boxSize='square' gridArea={'六'} />
      <GalleryItem boxSize='horizontal' gridArea={'七'} />
      <GalleryItem boxSize='square' gridArea={'八'} />
      <GalleryItem boxSize='horizontal' gridArea={'九'} />
      <GalleryItem boxSize='square' gridArea={'十'} />
      <GalleryItem boxSize='vertical' gridArea={'十一'} />
    </GalleryContainer>
  );
};

export default Gallery;
