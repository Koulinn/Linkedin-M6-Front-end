import React from "react";
import { Col } from "react-bootstrap";
import ModalAddNewExperience from "../Modal_Forms/ModalAddNewExperience";

const SectionProfile = (props) => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <Col className="mt-4 ml-2 d-flex justify-content-between">
      <h4 className="h4-section">{props.category}</h4>

      {/* Add new experience */}
      <ModalAddNewExperience
        show={modalShow}
        // need to change the id to the user id
        endpoint={
          // 'https://striveschool-api.herokuapp.com/api/profile/' + window.localStorage.getItem('_id') + '/experiences'
          `${process.env.REACT_APP_DEV_URL}profile/experience/${window.localStorage.getItem('_id')}`
        
        }
        requestmethod='POST'
        setIsLoading={props.setIsLoading}
        changeExpImg={props.changeExpImg}
        setchangeExpImg={props.setchangeExpImg}
        changeUserData={props.changeUserData}
        setchangeuserdata={props.setchangeuserdata}
        onHide={() => setModalShow(false)}>
      </ModalAddNewExperience>


      <div className="btn-plus" onClick={() => setModalShow(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="mercado-match card-svg-exp"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
        </svg>
      </div>
    </Col>
  );
};

export default SectionProfile;
