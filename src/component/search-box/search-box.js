import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function SearchBox() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Container>
        <Row>
          <Col>BOOK YOUR GAME</Col>
          <Col>
            <Row>Booking For</Row>
            <Row>Form</Row>
          </Col>
          <Col>
            <Row>Date</Row>
            <Row>Form</Row>
          </Col>
          <Col>Button Go</Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchBox;
