import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main/main.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { AppWrapper, InnerWrapper, OuterWrapper } from './App.styles';

function App() {
  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    handleResize();
    window.addEventListener('orientationchange', () => {
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    });
  }, []);
  return (
    <AppWrapper>
      <Header />
      <OuterWrapper>
        <InnerWrapper>
          <Router>
            <Route path='/' component={Main} />
          </Router>
        </InnerWrapper>
      </OuterWrapper>
      <Footer />
    </AppWrapper>
  );
}

export default App;
