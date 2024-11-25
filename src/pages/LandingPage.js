import React from "react";
import { Carousel, Container } from "react-bootstrap";

const LandingPage = () => (
  <Container>
    <Carousel className="mb-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x300"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to Real Estate</h3>
          <p>Find your dream property today!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x300"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Beautiful Homes</h3>
          <p>Properties in prime locations.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <section className="my-4">
      <h2>About Us</h2>
      <p>
        We are a trusted real estate platform helping you find your perfect
        property.
      </p>
    </section>
    <section className="my-4">
      <h2>Testimonials</h2>
      <p>"Great experience finding my dream home!" - A Happy Client</p>
    </section>
  </Container>
);

export default LandingPage;
