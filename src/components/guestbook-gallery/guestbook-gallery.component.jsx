import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import GuestbookGalleryItem from '../guestbook-gallery-item/guestbook-gallery-item.component';
import { GalleryContainer } from './guestbook-gallery.styles';

const GuestbookGallery = () => {
  const { docs } = useFirestore('posts');
  const columns = Math.ceil(docs.length / 3) + 1;
  return (
    <GalleryContainer columns={columns}>
      {docs &&
        docs.map((doc) => (
          <GuestbookGalleryItem
            key={doc.id}
            urlSrc={doc.url}
            altSrc='uploaded pic'
            chapter={doc.name}
            story={doc.comment}
            date={doc.location}
          />
        ))}
    </GalleryContainer>
  );
};

export default GuestbookGallery;
