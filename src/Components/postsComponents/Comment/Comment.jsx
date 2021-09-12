import React from 'react'
import { format } from "date-fns";

function Comment({comment}) {
    //it needs to have the DELETE and PUT Methods here
    return (
        <div className="comment-wrapper my-4">
           {/* {A edit button, a delete button} */}
            <div className="d-flex align-items-center">
                <img className="img-post-feed" src={comment.image} alt="" />
                <div className="ml-2">
                    <h6 className="m-0 h6-post">{comment.name}</h6>
                    <span className="about-feed">{format(new Date(comment.createdAt), "dd-MM-yyyy")}</span>
                </div>
            </div>
            <div className="text-post my-3">
                <p>{comment.comment}</p>
            </div>
            
        </div>
    )
}

export default Comment
