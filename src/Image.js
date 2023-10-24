import React from 'react';
import image from './comp2.jpg';
import newImage from './new-image.jpg'

function Image() {
  return (
    <div>
      <img src={image} alt="computer" width="300px"/>
      <img src={newImage} alt="computer" width="400px"/>
    </div>
  )
}

export default Image;