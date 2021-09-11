import { Container } from "react-bootstrap";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {useState} from 'react'


const CommentArea = ({comments, postId, renderAgain}) => {
  const [qtyCommentsToDisplay, setQtyCommentsToDisplay] = useState(3)
  //request here because it would need to re render the home to get a new comment


  return (
    <Container>
      {console.log(comments.length, 'comments from commentArea')}
      <CommentForm renderAgain={renderAgain} postId={postId} userId={window.localStorage.getItem('_id')} />
      {comments.length > 0 ? comments.map(comment=> <Comment comment={comment}/>) : <p>Post without comments</p>}
      {/* {comments.length > 0 ? <Button onClick={()=>setQtyCommentsToDisplay(qtyCommentsToDisplay + 3)}/> : <></>} */}
    </Container>
  )
}
export default CommentArea;
