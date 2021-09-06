import { ListGroup } from "react-bootstrap";
import {
  ArrowRight,
  ChevronCompactDown,
  Dot,
  ThreeDots
} from "react-bootstrap-icons";
import "../Styles/Lea.css";

const SideHome = () => {
  return (
    <aside className="aside-sidehome ">
      <div className="mt-5 text-left ">
        <section >
          <ListGroup >
            <ListGroup.Item
              className="d-flex align-items-center pt-2 pb-1"
              style={{ border: "none" }}
            >
              <h6 style={{ flex: "1" }}>LinkedIn News</h6>
              <span className="mb-2">
                <button className="button-sidehome">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                    data-supported-dps="18x18"
                    fill="#61605F"
                    className="mercado-match "
                    width="20"
                    height="20"
                    focusable="false"
                    id="svg-sidehome2"
                  >
                    <path
                      d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 
                  00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 
                  3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"
                    ></path>
                  </svg>
                </button>
              </span>
            </ListGroup.Item>

            <ListGroup.Item
              className="hoverable-link hoverable-link1 pl-2 pt-1 pb-0"
              style={{ border: "none" }}
            >
              <strong style={{ fontSize: "15px"}}>
                <Dot size={20} />
                My salary? Shhh, it´s a secret
              </strong>
              <span className="float-right external-icon" 
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="#61605F"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
              </svg>
              </span>
              <p className="mb-1">
                <small className="ml-3">
                  1d ago <Dot size={16} />
                  6,791 readers
                </small>
              </p>
            </ListGroup.Item>

            <ListGroup.Item
              className="hoverable-link hoverable-link1 pl-2 pt-1 pb-0"
              style={{ border: "none" }}
            >
              <strong style={{ fontSize: "14px"}}>
                <Dot size={20} />
                Netflix CEO responds to Slack firing
              </strong>
              <span className="float-right external-icon" 
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="#61605F"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
              </svg>
              </span>
              <p className="mb-1">
                <small className="ml-3">
                  17h ago <Dot size={16} />
                  246,486 readers
                </small>
              </p>
            </ListGroup.Item>

            <ListGroup.Item
              className="hoverable-link hoverable-link1 pl-2 pt-1 pb-0"
              style={{ border: "none" }}
            >
              <strong style={{ fontSize: "14px"}}>
                <Dot size={20} />
                Virus infiltrates Olympic Village
              </strong>
              <span className="float-right external-icon" 
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="#61605F"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
              </svg>
              </span>
              <p className="mb-1">
                <small className="ml-3">
                  1d ago <Dot size={16} />
                  8,706 readers
                </small>
              </p>
            </ListGroup.Item>

            <ListGroup.Item
              className="hoverable-link hoverable-link1 pl-2 pt-1"
              style={{ border: "none" }}
            >
              <strong style={{ fontSize: "14px"}}>
                <Dot size={20} />
                Govt invests €375m in tech startups
              </strong>
              <span className="float-right external-icon" 
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="#61605F"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
              </svg>
              </span>
              <p className="mb-1">
                <small className="ml-3">
                  6h ago <Dot size={16} />
                  1,114 readers
                </small>
              </p>
            </ListGroup.Item>

            <ListGroup.Item className="pl-2 pt-1 pb-1"
            style={{ border: "none" }}>
              <div className=" m-2">
                <a
                  href="/home"
                  className="text-left hoverable-link px-2 py-1 "
                  style={{ fontSize: "15px" }}
                >
                  Show more
                  <span className="ml-2 text-left">
                    <ChevronCompactDown size={16} />
                  </span>
                </a>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </section>
      </div>

      <div className="pt-4 text-left">
        <section>
          <ListGroup>
            <ListGroup.Item
              className="d-flex align-items-center pl-3 pt-2 pb-1"
              style={{ border: "none" }}
            >
              <h6 className="text-left " style={{ flex: "1" }}>
                Today´s top courses
              </h6>
              <span className="mb-2">
                <button className="button-sidehome">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                    data-supported-dps="18x18"
                    fill="#61605F"
                    className="mercado-match"
                    width="20"
                    height="20"
                    focusable="false"
                    id="svg-sidehome1"
                  >
                    <path
                      d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 
                  00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 
                  3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"
                    ></path>
                  </svg>
                </button>
              </span>
            </ListGroup.Item>

            <ListGroup.Item
              className="hoverable-link hoverable-link1 pl-2 pt-1 pb-0"
              style={{ border: "none" }}
            >
              <strong style={{ fontSize: "14px"}}>1. Leadership foundations</strong>
              <span className="float-right external-icon" 
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="#61605F"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
              </svg>
              </span>
              <p className="mb-1">
                <small className="ml-3">Dr. Shirley Davis</small>
              </p>
            </ListGroup.Item>

            <ListGroup.Item
              className="hoverable-link hoverable-link1 pl-2 pt-1 pb-0"
              style={{ border: "none" }}
            >
              <strong style={{ fontSize: "14px"}}>2. Leading with a Heavy Heart</strong>
              <span className="float-right external-icon" 
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="#61605F"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
              </svg>
              </span>
              <p className="mb-1">
                <small className="ml-3">Kat Cole</small>
              </p>
            </ListGroup.Item>

            <ListGroup.Item
              className="hoverable-link hoverable-link1 pl-2 pt-1 pb-0"
              style={{ border: "none" }}
            >
              <strong style={{ fontSize: "14px"}}>3. Staying Positive in the Face of Neg...</strong>
              <span className="float-right external-icon" 
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="#61605F"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
              </svg>
              </span>
              <p className="mb-1">
                <small className="ml-3">Scott Mautz</small>
              </p>
            </ListGroup.Item>

            <ListGroup.Item className="pb-1 pl-1"
            style={{ border: "none" }}>
              <div className=" mb-2">
              <a
                href="/home"
                className="text-left hoverable-link px-2 py-1"
                style={{ fontSize: "15px" }}
              >
                Show more on LinkedIn Learning
                <span className="ml-2">
                  <ArrowRight size={16} />
                </span>
              </a>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </section>
      </div>

      <div className="pt-4 text-left">
        <section>
          <ListGroup>
            <ListGroup.Item className="pb-0"
            style={{ border: "none" }}>
              <h6 className="text-left">
                Promoted
                <ThreeDots className="float-right" size={16} />
              </h6>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex pr-1 pb-0" style={{ border: "none" }}>
              <a
                href="/home"
                className="mr-2 pt-2"
                style={{ position: "relative", flex: "0 0 auto" }}
              >
                <img
                  src="https://picsum.photos/60"
                  alt="promoted"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </a>
              <div>
                <p className="promoted-sidehome mb-1"
                style={{ fontSize: "14px"}}>
                  <strong>Impact--made to purchase</strong></p>
                <p className="promoted-sidehome" style={{ lineHeight: "1.2" }}>
                  <small style={{ fontSize: "10px"}}>
                    Complete your most pressing work with Project Catalog™ by
                    Upwork.
                  </small>
                </p>
              </div>

              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mercado-match"
                  data-supported-dps="24x24"
                  fill="#61605F"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M9.5 2L17 12 9.5 22H7l7.5-10L7 2z"></path>
                </svg>
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex pr-1" style={{ border: "none" }}>
              <a
                href="/home"
                className="mr-2 pt-1"
                style={{ position: "relative", flex: "0 0 auto" }}
              >
                <img
                  src="https://picsum.photos/id/1/60"
                  alt="promoted"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </a>
              <div>
                <p className="promoted-sidehome mb-1"
                 style={{ fontSize: "14px"}}><strong>Build better products</strong></p>
                <p className="promoted-sidehome" style={{ lineHeight: "1.2" }}>
                  <small style={{ fontSize: "10px"}}>
                    Canny helps you keep track of customer feedback. Free 14-day
                    trial.
                  </small>
                </p>
              </div>

              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mercado-match"
                  data-supported-dps="24x24"
                  fill="#61605F"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M9.5 2L17 12 9.5 22H7l7.5-10L7 2z"></path>
                </svg>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </section>
      </div>

      <footer >
        <div
          className="pt-3 mx-3 px-4 d-flex flex-wrap justify-content-center align-items-center"
          style={{ background: "#F3F2EF", border: "none" }}
        >
          <a
            href="/home"
            className="mx-2 my-1"    
            style={{ fontSize: "11px"}}       
          >
            About
          </a>

          <a
            href="/home"
            className="mx-2 my-1"
            style={{ fontSize: "11px"}}
          >
            Accessibility
          </a>

          <a
            href="/home"
            className="mx-2 my-1"
            style={{ fontSize: "11px"}}
          >
            Help Center
          </a>

          <a
            href="/home"
            className="mx-2 my-1"
            style={{ fontSize: "11px"}}
          >
            Privacy & Terms
            <span className="ml-2">
              <ChevronCompactDown size={16} />
            </span>
          </a>

          <a
            href="/home"
            className="mx-2 my-1"
            style={{ fontSize: "11px"}}
          >
            Ad Choices
          </a>

          <a
            href="/home"
            className="mx-2 my-1"
            style={{ fontSize: "11px"}}
          >
            Advertising
          </a>

          <a
            href="/home"
            className="mx-2 my-1"
            style={{ fontSize: "11px"}}
          >
            Business Services
            <span className="ml-2">
              <ChevronCompactDown size={16} />
            </span>
          </a>

          <a
            href="/home"
            className="mx-2 my-1"
            style={{ fontSize: "11px"}}
          >
            Get the LinkedIn app
          </a>

          <a
            href="/home"
            className="mx-2 my-1"
            style={{ fontSize: "11px"}}
          >
            More
          </a>
        </div>

        <div className="pt-4 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 14"
            data-supported-dps="56x14"
            fill="currentColor"
            className="mercado-match mb-1 mr-1"
            width="56"
            height="14"
            focusable="false"
          >
            <g>
              <path
                className="background-mercado"
                d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"
              ></path>
            </g>
          </svg>
          <span style={{ fontSize: "11px"}}>LinkedIn Corporation © 2021
          </span>
        </div>
      </footer>
    </aside>
  );
};

export default SideHome;