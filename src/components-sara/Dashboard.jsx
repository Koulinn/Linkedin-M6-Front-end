import React from "react";
import "../Styles/Sara.css";
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
      {/*  <Row>
        <Col xs={12}>
          <Post />
        </Col>
      </Row> */}
      <div className="dashboard">
        <div className="dashboard-top-container">
          <h5>Your Dashboard</h5>
          <p>Private to you</p>
        </div>
        <div className=" dashboard-middle-container">
          <div className="profile-view">
            <Link to="#">
              <div className="dashboard-view">
                <span className="no-view">40</span>
                <span>Who viewed your profile</span>
              </div>
            </Link>
          </div>
          <div className="article-view">
            <Link to="#">
              <div className="dashboard-view">
                <span className="no-view">19</span>
                <span>Article views</span>
              </div>
            </Link>
          </div>
          <div className="search-appearances">
            <Link to="#">
              <div className="dashboard-view">
                <span className="no-view">19</span>
                <span>Search appearances</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="dashboard-bottom-container">
          <div className="creator-mode">
            <Link to="#">
              <div className="creatormode-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="dashboard-svg"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
                </svg>
                <div className="p-h5">
                  {" "}
                  <h5>
                    {" "}
                    Creator mode:<span>Off</span>
                  </h5>{" "}
                  <p>
                    Grow your audience and get discovered by highlighting
                    content on your profile.
                  </p>
                </div>
              </div>{" "}
            </Link>
          </div>
          <div className="mynetwork dashboard-section__hr">
            <Link to="#">
              <div className="mynetwork-content ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="dashboard-svg"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>{" "}
                <div className="p-h5">
                  <h5> My Network</h5>{" "}
                  <p>Manage your connections, events, and interests.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="salary-insights dashboard-section__hr">
            <Link to="#">
              <div className="salaryinsights-content ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="dashboard-svg"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 9.88A2.13 2.13 0 119.88 12 2.13 2.13 0 0112 9.88M12 9a3 3 0 103 3 3 3 0 00-3-3zm9-4H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zM4 7h2.13A2.13 2.13 0 014 9.13V7zm0 10v-2.12A2.13 2.13 0 016.13 17h5zm16 0h-2.12A2.13 2.13 0 0120 14.88V17zm0-3a3 3 0 00-3 3H7a3 3 0 00-3-3v-4a3 3 0 003-3h10a3 3 0 003 3v4zm0-4.87A2.13 2.13 0 0117.88 7H20v2.13z"></path>
                </svg>
                <div className="p-h5">
                  <h5> Salary insights</h5>{" "}
                  <p>
                    See how your salary compares to others in the community.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="myitems d-flex dashboard-section__hr">
            <Link to="#">
              <div className="myitems-content ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="dashboard-svg"
                  className="dashboard-svg"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                </svg>
                <div className="p-h5">
                  <h5>My items</h5>{" "}
                  <p>Keep track of your jobs, courses and articles.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
