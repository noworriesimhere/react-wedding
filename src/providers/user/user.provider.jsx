import React, { createContext, useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export const CurrentUserContext = createContext({
  currentUser: {
    createdAt: undefined,
    displayName: undefined,
    email: undefined,
    isRsvpd: false,
  },
  logOut: () => {},
  isLogIn: false,
});

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogIn, setIsLogIn] = useState(false);
  const logOut = () => setCurrentUser(null);
  const toggleForm = () => setIsLogIn(!isLogIn);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(async (snapShot) => {
          // await userRef.update({
          //   isRsvpd: currentUser.isRsvpd,
          // });
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      return function cleanup() {
        unsubscribeFromAuth();
      };
    });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, logOut, setCurrentUser, isLogIn, toggleForm }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
