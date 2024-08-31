import React, { useState } from 'react';
import './PassportWrapper.css';
import Collage from './Collage';
import Invitation from './Invitation';

const defaultPages = [
  {
    id: 'cover',
    visible: false,
    priority: 0,
    open: false,
    content: <img
      className="passport__face"
      src={`${process.env.PUBLIC_URL}/images/cover.png`}
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
    content: <Invitation />
  }
].reverse();

const PassportWrapper = ({ audio }) => {
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

  const togglePage = (pageId) => {
    audio.play();
    if (pagesData.some((page) => page.animating)) return;
    setPagesData((prev) => {
      let index;
      prev = prev.map((page, i) => {
        if (page.id !== pageId) return page;
        index = i;
        const max = Math.max(...prev.map(o => o.priority));
        return {
          ...page,
          open: !page.open,
          priority: max + 1,
          visible: page.open,
          animating: true,
        }
      })
      prev[index - 1 < 0 ? 0 : index - 1].visible = true;
      return prev;
    })
  }

  const setAnimating = (event, pageId, value) => {
    if (['open', 'close'].includes(event.animationName)) {
      updatePage(pageId, 'animating', value)
    }
  }

  return <div className="passport">
    <div
      className="passport__page passport__end">
    </div>
    {
      pagesData.map(({ id, open, priority, content, visible }) =>
        <div
          key={id}
          className={`passport__${id} passport__page
        ${open ? 'passport--open' : 'passport--close'}`}
          style={{ zIndex: priority }}
          onClick={() => togglePage(id)}
          onAnimationEnd={(e) => setAnimating(e, id, false)}>
          {React.cloneElement(content, { ready: visible })}
        </div>)
    }
  </div>
}

export default PassportWrapper;