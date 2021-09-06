import { Col } from "react-bootstrap";
import { format } from "date-fns";
import React from "react";
import currentJob from "../assets/eli.jpg";
import ModalAddNewExperience from "./Modal_Forms/ModalAddNewExperience";

const ExperienceDetails = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Col className="position-relative d-flex ml-2 pr-2">
      <div>
        <img src={currentJob} alt="" className="img-exp"></img>
      </div>
      <div className="pl-4 experience-border w-100">
        <div className="company-details">
          <h6 className="mt-3">{props.userExperience.role}</h6>
          <p className="company-title mb-0">{props.userExperience.company} - {props.userExperience.area}</p>
          <p className="company-duration">
            <span>
              {format(new Date(props.userExperience.startDate), "dd-MM-yyyy")}
            </span>{" "}
            <span>
              - {format(new Date(props.userExperience.endDate), "dd-MM-yyyy")}
            </span>
          </p>
          {/* <p className="company-duration">
            <span>{props.userExperience.area}</span>
          </p> */}
        </div>
        <div className="d-flex company-details justify-content-start">
          <p className="company-title set-size-company-title justify-content-start">{props.userExperience.description}
          </p>

        </div>
        {props.userExperience.image && <div className="set-size">
          <img src={props.userExperience.image} alt="" style={{maxHeight: '256px', maxWidth: '256px', objectFit:'cover'}} />
        </div>}
      </div>
      <ModalAddNewExperience
        show={modalShow}
        endpoint={
          `${process.env.REACT_APP_DEV_URL}profile/experience/${window.localStorage.getItem('_id')}/update/${props.userExperience._id}`
          // 'https://striveschool-api.herokuapp.com/api/profile/' + window.localStorage.getItem('_id') + '/experiences/' + props.userExperience._id
        }
        requestmethod='PUT'
        changeExpImg={props.changeExpImg}
        setIsLoading={props.setIsLoading}
        setchangeExpImg={props.setchangeExpImg}
        userExperience={props.userExperience}
        changeUserData={props.changeUserData}
        setchangeuserdata={props.setchangeuserdata}
        onHide={() => setModalShow(false)}
      ></ModalAddNewExperience>

      <div className="edit-details" onClick={() => setModalShow(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="mercado-match edit-svg"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
        </svg>
      </div>
    </Col>
  );
};

export default ExperienceDetails;
