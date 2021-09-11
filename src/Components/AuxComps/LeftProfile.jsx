import { Col } from "react-bootstrap";
import imgBk from "../../assets/bklinkedin.jpg";
import SideBellow from "../SideBelow";
import { withRouter } from "react-router";

const LeftProfile = (props) => {
  return (
    <>
      <div className="side-profile mt-5">
        <div
          className="bg-profile-side d-flex justify-content-center"
          style={{ backgroundImage: `url(${imgBk})` }}
        >
          <div className="profile-pic-side mouseCursor">
            <div
              className="bg-photo-side"
              style={{ backgroundImage: `url(${window.localStorage.getItem('image') ? window.localStorage.getItem('image') : 'https://keyrecruitment.co.za/wp-content/uploads/2013/10/image.jpg'})` }}
              onClick={() => props.history.push('profile')}
            ></div>
          </div>
        </div>

        <Col className="details-profile-side">
          <h6 className="mb-0 text-center mouseCursor" onClick={() => props.history.push('profile')} >{window.localStorage.getItem('name') + ' ' + window.localStorage.getItem('surname')}</h6>
          <p className="mb-0 text-center about-side">
            {window.localStorage.getItem('title')}
          </p>
          <p className="text-muted details-region">
            <span className="span-details"></span>
          </p>
          <p className="details-region">
            <span className="span-details"></span>
          </p>
        </Col>
        <Col className="side-middle">
          <div className="d-flex justify-content-between align-items-center"><p className="mb-0 about-side-middle">Who viewed your profile</p><span className="span-side">11</span></div>
          <div className="d-flex justify-content-between align-items-center"><p className="mb-0 about-side-middle">Views of your post</p><span className="span-side">46</span></div>
        </Col>
        <Col className="side-middle">
          <p className="mb-0 about-side">Exclusive tools & insights</p>
          <p className="mb-0 about-side-end align-items-center d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              className="mercado-match ml-0 mr-1"
              width="20"
              height="20"
              focusable="false"
            >
              <path
                d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                fill="#f8c77e"
              ></path>
              <path
                d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                fill="#e7a33e"
              ></path>
            </svg>
            Try Sales Navigator
          </p>
        </Col>
        <Col className="side-end">
          <p className="mb-0 about-side-last align-items-center d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
              className="mr-1"
            >
              <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
            </svg>
            <span className="font-color ml-1">My items</span>
          </p>
        </Col>
      </div>
      <div>
         <SideBellow /> 
      </div>
    </>
  );
};
export default withRouter(LeftProfile);
