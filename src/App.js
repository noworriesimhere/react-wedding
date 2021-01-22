import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main/main.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { handleResize } from './utils/util-functions';

import { AppWrapper, ScrollWrapper } from './App.styles';
export const appRef = React.createRef();
export const scrollRef = React.createRef();

function App() {
  useEffect(() => {
    handleResize();
    window.addEventListener('orientationchange', () => {
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    });

    const el = appRef.current;
    const scroll = scrollRef.current;
    if (el && navigator.maxTouchPoints === 0) {
      const onWheel = (event) => {
        console.log(event);
        const dontScroll = event
          .composedPath()
          .some((e) => e.className === 'container');
        if (!dontScroll) {
          const toLeft = event.deltaY < 0 && scroll.scrollLeft > 0;
          const toRight =
            event.deltaY > 0 &&
            scroll.scrollLeft < scroll.scrollWidth - scroll.clientWidth;

          if (toLeft || toRight) {
            scroll.scrollLeft += event.deltaY;
          }
        }
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <AppWrapper ref={appRef}>
      <Header />
      <ScrollWrapper ref={scrollRef}>
        <Router>
          <Route path='/' component={Main} />
        </Router>
      </ScrollWrapper>
      <Footer />
    </AppWrapper>
  );
}

export default App;
