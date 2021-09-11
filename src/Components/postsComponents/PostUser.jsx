
import PopUpUser from "./PopUpUser";
const PostUser = (props) => {
  return (
    <div className="d-flex align-items-center">
      <div className="img-post-feed my-3 position-relative">
        <img src={props.post.user.image ? props.post.user.image : 'https://keyrecruitment.co.za/wp-content/uploads/2013/10/image.jpg'} className="circle-img-post" alt="" />
      </div>
      <div className="ml-2 my-3 w-100">
        <div className="d-flex mb-0 align-items-center">
          <h6 className="mb-0 mr-1 h6-post links-feed display-popup">{props.post.user.name + ' ' + props.post.user.surname}
          <PopUpUser post={props.post} />
          </h6>
          <h6 className="mb-0 span-feed"> • 2nd</h6>
          
        </div>
        <div className="mr-1 d-flex justify-content-between align-items-center">
          <p className="mb-0 about-feed">
          {props.post.user.title}
          </p>
        </div>
        <p className="d-flex mb-0 align-items-center">
          <span className="about-feed">1d • </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            className="mercado-match card-svg mt-0 ml-1"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
          </svg>
        </p>
      </div>
      <div>
      <div className="d-flex align-items-center follow-icon">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match mt-0 mb-1 mr-1"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
              </svg>
            </span>
            <span className="follow-feed pr-2">Follow</span>
          </div>
      </div>
    </div>
  );
};
export default PostUser;
