import React, { useState } from 'react';
import './SlideDownSheet.css'; // Asegúrate de crear este archivo CSS

const SlideDownSheet = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSheet = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="text-center mt-4">
        <button className="check-in-button" onClick={toggleSheet}>
          Check In
        </button>
      </div>
      <div className={`slide-down-sheet ${isVisible ? 'visible' : ''}`}>
        <p>¡Bienvenidos a la boda!</p>
      </div>
    </div>
  );
};

export default SlideDownSheet;
