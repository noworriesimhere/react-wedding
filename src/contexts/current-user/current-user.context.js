import { createContext } from 'react';

const CurrentUserContext = createContext({
  currentUser: null,
  logOut: () => {},
});

export default CurrentUserContext;
