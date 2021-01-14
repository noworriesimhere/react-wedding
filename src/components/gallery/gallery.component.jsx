import React from 'react';
import GalleryItem from '../gallery-item/gallery-item.component.jsx';
import { GalleryContainer } from './gallery.styles.jsx';

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryItem
        boxSize='square'
        gridArea={'一'}
        urlSrc='img/story1.jpg'
        altSrc="Alan's 5 year Bethel Party"
      />
      <GalleryItem
        boxSize='horizontal'
        gridArea={'二'}
        urlSrc='img/story2.jpg'
        altSrc='First Date!'
      />
      <GalleryItem
        boxSize='square'
        gridArea={'三'}
        urlSrc='img/story3.jpg'
        altSrc='First Date!'
      />
      <GalleryItem
        boxSize='vertical'
        gridArea={'四'}
        urlSrc='img/story4.jpg'
        altSrc='First Date!'
      />
      <GalleryItem
        boxSize='square'
        gridArea={'五'}
        urlSrc='img/story5.jpg'
        altSrc='First Date!'
      />
      <GalleryItem
        boxSize='square'
        gridArea={'六'}
        urlSrc='img/story6.jpg'
        altSrc='First Date!'
      />
      <GalleryItem
        boxSize='horizontal'
        gridArea={'七'}
        urlSrc='img/story7.jpg'
        altSrc='First Date!'
      />
      <GalleryItem
        boxSize='square'
        gridArea={'八'}
        urlSrc='img/story8.jpg'
        altSrc='First Date!'
      />
      <GalleryItem
        boxSize='horizontal'
        gridArea={'九'}
        urlSrc='img/story9.png'
        altSrc='First Date!'
      />
      <GalleryItem
        boxSize='square'
        gridArea={'十'}
        urlSrc='img/story10.png'
        altSrc='First Date!'
      />
      <GalleryItem boxSize='vertical' gridArea={'十一'} />
    </GalleryContainer>
  );
};

export default Gallery;
