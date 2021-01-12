import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main/main.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { CurrentUserContext } from './providers/user/user.provider';
import { FooterContainer, InnerWrapper, OuterWrapper } from './App.styles';
import Header from './components/header/header.component';

function App() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef);
        userRef.onSnapshot((snapShot) => {
          console.log(snapShot);
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          console.log(currentUser);
        });
      }
      return function cleanup() {
        unsubscribeFromAuth();
      };
    });
  }, []);

  return (
    <>
      <Header />
      <OuterWrapper>
        <InnerWrapper>
          <Router>
            <Route path='/' component={Main} />
          </Router>
        </InnerWrapper>
      </OuterWrapper>
      <FooterContainer>
        Designed and Developed by Alan Tran 2021 &copy;{' '}
        <a href='https://alantran.netlify.app' target='blank'>
          Learn More.
        </a>
      </FooterContainer>
    </>
  );
}

export default App;
