import React, { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import GuestbookGalleryItem from '../guestbook-gallery-item/guestbook-gallery-item.component';
import { GalleryContainer } from './guestbook-gallery.styles';

const GuestbookGallery = () => {
  const [activeChild, setActiveChild] = useState(undefined);

  const { docs } = useFirestore('posts');
  const columns = Math.ceil(docs.length / 3) + 2;
  return (
    <GalleryContainer columns={columns}>
      {docs &&
        docs.map((doc) => (
          <GuestbookGalleryItem
            setActiveChild={setActiveChild}
            activeChild={activeChild}
            key={doc.id}
            urlSrc={doc.url}
            altSrc='uploaded pic'
            chapter={doc.name}
            story={doc.comment}
            date={doc.location}
            uid={doc.uid}
            id={doc.id}
          />
        ))}
    </GalleryContainer>
  );
};

export default GuestbookGallery;
