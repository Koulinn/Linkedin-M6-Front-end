import React from 'react'
import {Button, Card, FormControl} from 'react-bootstrap'

function CommentForm(props) {
    // requests post, edit, delete, 
    return (
        <Card>
            <Card.Body>
                <FormControl as="textarea" aria-label="With textarea" />
                <Button variant="primary">Go somewhere</Button>
                {/* {menu for delete and edit} */}
            </Card.Body>
        </Card>
    )
}

export default CommentForm
