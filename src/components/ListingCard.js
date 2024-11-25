import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListingCard = ({ id, title, description, price, location, image }) => {
  return (
    <Col md={12} className="mb-4">
      <Card>
        <Row>
          <Col md={4}>
            <Card.Img
              src={image}
              alt={title}
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Col>
          <Col md={8}>
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
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ListingCard;
