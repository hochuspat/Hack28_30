import React from 'react';

const ImageComponent = () => {
  return (
    <div style={{ width: '100%', height: '100%', marginTop: '56px'  }}>
      <img
        src="/2.svg" 
        alt="Image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default ImageComponent;
