import React from "react";
import { Container } from "react-bootstrap";
import CustomCarousel from "../components/CustomCarousel";

const LandingPage = () => {
  const carouselSlides = [
    {
      image: "https://via.placeholder.com/800x300",
      caption: {
        title: "Welcome to Real Estate",
        description: "Find your dream property today!",
      },
    },
    {
      image: "https://via.placeholder.com/800x300",
      caption: {
        title: "Beautiful Homes",
        description: "Properties in prime locations.",
      },
    },
  ];

  return (
    <Container>
      <CustomCarousel slides={carouselSlides} />
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
};

export default LandingPage;
