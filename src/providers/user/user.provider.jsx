import React, { createContext, useState } from 'react';

export const CurrentUserContext = createContext({
  currentUser: null,
  logOut: () => {},
});

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const logOut = () => setCurrentUser(null);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, logOut, setCurrentUser }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
