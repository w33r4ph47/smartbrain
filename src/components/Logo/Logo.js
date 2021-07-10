import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }} className='ma4 mt0'>
      <Tilt className='shadow-2'>
        <div style={{ padding: '10px' }}>
          <img alt='logo' src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;