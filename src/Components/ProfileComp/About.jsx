import React from "react";
import { Row, Col } from "react-bootstrap";

import { useState, useEffect } from "react";
import ModalAbout from "../Modal_Forms/ModalAbout";

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [userData, setuserData] = useState("");
  const [changeUserData, setChangeUserdata] = useState(false);

  const getUserData = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_DEV_URL}profile/me/${window.localStorage.getItem('_id')}`,{
          method: "Get",});
      let userData = await response.json();
      let userDataKeyList = Object.keys(userData);
      setuserData(userData);
      userDataKeyList.forEach((key) =>
        window.localStorage.setItem(key, userData[key])
      );
    } catch (e) {
      console.log(e);
      return e;
    }
  };
  useEffect(() => getUserData(), [changeUserData]);

  return (
    <div className="about mt-3">
      <Row>
        <Col className="d-flex flex-column" xs={12}>
          <div className="d-flex justify-content-between">
            <h2>About</h2>

            <ModalAbout
              show={modalShow}
              changeUserData={changeUserData}
              setChangeUserdata={setChangeUserdata}
              onHide={() => setModalShow(false)}
            ></ModalAbout>
            <div className="about-icon" onClick={() => setModalShow(true)}>
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

          <div className="mb-0">
            {userData.bio}
            <p
              className="read-more-link d-inline-block"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {/* {!readMore && <span className="read-more">... see more</span>} */}
            </p>
            {/* {readMore && extraContent} */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
