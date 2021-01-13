import React from 'react';
import { ZoomInfoContainer } from './zoom-info.styles';

const ZoomInfo = () => {
  return (
    <ZoomInfoContainer>
      <h2>Zoom Meeting ID</h2>
      <p>123 4567 1234</p>
      <h2>Password</h2>
      <p>123456</p>
      <p>
        <a>Fake Link</a>
      </p>
    </ZoomInfoContainer>
  );
};

export default ZoomInfo;
