import React from 'react';
import './Collage.css';

const Collage = ({ ready }) => {
  return <div className="collage__sheet">
    <div className={`polaroid ${ready ? 'polaroid--animate' : ''}`}>
      <img
        src="/images/DSC00037.JPG"
        alt="first"
      />
      <div className="caption">I &#x2661; U</div>
    </div>
  </div>
}

export default Collage;