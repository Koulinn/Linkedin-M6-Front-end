import { Col } from "react-bootstrap";
import "../Styles/Murilo.css";
const SideBellow = () => {
  return (
    <div className="side-profile mt-2">
      <Col className="pt-3 pr-0 side-bellow">
        <p className="mb-2 span-side">Groups</p>
        <div className="d-flex justify-content-between position-relative">
          <p className="mb-2 span-side">Events</p>
          <div className="card-edit-bellow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              className="mercado-match card-svg-side"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </div>
        </div>
        <p className="mb-0 span-side">Followed Hashtags</p>
        <p className="text-muted details-region">
          <span className="span-details"></span>
        </p>
        <p className="details-region">
          <span className="span-details"></span>
        </p>
      </Col>
      <Col className="side-end">
        <p className="mb-0 bellow-end align-items-center d-flex justify-content-center">
          Discover More
        </p>
      </Col>
    </div>
  );
};

export default SideBellow;
