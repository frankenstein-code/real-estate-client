import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { getListings } from "../services/apiService";
import ListingCard from "../components/ListingCard";
import PaginationComponent from "../components/PaginationComponent";

const ListingPage = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getListings();
        setListings(data);
        setFilteredListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  useEffect(() => {
    const filtered = listings.filter(
      (listing) =>
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredListings(filtered);
    setCurrentPage(1);
  }, [searchQuery, listings]);

  //Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredListings.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        {currentItems.map((listing) => (
          <Col md={6} key={listing.id}>
            <ListingCard
              id={listing.id}
              title={listing.title}
              description={listing.description}
              price={listing.price}
              location={listing.location}
              image={listing.image}
            />
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col>
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ListingPage;
