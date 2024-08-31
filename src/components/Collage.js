import React, { useEffect, useState } from 'react';
import './Collage.css';

const photoList = [
  { src: `${process.env.PUBLIC_URL}/images/wedding1.JPG`, text: 'Nos conocimos un día,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding2.JPG`, text: 'sin planes, sin prisas.🌟' },
  { src: `${process.env.PUBLIC_URL}/images/wedding3.JPG`, text: 'Momentos inesperados,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding4.JPG`, text: 'se convirtieron en magia.✨' },
  { src: `${process.env.PUBLIC_URL}/images/wedding5.JPG`, text: 'Cada sonrisa, un sueño,🌈' },
  { src: `${process.env.PUBLIC_URL}/images/wedding6.JPG`, text: 'cada abrazo, una promesa.💖' },
  { src: `${process.env.PUBLIC_URL}/images/wedding7.JPG`, text: 'Nos amamos intensamente,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding8.JPG`, text: 'sin miedo, sin dudas.💫' },
  { src: `${process.env.PUBLIC_URL}/images/wedding9.JPG`, text: 'Las pruebas llegaron,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding10.JPG`, text: 'nos hicieron más fuertes.💪' },
  { src: `${process.env.PUBLIC_URL}/images/wedding11.JPG`, text: 'Supimos quienes eramos,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding12.JPG`, text: 'ella era mi hogar.🏠' },
  { src: `${process.env.PUBLIC_URL}/images/wedding13.JPG`, text: 'Con un anillo en mano,💍' },
  { src: `${process.env.PUBLIC_URL}/images/wedding14.JPG`, text: 'le pedí ser mi vida.' },
  { src: `${process.env.PUBLIC_URL}/images/wedding15.JPG`, text: 'Ella sonrió y dijo sí!😄💍' },
  { src: `${process.env.PUBLIC_URL}/images/wedding16.JPG`, text: 'ahora juntos caminamos,' },
  { src: `${process.env.PUBLIC_URL}/images/wedding17.JPG`, text: 'hacia el altar.👰🤵' },
  { src: `${process.env.PUBLIC_URL}/images/wedding18.JPG`, text: '¡Y estás Invitado!🎉' }
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