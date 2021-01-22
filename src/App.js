import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main/main.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { handleResize } from './utils/util-functions';

import { AppWrapper, ScrollWrapper } from './App.styles';
export const appRef = React.createRef();

function App() {
  useEffect(() => {
    handleResize();
    window.addEventListener('orientationchange', () => {
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    });

    const el = appRef.current;
    if (el && window.innerWidth > 780) {
      const onWheel = (event) => {
        const dontScroll = event
          .composedPath()
          .some((e) => e.className === 'container');
        if (!dontScroll) {
          const toLeft = event.deltaY < 0 && el.scrollLeft > 0;
          const toRight =
            event.deltaY > 0 && el.scrollLeft < el.scrollWidth - el.clientWidth;

          if (toLeft || toRight) {
            el.scrollLeft += event.deltaY;
          }
        }
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <AppWrapper>
      <Header />
      <ScrollWrapper ref={appRef}>
        <Router>
          <Route path='/' component={Main} />
        </Router>
      </ScrollWrapper>
      <Footer />
    </AppWrapper>
  );
}

export default App;
