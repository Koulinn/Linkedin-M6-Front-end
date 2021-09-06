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
                src="https://media-exp3.licdn.com/dms/image/C4D22AQFQRfHCjv9UIA/feedshare-shrink_160/0/1626593012519?e=1629936000&v=beta&t=f7t1rlBkkhkAx31oI_4-RfP6n2Hw2u3rXffUE3eWyc0"
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
                src="https://media-exp3.licdn.com/dms/image/C4D05AQFxemrAXwg5AA/videocover-low/0/1626520754515?e=1626868800&v=beta&t=OJEnTuLcVsaEbpwYDj3AAEFMQKkuvtYNUCD3nagY0sc"
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
                src="https://media-exp3.licdn.com/dms/image/C4D22AQGYOFE5sf0Pig/feedshare-shrink_480/0/1626027006101?e=1629936000&v=beta&t=ZtqqcWselkbDmZ6piSb-U7gzRaIkPu64Nu3Md-svVdw"
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
                src="https://media-exp3.licdn.com/dms/image/C4D22AQFLH0l8Zm419w/feedshare-shrink_160/0/1625938085455?e=1629936000&v=beta&t=il31RfKAUYocp5ob3Yx4Ue-mX9xw0eEKY4kTJH8y1Nk"
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
