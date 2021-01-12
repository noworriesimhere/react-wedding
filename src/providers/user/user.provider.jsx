import React, { createContext, useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export const CurrentUserContext = createContext({
  currentUser: null,
  isRsvpd: false,
  logOut: () => {},
  rsvp: () => {},
});

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isRsvpd, setIsRsvpd] = useState(false);
  const logOut = () => setCurrentUser(null);
  const rsvp = () => setIsRsvpd(!isRsvpd);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          const userCreds = snapShot.data();
          setCurrentUser({
            id: snapShot.id,
            ...userCreds,
          });
        });
        console.log(isRsvpd);
        await userRef.update({
          isRsvpd,
        });
      }
      return function cleanup() {
        unsubscribeFromAuth();
      };
    });
  }, [isRsvpd]);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, logOut, setCurrentUser, rsvp, isRsvpd }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
