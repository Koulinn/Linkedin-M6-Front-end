import React from "react";
import "../Styles/Sara.css";
import { Row, Col } from "react-bootstrap";

const Activity = () => {
  return (
    <>
      <div className="activity mt-3">
        <Row>
          <Col xs={12}>
            <h2>Activity</h2>
            <span className="followers">130 followers</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="d-flex activity-wrapper">
              <img
                src="https://jquery-plugins.net/image/plugin/bootstrap-4-the-most-popular-html-css-and-js-library.jpg"
                alt=""
                className="img-fluid"
              />
              <div>
                <h3>
                  I love Sundays it's so quiet and relaxing. Today I'm going
                  to...
                </h3>
                <span className="span1">Rafael shared this</span>
                <span className="span2">3 Reactions.1 Comment</span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex activity-wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                alt=""
                className="img-fluid"
              />
              <div>
                <h3>REACT module Strive School was just mind-blowing...</h3>
                <span className="span1">Rafael shared this</span>
                <span className="span2">3 Reactions.1 Comment</span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex activity-wrapper">
              <img
                src="https://lh3.googleusercontent.com/csXm00pBuJvmhsXcI1XauxFGrE66sHBbWI9QyKY0lt2h55a1VaKl6F5TrlH0wBC_aijloKw9lh8a=e14-rj-sc0xffffff-w1270"
                alt=""
                className="img-fluid"
              />
              <div>
                <h3>I should rest... but my curiosity doesn't allow me...</h3>
                <span className="span1">Rafael shared this</span>
                <span className="span2">3 Reactions.1 Comment</span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex activity-wrapper">
              <img
                src="https://d1izfjx1xfihx4.cloudfront.net/images/mongodb-leaf-logo.png"
                alt=""
                className="img-fluid"
              />
              <div>
                <h3>
                  Weekend!!! Time to gather with your friends and study
                  together...
                </h3>
                <span className="span1">Rafael shared this</span>
                <span className="span2">3 Reactions.1 Comment</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="text-center all-activity d-flex justify-content-center py-2 ">
        <div className=" d-flex align-items-center">
          {" "}
          <span>See all activity</span>
        </div>{" "}
      </Row>
    </>
  );
};

export default Activity;
