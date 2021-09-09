import { Card, FormControl, Button, Container } from "react-bootstrap";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {useState} from 'react'


const CommentArea = (props) => {
  const [qtyCommentsToDisplay, setQtyCommentsToDisplay] = useState(3)
  //request here because it would need to re render the home to get a new comment


  return (
    <Container>
      <CommentForm/>
      {props.data.comments.length > 0 ? props.data.comments.map.slice(0,qtyCommentsToDisplay)(comment=> <Comment comment={comment}/>) : <p>Post without comments</p>}
      {props.data.comments.length > 0 ? <Button onClick={()=>setQtyCommentsToDisplay(qtyCommentsToDisplay + 3)}/> : <></>}
    </Container>
  )
}
export default CommentArea;
