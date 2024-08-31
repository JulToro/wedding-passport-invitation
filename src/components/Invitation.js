import React from 'react';
import './Invitation.css';

const Invitation = () => {
  return <div className="invitation">
    <a href='https://maps.app.goo.gl/PxCqhxpb6qMVfV5x6' target='_blank' rel='noreferrer' onClick={(e) => e.stopPropagation()}>
      <div className="button ceremony">Ver ubicación</div>
    </a>
    <a href='https://maps.app.goo.gl/6Apm7sttYPRXdzb58' target='_blank' rel='noreferrer' onClick={(e) => e.stopPropagation()}>
      <div className="button party">Ver ubicación</div>
    </a>
  </div>
}

export default Invitation;