import React from "react";
import { Carousel } from "react-bootstrap";

const CustomCarousel = ({ slides }) => {
  return (
    <Carousel className="mb-4">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={slide.caption.title}
          />
          <Carousel.Caption>
            <h3>{slide.caption.title}</h3>
            <p>{slide.caption.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
