import React from 'react';
import GalleryItem from '../gallery-item/gallery-item.component.jsx';
import { GalleryContainer } from './gallery.styles.jsx';

const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryItem
        gridArea={'一'}
        urlSrc='img/5yearparty.jpg'
        altSrc="Alan's 5 year Bethel Party"
      />
      <GalleryItem
        gridArea={'二'}
        urlSrc='img/firstdate.jpg'
        altSrc='First Date!'
        scaleAmount={1.3}
      />
      <GalleryItem
        gridArea={'三'}
        urlSrc='img/familyday2019.jpg'
        altSrc='Family Day 2019'
      />
      <GalleryItem
        gridArea={'四'}
        urlSrc='img/bibletourday.jpg'
        altSrc='Day in the city with the Met Bible Tour'
        scaleAmount={1.4}
      />
      <GalleryItem
        gridArea={'五'}
        urlSrc='img/queensday.jpg'
        altSrc='Georgia accompanying Alan for a public talk in Queens'
      />
      <GalleryItem
        gridArea={'六'}
        urlSrc='img/momaday.jpg'
        altSrc='Another city day at the MoMA, before Alan went to Argentina International'
      />
      <GalleryItem
        gridArea={'七'}
        urlSrc='img/outsidekh.jpg'
        altSrc='Georgia at Alans meeting ... with crutches!!'
        scaleAmount={1.4}
      />
      <GalleryItem
        gridArea={'八'}
        urlSrc='img/lastday.png'
        altSrc='The day of lockdown... Last time hanging out at the Saenz'
      />
      <GalleryItem
        gridArea={'九'}
        urlSrc='img/zoomconvention.png'
        altSrc='Watching 2020 regional convention together'
      />
      <GalleryItem
        gridArea={'十'}
        urlSrc='img/zoomshenanigans.png'
        altSrc='Dressing up'
        scaleAmount={1.4}
      />
      <GalleryItem gridArea={'十一'} scaleAmount={1.25} />
    </GalleryContainer>
  );
};

export default Gallery;
