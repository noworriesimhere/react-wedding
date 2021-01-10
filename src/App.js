import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main/main.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import CurrentUserContext from './contexts/current-user/current-user.context';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const logOut = () => setCurrentUser(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
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
    <Router>
      <CurrentUserContext.Provider value={{ currentUser, logOut }}>
        <Route path='/' component={Main} />
      </CurrentUserContext.Provider>
    </Router>
  );
}

export default App;
