import React from 'react';
import Slides from '../slides/slides.component';

const Wrapper = () => {
  return (
    <>
      <div className='outer-wrapper'>
        <div className='wrapper'>
          <Slides />
        </div>
      </div>
    </>
  );
};

export default Wrapper;
