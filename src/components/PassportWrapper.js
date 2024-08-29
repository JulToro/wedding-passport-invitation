import React, { useState } from 'react';
import './PassportWrapper.css';
import Collage from './Collage';

const defaultPages = [
  {
    id: 'cover',
    visible: false,
    priority: 0,
    open: false,
    content: <img
      className="passport__face"
      src="/images/cover.png"
      alt="Passport cover"
    />
  },
  {
    id: 'first',
    visible: false,
    priority: 0,
    open: false,
    animating: false,
    content: <Collage />
  },
  {
    id: 'second',
    visible: false,
    priority: 0,
    open: false,
    animating: false,
    content: <div />
  }
].reverse();

const PassportWrapper = ({ children }) => {

  const [pagesData, setPagesData] = useState(defaultPages);

  const updatePage = (pageId, property, value) => {
    setPagesData((prev) => {
      return prev.map((page) => {
        if (page.id !== pageId) return page;
        return {
          ...page,
          [property]: value
        }
      })
    })
  }

  const openPage = (pageId) => {
    setPagesData((prev) => {
      let index;
      prev = prev.map((page, i) => {
        if (page.id !== pageId) return page;
        if (page.open) return page;
        index = i;
        const max = Math.max(...prev.map(o => o.priority));
        return {
          ...page,
          open: true,
          priority: max + 1,
          visible: false,
        }
      })
      prev[index - 1 < 0 ? 0 : index - 1].visible = true;
      return prev;
    })
  }

  const setAnimating = (pageId, value) => {
    updatePage(pageId, 'animating', value)
  }

  return <div className="passport">
    <div
      className="passport__page passport__end"
      onAnimationEnd={() => setAnimating(false)}>
    </div>
    {
      pagesData.map(({ id, open, priority, content, visible }) =>
        <div
          key={id}
          className={`passport__${id} passport__page
        ${open ? 'passport--open' : 'passport--close'}`}
          style={{ zIndex: priority }}
          onClick={() => openPage(id)}
          onAnimationEnd={() => setAnimating(false)}>
          {React.cloneElement(content, { ready: visible })}
        </div>)
    }
  </div>
}

export default PassportWrapper;