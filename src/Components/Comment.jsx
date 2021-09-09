import React from 'react'

function Comment(props) {
    return (
        <div>
            <div>
                <img src="avatar" alt="" />
                <p>Name</p>
                <span>Date published</span>
            </div>
            <div>
                <p>Comment Text</p>
            </div>
            
        </div>
    )
}

export default Comment
