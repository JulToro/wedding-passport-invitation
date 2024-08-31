import React, { useEffect, useState } from 'react';
import Invitation from './Invitation';
import Collage from './Collage';
import Specs from './Specs';
import './PassportWrapper.css';

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
  },
  {
    id: 'third',
    visible: false,
    priority: 0,
    open: false,
    animating: false,
    content: <Specs />
  }
].reverse();

const PassportWrapper = ({ audio }) => {
  const [pagesData, setPagesData] = useState(defaultPages);
  const [closingPage, setClosingPage] = useState(null);

  useEffect(() => {
    if (closingPage === null) return;
    setTimeout(closePage, closingPage * 100)
  }, [closingPage])

  const closePage = () => {
    setPagesData((prev) => {
      return prev.map((page, index) => {
        if (index === closingPage) {
          return {
            ...page,
            open: false,
            priority: 0
          }
        }
        return page
      })
    })
    setClosingPage((prev) => {
      if (prev === pagesData.length - 1) return null;
      return prev + 1
    });
  }

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

  const closePassport = () => {
    setClosingPage(0);
  }

  const setAnimating = (event, pageId, value) => {
    if (['open', 'close'].includes(event.animationName)) {
      updatePage(pageId, 'animating', value)
    }
  }

  return <div className="passport">
    <div
      className="passport__page passport__end"
      onClick={() => closePassport()}>
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