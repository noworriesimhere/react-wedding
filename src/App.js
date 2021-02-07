import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { isMobile } from 'react-device-detect';
import { handleResize } from './utils/util-functions';

import { AppWrapper, ScrollWrapper } from './App.styles';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import NotFound from './components/not-found/not-found.component';

export const appRef = React.createRef();
export const scrollRef = React.createRef();

const Main = lazy(() => import('./pages/main/main.component'));
const Guestbook = lazy(() => import('./pages/guestbook/guestbook.component'));

function App() {
  useEffect(() => {
    handleResize();
    window.addEventListener('orientationchange', () => {
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    });

    const el = appRef.current;
    const scroll = scrollRef.current;
    if (el && !isMobile) {
      const onWheel = (event) => {
        const dontScroll = event
          .composedPath()
          .some((e) => e.className === 'container scrolled');
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
      <ScrollWrapper ref={scrollRef}>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route path='/' component={Main} exact />
              <Route path='/guestbook' component={Guestbook} exact />
              <Route component={NotFound} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </ScrollWrapper>
    </AppWrapper>
  );
}

export default App;
