import React, { useEffect, useState } from 'react';
import './Collage.css';

const photoList = [
  { src: `${process.env.PUBLIC_URL}/images/wedding (1).JPG`, text: 'Nos conocimos un día,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (2).JPG`, text: 'sin planes, sin prisas.🌟' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (3).JPG`, text: 'Momentos inesperados,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (4).JPG`, text: 'se convirtieron en magia.✨' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (5).JPG`, text: 'Cada sonrisa, un sueño,🌈' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (6).JPG`, text: 'cada abrazo, una promesa.💖' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (7).JPG`, text: 'Nos amamos intensamente,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (8).JPG`, text: 'sin miedo, sin dudas.💫' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (9).JPG`, text: 'Las pruebas llegaron,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (10).JPG`, text: 'nos hicieron más fuertes.💪' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (11).JPG`, text: 'Supimos quienes eramos,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (12).JPG`, text: 'ella era mi hogar.🏠' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (13).JPG`, text: 'Con un anillo en mano,💍' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (14).JPG`, text: 'le pedí ser mi vida.' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (15).JPG`, text: 'Ella sonrió y dijo sí!😄💍' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (16).JPG`, text: 'ahora juntos caminamos,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (17).JPG`, text: 'hacia nuestro altar.👰🤵' },
  { src: `${process.env.PUBLIC_URL}/images/wedding (18).JPG`, text: '¡Y estás Invitado!🎉' }
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