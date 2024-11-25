import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

const ListingPage = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch all listings
    axios
      .get("http://localhost:5000/api/listings")
      .then((response) => {
        setListings(response.data);
        setFilteredListings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
      });
  }, []);

  useEffect(() => {
    // Filter listings based on the search query
    const filtered = listings.filter(
      (listing) =>
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredListings(filtered);
  }, [searchQuery, listings]);

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search listings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        {filteredListings.map((listing) => (
          <Col md={4} key={listing.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={listing.image} alt={listing.title} />
              <Card.Body>
                <Card.Title>{listing.title}</Card.Title>
                <Card.Text>{listing.description}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${listing.price}
                </Card.Text>
                <Card.Text>
                  <strong>Location:</strong> {listing.location}
                </Card.Text>
                <Card.Link href={`/listings/${listing.id}`}>
                  View Details
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListingPage;
