import React, { useEffect, useState } from 'react';
import './Collage.css';

const photoList = [
  { src: '/images/wedding (1).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (2).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (3).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (4).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (5).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (6).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (7).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (8).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (9).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (10).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (11).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (12).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (13).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (14).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (15).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (16).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (17).JPG', text: 'I ❤ U' },
  { src: '/images/wedding (18).JPG', text: 'I ❤ U' }
]

const Collage = ({ ready }) => {

  const [pile, setPile] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isAnimating && ready) {
      addPhoto();
    }
  }, [isAnimating, ready])

  const addPhoto = () => {
    if (current >= photoList.length) {
      return;
    }
    setCurrent((prev) => prev + 1)
    setIsAnimating(true);
    setPile((prev) => {
      return [...prev, { ...photoList[current], position: getPosition() }]
    })

  }

  const getPosition = () => {
    return ({
      top: `${randomIntFromInterval(0, 60)}%`,
      left: `${randomIntFromInterval(10, 50)}%`,
      rotate: `${randomIntFromInterval(-40, 40)}deg`
    })
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return <div className="collage__sheet">
    {pile.map((photo, index) => {
      return <div
        className="polaroid polaroid--animate"
        style={photo.position}
        key={index}
        onAnimationEnd={() => setIsAnimating(false)}>
        <img
          src={photo.src}
          alt="couple"
        />
        <div className="caption">{photo.text}</div>
      </div>
    })
    }
  </div>
}

export default Collage;