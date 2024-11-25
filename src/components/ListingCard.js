import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListingCard = ({ id, title, description, price, location, image }) => {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <strong>Price:</strong> ${price}
          </Card.Text>
          <Card.Text>
            <strong>Location:</strong> {location}
          </Card.Text>
          <Card.Link as={Link} to={`/listings/${id}`}>
            View Details
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListingCard;
