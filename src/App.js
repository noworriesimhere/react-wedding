import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main/main.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { InnerWrapper, OuterWrapper } from './App.styles';

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
      <Footer />
    </>
  );
}

export default App;
