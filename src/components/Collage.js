import React, { useEffect, useState } from 'react';
import './Collage.css';

const photoList = [
  { src: `${process.env.PUBLIC_URL}/images/wedding1.jpg`, text: 'Nos conocimos un día,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding2.jpg`, text: 'sin planes, sin prisas.🌟' },
  { src: `${process.env.PUBLIC_URL}/images/wedding3.jpg`, text: 'Momentos inesperados,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding4.jpg`, text: 'se convirtieron en magia.✨' },
  { src: `${process.env.PUBLIC_URL}/images/wedding5.jpg`, text: 'Cada sonrisa, un sueño,🌈' },
  { src: `${process.env.PUBLIC_URL}/images/wedding6.jpg`, text: 'cada abrazo, una promesa.💖' },
  { src: `${process.env.PUBLIC_URL}/images/wedding7.jpg`, text: 'Nos amamos intensamente,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding8.jpg`, text: 'sin miedo, sin dudas.💫' },
  { src: `${process.env.PUBLIC_URL}/images/wedding9.jpg`, text: 'Las pruebas llegaron,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding10.jpg`, text: 'nos hicieron más fuertes.💪' },
  { src: `${process.env.PUBLIC_URL}/images/wedding11.jpg`, text: 'Supimos quienes eramos,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding12.jpg`, text: 'ella era mi hogar.🏠' },
  { src: `${process.env.PUBLIC_URL}/images/wedding13.jpg`, text: 'Con un anillo en mano,💍' },
  { src: `${process.env.PUBLIC_URL}/images/wedding14.jpg`, text: 'le pedí ser mi vida.' },
  { src: `${process.env.PUBLIC_URL}/images/wedding15.jpg`, text: 'Ella sonrió y dijo sí, acepto!😄💍' },
  { src: `${process.env.PUBLIC_URL}/images/wedding16.jpg`, text: 'ahora juntos caminamos,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding17.jpg`, text: 'hacia el altar.👰🤵' },
  { src: `${process.env.PUBLIC_URL}/images/wedding18.jpg`, text: '¡Y estás Invitado!🎉' }
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