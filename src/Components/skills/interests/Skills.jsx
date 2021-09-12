import React from "react";
import { Button } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skill_title justify-content-between">
          <h6 className="block-title">Skills & endorsements</h6>
          <div className="d-none d-md-block ml-auto add-skill">
            Add a new skill </div>
          <div className="mb-2 ml-3 edit-logo">
            <svg

              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg></div>

        </div>
        <div>
          <Button className="btn btn-primary btn-skill px-3">
            Take skill quiz
          </Button>
        </div>

        <div className="skill_container">
          <div className="skill"></div>
          <div className="skill_info">
            <div className="skill_title d-flex">
              <Button className=" btn btn-endorse d-flex justify-content-center align-items-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match m-0"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                </svg>
              </Button>
              <span> Web Design</span> <p className="pt-3 ml-1 numb">· 1 </p>
            </div>
            <div className="skill_views pl-5 d-flex justify-content-between w-100">
              <div>
                <img
                  src="https://media-exp3.licdn.com/dms/image/C560BAQGOfFrOCEeHgQ/company-logo_100_100/0/1561044766722?e=1634774400&v=beta&t=HGdhesNpg7ZJJt5mxdHRA8mOcBwTP_XShYJHEmNX3X8"
                  alt=""
                  className="img-endorse"
                />
                Endorsed by
                <span className="bold">
                  {" "}
                  2 of Maksym’s colleagues at AppQuality
                </span>{" "}
              </div>
              <div className="d-none d-md-flex align-items-center">
                <span>
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
                    <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
                  </svg>{" "}
                </span>
                <span>LinkedIn Skill Assessment badge</span>
              </div>
            </div>
          </div>
        </div>
        <div className="skill_container">
          <div className="skill"></div>
          <div className="skill_info">
            <div className="skill_title d-flex">
              <Button className=" btn btn-endorse d-flex justify-content-center align-items-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match m-0"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                </svg>
              </Button>
              <span> Visual Merchandising</span>{" "}
              <p className="pt-3 ml-1 numb">· 6 </p>
            </div>
            <div className="skill_views pl-5 d-flex justify-content-between w-100 flex-nowrap">
              <div>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQHKruVJIKOWqw/company-logo_100_100/0/1626117794907?e=1634774400&v=beta&t=3ELp9K1R3MN6NtLO5zWzbcz6ljmM7OcNBu2dGxv6dpU"
                  alt=""
                  className="img-endorse pr-2"
                />
                Endorsed by
                <span className="bold ">
                  {" "}
                  2 of Hedri Helena’s colleagues at Princess Cruises
                </span>{" "}
              </div>

            </div>
          </div>
        </div>
        <div className="skill_container-last">
          <div className="skill_info">
            <div className="skill_title d-flex">
              <Button className=" btn btn-endorse d-flex justify-content-center align-items-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match m-0"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                </svg>
              </Button>
              <span> Node.js</span> <p className="pt-3 ml-1 numb">· 1 </p>
            </div>
            <div className="skill_views pl-5 d-flex justify-content-between w-100 flex-nowrap">
              <div>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQGkZgktFsltFQ/company-logo_100_100/0/1519910513271?e=1634774400&v=beta&t=n2oo_SaTpeBLaStkr-Evz6jTYueJzw9boz4BlnqVJOk"
                  alt=""
                  className="img-endorse pr-2"
                />
                Endorsed by
                <span className="bold ">
                  {" "}
                  2 of Stefano’s colleagues at Nucleode Srl
                </span>{" "}
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="show_more_container py-2">
        <span>Show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          className="mercado-match"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
        </svg>
      </div>
    </>
  );
};

export default Skills;
