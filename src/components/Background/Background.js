import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <div className='background position-relative'>
        <div className='background-overlay position-absolute top-0 start-0 bottom-0 end-0'></div>
    </div>
  )
}
export default Background;
