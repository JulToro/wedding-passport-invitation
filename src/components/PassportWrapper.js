import React, { useState } from 'react';
import './PassportWrapper.css';
import Collage from './Collage';

const PassportWrapper = ({ children }) => {

  const [open, setOpen] = useState({})
  const [priority, setPriority] = useState('');
  const [animating, setAnimating] = useState(false);

  const togglePage = (page) => {
    if (open[page]) return;
    setOpen((prev) => ({ ...prev, [page]: !prev[page] }));
    setAnimating(true);
    setPriority(page);
  }

  return <div className="passport">
    <div
      className={`passport__secondpage 
        ${open['second'] ? 'passport--open' : 'passport--close'} 
        ${priority === 'second' ? 'passport--priority' : ''}`}
      onClick={() => togglePage('second')}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      onAnimationEnd={() => setAnimating(false)}>
    </div>
    <div
      className={`passport__firstpage 
        ${open['first'] ? 'passport--open' : 'passport--close'} 
        ${priority === 'first' ? 'passport--priority' : ''}`}
      onClick={() => togglePage('first')}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      onAnimationEnd={() => setAnimating(false)}>
      <Collage ready={open['cover']} />
    </div>
    <div
      className={`passport__cover 
        ${open['cover'] ? 'passport--open' : 'passport--close'} 
        ${priority === 'cover' ? 'passport--priority' : ''}`}
      onClick={() => togglePage('cover')}
      onAnimationEnd={() => setAnimating(false)}>
      <img
        className="passport__face"
        src="/images/cover.png"
        alt="Passport cover"
      />
    </div>
    {children}
  </div>
}

export default PassportWrapper;