import { Col } from "react-bootstrap";
import HeaderPost from "./HeaderPost";
import PostUser from "./PostUser";
import TextPost from "./TextPost";
import PostImg from "../assets/postfeed.jpg";
import Likes from "./Likes";
import Reactions from "./Reactions"

const Feed = (props) => {
  return (
    <>
      <Col className="feed-area">
        <HeaderPost renderAgain={props.renderAgain} postId={props.data._id} id={props.data.user._id} />
        <PostUser post={props.data} />
        <TextPost post={props.data}/>
      </Col>
      <Col className="px-0">
        { props.data.image &&
          <div
          className="media-feed w-100"
          style={{ backgroundImage: `url(${props.data.image})` }}
        ></div>}
      </Col>
      <Col className="feed-area-end mb-3">
        <Likes />
        <Reactions />
      </Col>
    </>
  );
};

export default Feed;
