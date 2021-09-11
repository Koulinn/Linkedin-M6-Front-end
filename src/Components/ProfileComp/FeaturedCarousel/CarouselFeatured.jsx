import { Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonLeft from "./ButtonLeft";
import ButtonRight from "./ButtonRight";

const CarouselFeatured = () => {
  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="carousel-button-group d-flex">
        <ButtonLeft previous={previous} />
        <ButtonRight next={next} />
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 80,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 80,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40,
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
      customButtonGroup={<ButtonGroup />}
      arrows={false}
      renderButtonGroupOutside={true}
    >
      <div className="mb-1 mr-3">
        <Col className="pl-0">
          <img
            src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-97a93eda-3de1-4b7f-b375-b19272847b05.png"
            alt=""
            className="img-fluid"
          />
          <div className="featured-col">
            <p className="feautured-certificate-p1 mb-0 ">
              Certificate - Sara Salomon Hailu - Strive School
            </p>
            <span className="feautured-certificate-span">Strive School</span>
            <p className="feautured-certificate-p2">
              Certificate released to Sara Salomon Hailu for the completion of
              Strive Scho..
            </p>
          </div>
        </Col>
      </div>
      <div className="mr-3 mb-1">
        <Col className="pl-0">
          <img
            src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-97a93eda-3de1-4b7f-b375-b19272847b05.png"
            alt=""
            className="img-fluid"
          />
          <div className="featured-col">
            <p className="feautured-certificate-p1 mb-0 ">
              Certificate - Sara Salomon Hailu - Strive School
            </p>
            <span className="feautured-certificate-span">Strive School</span>
            <p className="feautured-certificate-p2">
              Certificate released to Sara Salomon Hailu for the completion of
              Strive Scho..
            </p>
          </div>
        </Col>
      </div>
      <div className="mb-1 mr-3">
        <Col className="pl-0">
          <img
            src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-97a93eda-3de1-4b7f-b375-b19272847b05.png"
            alt=""
            className="img-fluid"
          />
          <div className="featured-col">
            <p className="feautured-certificate-p1 mb-0 ">
              Certificate - Sara Salomon Hailu - Strive School
            </p>
            <span className="feautured-certificate-span">Strive School</span>
            <p className="feautured-certificate-p2">
              Certificate released to Sara Salomon Hailu for the completion of
              Strive Scho..
            </p>
          </div>
        </Col>
      </div>
      <div className="mb-1 mr-3">
        <Col className="pl-0">
          <img
            src="https://csb39af7c2f2658x433dxa4d.blob.core.windows.net/credentials/cert-97a93eda-3de1-4b7f-b375-b19272847b05.png"
            alt=""
            className="img-fluid"
          />
          <div className="featured-col">
            <p className="feautured-certificate-p1 mb-0 ">
              Certificate - Sara Salomon Hailu - Strive School
            </p>
            <span className="feautured-certificate-span">Strive School</span>
            <p className="feautured-certificate-p2">
              Certificate released to Sara Salomon Hailu for the completion of
              Strive Scho..
            </p>
          </div>
        </Col>
      </div>
    </Carousel>
  );
};

export default CarouselFeatured;
