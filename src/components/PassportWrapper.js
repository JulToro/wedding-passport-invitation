import React, { useState } from 'react';
import './PassportWrapper.css';

const PassportWrapper = ({ children }) => {

  const [open, setOpen] = useState({})
  const [priority, setPriority] = useState('');

  const togglePage = (page) => {
    setOpen((prev) => ({ ...prev, [page]: !prev[page] }))
    setPriority(page);
  }

  return <div className="passport">
    <div
      className={`passport__firstpage 
        ${open['first'] ? 'passport--open' : 'passport--close'} 
        ${priority === 'first' ? 'passport--priority' : ''}`}
      onClick={() => togglePage('first')}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ fontSize: 40 }}>Hola</p>
    </div>
    <div
      className={`passport__cover 
        ${open['cover'] ? 'passport--open' : 'passport--close'} 
        ${priority === 'cover' ? 'passport--priority' : ''}`}
      onClick={() => togglePage('cover')}>
    </div>
    {children}
  </div>
}

export default PassportWrapper;