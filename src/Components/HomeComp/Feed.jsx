import { Col } from "react-bootstrap";
import HeaderPost from "../postsComponents/HeaderPost";
import PostUser from "../postsComponents/PostUser";
import TextPost from "../postsComponents/TextPost";
import Likes from "../postsComponents/Likes";
import Reactions from "../postsComponents/Reactions";
import CommentsArea from "../postsComponents/Comment/CommentsArea";
import {useState} from 'react'

const Feed = (props) => {
  const [showCommentArea, setShowCommentArea] = useState(false)

  return (
    <>
      <Col className="feed-area">
        <HeaderPost
          renderAgain={props.renderAgain}
          postId={props.data._id}
          id={props.data.user._id}
        />
        <PostUser post={props.data} />
        <TextPost post={props.data} />
      </Col>
      <Col className="px-0">
        {props.data.image && (
          <div
            className="media-feed w-100"
            style={{ backgroundImage: `url(${props.data.image})` }}
          ></div>
        )}
      </Col>
      <Col className="feed-area-end mb-3">
        
        <Likes likesQty={props.data.likes.length} commentsQty={props.data.comments.length} />
        <Reactions renderAgain={props.renderAgain} postId={props.data._id} setShowCommentArea={setShowCommentArea} showCommentArea={showCommentArea} />
        {/* {console.log(props.data, "Before comments")} */}
        {showCommentArea ? <CommentsArea renderAgain={props.renderAgain} postId={props.data._id} comments={props.data.comments}/>: <></>}
        
      </Col>
    </>
  );
};

export default Feed;
