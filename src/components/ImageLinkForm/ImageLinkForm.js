import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures'}
      </p>
      <div className='center'>
        <div className='form center pa4 shadow-5'>
          <input type='text' className='f5 pa2 w-70'/>
          <button className='f5 w-30'>Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;