import React from 'react'
import { format } from "date-fns";

function Comment({comment}) {
    //it needs to have the DELETE and PUT Methods here
    return (
        <div>
           {/* {A edit button, a delete button} */}
            <div>
                <img src={comment.image} alt="" />
                <p>{comment.name}</p>
                <span>{format(new Date(comment.createdAt), "dd-MM-yyyy")}</span>
            </div>
            <div>
                <p>{comment.comment}</p>
            </div>
            
        </div>
    )
}

export default Comment
