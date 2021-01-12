import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main/main.component';
import { FooterContainer, InnerWrapper, OuterWrapper } from './App.styles';
import Header from './components/header/header.component';

function App() {
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
