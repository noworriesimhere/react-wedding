import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebase.utils';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapShot) => {
        let documents = [];
        snapShot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export default useFirestore;
