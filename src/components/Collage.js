import React, { useEffect, useState } from 'react';
import './Collage.css';

const photoList = [
  { src: '/images/wedding (1).JPG', text: 'Nos conocimos un día,' },
  { src: '/images/wedding (2).JPG', text: 'sin planes, sin prisas.🌟' },
  { src: '/images/wedding (3).JPG', text: 'Momentos inesperados,' },
  { src: '/images/wedding (4).JPG', text: 'se convirtieron en magia.✨' },
  { src: '/images/wedding (5).JPG', text: 'Cada sonrisa, un sueño,🌈' },
  { src: '/images/wedding (6).JPG', text: 'cada abrazo, una promesa.💖' },
  { src: '/images/wedding (7).JPG', text: 'Nos amamos intensamente,' },
  { src: '/images/wedding (8).JPG', text: 'sin miedo, sin dudas.💫' },
  { src: '/images/wedding (9).JPG', text: 'Las pruebas llegaron,' },
  { src: '/images/wedding (10).JPG', text: 'nos hicieron más fuertes.💪' },
  { src: '/images/wedding (11).JPG', text: 'Supimos quienes eramos,' },
  { src: '/images/wedding (12).JPG', text: 'ella era mi hogar.🏠' },
  { src: '/images/wedding (13).JPG', text: 'Con un anillo en mano,💍' },
  { src: '/images/wedding (14).JPG', text: 'le pedí ser mi vida.' },
  { src: '/images/wedding (15).JPG', text: 'Ella sonrió y dijo sí!😄💍' },
  { src: '/images/wedding (16).JPG', text: 'ahora juntos caminamos,' },
  { src: '/images/wedding (17).JPG', text: 'hacia nuestro altar.👰🤵' },
  { src: '/images/wedding (18).JPG', text: '!Y estás Invitado!🎉' }
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