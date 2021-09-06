import { Row, Col } from "react-bootstrap";
import React from "react";
import { RiQuestionFill } from "react-icons/ri";
import PeopleAlsoViewed from "./PeopleAlsoViewed";

const RightProfileCard = () => {
  return (
    <div className="mt-5 d-none d-md-none d-lg-block" width="100%">
      <Col
        className="py-3"
        style={{
          backgroundColor: "white",

          borderRadius: "10px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Row>
          <Col lg={10} className="mb-0">
            <p
              href="#"
              style={{
                fontSize: "1em",
                color: "rgb(102,102,102)",
                fontWeight: "600",
              }}
            >
              Edit public profile & URL
            </p>
          </Col>
          <Col lg={2}>
            <RiQuestionFill
              className="mr-3"
              style={{
                color: "gray",
              }}
            />
          </Col>
        </Row>
        <hr />
        <Row style={{ backgroundColor: "white" }}>
          <Col lg={10} className="mt-3">
            <p
              href="#"
              style={{
                fontSize: "1em",
                color: "rgb(102,102,102)",
                fontWeight: "600",
                marginBottom: "0",
              }}
            >
              Add profile in another language{" "}
            </p>
          </Col>
          <Col lg={2}>
            <RiQuestionFill
              className="mr-3 mt-3"
              style={{
                color: "gray",
              }}
            />
          </Col>
        </Row>
      </Col>
      <Row>
        <Col>
          <PeopleAlsoViewed />
        </Col>
      </Row>
    </div>
  );
};

export default RightProfileCard;
