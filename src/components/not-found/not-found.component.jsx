import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundContainer } from './not-found.styles';
const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>Oh no!</h1>
      <p>Seems like this is the wrong page</p>
      <p>
        Maybe you'd wanna to go the <Link to='/'>Home Page</Link> or our{' '}
        <Link to='/guestbook'>Guestbook</Link>?
      </p>
    </NotFoundContainer>
  );
};

export default NotFound;
