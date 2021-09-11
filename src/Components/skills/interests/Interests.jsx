import React from "react";
// import "../../../Styles/FooterChatAlsoViewed.css";
const Interests = () => {
  return (
    <>
      <div className="skills">
        <div className="skill_title">
          <div>Interests</div>
        </div>
        <div className="">
          <div className="interests_container justify-content-center justify-content-sm-between flex-column flex-sm-row">
            <div className="d-flex w-50 width100">
              <div className="interests">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />
              </div>
              <div className="interests_info ml-3">
                <div className="interests_title">Google</div>
                <div className="interests_views ">586,225 followers</div>
              </div>
            </div>

           <div className="d-flex  w-50 width100">
              <div className="interests">
                <img
                  src="https://rosenfeldmedia.com/enterprise2019/wp-content/uploads/sites/13/2018/03/cisco-logo.png"
                  alt=""
                />
              </div>
              <div className="interests_info ml-3 justify-content-md-end justify-content-sm-end">
                <div className="interests_title">Cisco</div>
                <div className="interests_views">595,675 viewers</div>
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

export default Interests;
