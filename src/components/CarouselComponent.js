import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './CarouselComponent.css'
import SlideDownSheet from './SlideDownSheet';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  carousel-image"
            src="/images/DSC00015.JPG"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Primera Imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100  carousel-image"
            src="/images/DSC00037.JPG"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Segunda Imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100  carousel-image"
            src="/images/DSC09977.JPG"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Tercera Imagen</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <SlideDownSheet />
    </div>
  );
};

export default CarouselComponent;
