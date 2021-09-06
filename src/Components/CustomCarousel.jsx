import { Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };
  return (
    <Carousel
      className="mt-3 pl-3"
      partialVisible={true}
      responsive={responsive}
    >
      <div className="mb-1 mr-3">
        <Col className="card-carousel-color pt-3">
          <p className="mb-0 p-card">
            <span className="card-details-top">Open to work</span>
          </p>
          <p>
            <span className="span-card">See all details</span>
          </p>
          <div className="card-edit card-edit-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match card-svg"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
            </svg>
          </div>
        </Col>
      </div>
      <div className="mr-3 mb-1">
        <Col className="card-carousel pt-3">
          <p className="mb-0 p-card">
            <span className="card-details-top">Share that you're hiring</span>{" "}
            and attract qualified candidates.
          </p>
          <p>
            <span className="span-card">Get started</span>
          </p>
          <div className="card-edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match card-svg"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
            </svg>
          </div>
        </Col>
      </div>
      <div className="mb-1 mr-3">
        <Col className="card-carousel pt-3 pr-4">
          <p className="mb-0 p-card">
            <span className="card-details-top">Find potential clients</span> by
            showcasing the services you provide.
          </p>
          <p>
            <span className="span-card">Get started</span>
          </p>
          <div className="card-edit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match card-svg"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
            </svg>
          </div>
        </Col>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
