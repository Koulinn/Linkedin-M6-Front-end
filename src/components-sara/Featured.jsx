import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CarouselFeatured from "../Components/CarouselFeatured";
import "../Styles/Sara.css";

const Featured = () => {
  return (
    <Container className="featured position-relative mt-3">
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <div>
            <h2 className="featured-h2 ">Featured</h2>
          </div>
          <div className="d-flex align-items-center">
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
              </svg>
            </div>
            <div className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
              </svg>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <CarouselFeatured />
      </Row>
    </Container>
  );
};

export default Featured;
