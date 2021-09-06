import React, { useEffect, useState } from "react";
import "../../Styles/Hasham.css";
import "../../Styles/Sara.css";
import { Link } from 'react-router-dom'

const PeopleAlsoViewed = () => {
  const [Profiles, setProfiles] = useState([]);
  //console.log(Profiles);
  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "GET",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfiles(data.slice(43, 54)));
  }, []);
  return (
    <>
      <div
        className="people_also_viewed ml-auto mt-4 p-3 "
        style={
          {
            /*  border: 'solid 1px lightgrey', borderRadius: '10px', backgroundColor: 'white' */
          }
        }
      >
        <h2
          style={
            {
              /* fontSize: "1.5em", fontWeight: "500" */
            }
          }
        >
          People also viewed
        </h2>
        {Profiles.slice(3, 10).map((profile) => (
          <div className="profile_container pt-2" key={profile._id}>
            <img
              src={profile.image}
              alt={profile.name + " " + profile.surname}
              className="mt-1"
            />
            <div className="profile_info">
              <Link to={"@" + profile.name + "/" + profile._id}>
                <div className="name d-flex align-items-center">
                  <span>{profile.name + " " + profile.surname}</span>
                  <span
                    className="ml-1 pb-1"
                    style={{
                      color: " gray",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    • 2nd
                  </span>
                </div>
                <div
                  className="speciality text-muted"
                  style={
                    {
                      /* fontSize: "1.0em" */
                    }
                  }
                >
                  {profile.title}
                </div>
              </Link>
              <button className="connect_button  mt-2">Connect</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }} className="show-more py-2 w-100 ">
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

export default PeopleAlsoViewed;
