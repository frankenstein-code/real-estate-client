import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { getListingById } from "../services/apiService";

const ListingDetailPage = () => {
  const { id } = useParams(); // Get the listing ID from the URL
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch listing details using the service function
    const fetchListing = async () => {
      try {
        const data = await getListingById(id); // Fetch listing by ID
        setListing(data); // Set listing details to state
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch listing details.");
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Card.Img variant="top" src={listing.image} alt={listing.title} />
        </Col>
        <Col md={6}>
          <h2>{listing.title}</h2>
          <p>{listing.description}</p>
          <p>
            <strong>Price:</strong> ${listing.price}
          </p>
          <p>
            <strong>Location:</strong> {listing.location}
          </p>
          <Button href="/listings" variant="primary">
            Back to Listings
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ListingDetailPage;
