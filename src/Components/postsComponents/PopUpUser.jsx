import { Button } from "react-bootstrap"

const PopUpUser = (props) => {
  return (
    <div className="popup-user pl-3">
      <div className="d-flex">
        <div className="img-post-feed my-3 position-relative">
          <img src={props.post.user.image} className="circle-img-post" alt="" />
        </div>
        <div className="ml-2 my-3 w-100">
          <div className="mb-0 align-items-center">
            <h6 className="mb-0 mr-1 h6-post links-feed">{props.post.user.name + ' ' + props.post.user.surname}</h6>
            <h6 className="mb-0 span-feed"> • 2nd</h6>
          </div>
          <div className="mr-1 d-flex justify-content-between align-items-center">
            <p className="mb-0 about-feed-popup">
              {props.post.user.title}
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between pl-1">
        <Button variant="primary" className="button-popup" size="sm">
          Connect
        </Button>
      </div>
    </div>
  )
}

export default PopUpUser