import React, { useEffect, useState } from 'react';
import './Collage.css';

const photoList = [
  { src: '/images/DSC00015.JPG', text: 'I ❤ U' },
  { src: '/images/DSC00026.JPG', text: 'I ❤ U' },
  { src: '/images/DSC00031.JPG', text: 'I ❤ U' },
  { src: '/images/DSC00037.JPG', text: 'I ❤ U' },
  { src: '/images/DSC00047.JPG', text: 'I ❤ U' },
  { src: '/images/DSC00088.JPG', text: 'I ❤ U' },
  { src: '/images/DSC00109.JPG', text: 'I ❤ U' },
  { src: '/images/DSC00111.JPG', text: 'I ❤ U' },
  { src: '/images/DSC00122.JPG', text: 'I ❤ U' },
  { src: '/images/DSC09782.JPG', text: 'I ❤ U' },
  { src: '/images/DSC09804.JPG', text: 'I ❤ U' },
  { src: '/images/DSC09848.JPG', text: 'I ❤ U' },
  { src: '/images/DSC09858.JPG', text: 'I ❤ U' },
  { src: '/images/DSC09883.JPG', text: 'I ❤ U' }
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
    {ready && pile.map((photo, index) => {
      return <div
        className={`polaroid ${ready ? 'polaroid--animate' : ''}`}
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