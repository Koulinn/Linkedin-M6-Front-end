import React from 'react'
import { Button, Card, FormControl } from 'react-bootstrap'
import { useState } from 'react'

function CommentForm({ userId, postId, renderAgain }) {
    const [requestCommentBody, setRequestCommentBody] = useState({
        comment: null,
        user: userId
    })
    const postComment = async (e) => {
        try {
            e.preventDefault()
            let response = await fetch(`${process.env.REACT_APP_DEV_URL}posts/post/${postId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestCommentBody),
                }
            );
            const serverResponse = await response.json()
            console.log(serverResponse)
            renderAgain()
        } catch (e) {
            console.log(e);
            return e;
        }
    };
    return (
        <Card className="border-0">
            <Card.Body className="p-0">
                <FormControl as="textarea" aria-label="With textarea" onChange={(e) => {
                    setRequestCommentBody({
                        ...requestCommentBody,
                        comment: e.target.value
                    })
                }} />
                <Button variant="primary" className="mt-3 bg-color" onClick={(e)=> postComment(e)}>Send comment</Button>
                {/* {menu for delete and edit} */}
            </Card.Body>
        </Card>
    )
}

export default CommentForm
