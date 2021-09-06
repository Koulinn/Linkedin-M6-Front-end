import React from 'react';

import EllipsisText from 'react-ellipsis-text';
import '../../Styles/Hasham.css'
const Chat = ({ person }) => {
    return (
        <>
            <div className='chat'>
                <img className='message_img' src={person.image} alt='' />
                <div className='profile_info'>
                    <div className='message_name'>{person.name}</div>
                    <div className='message'>
                        <EllipsisText text={person.bio} length={25} />
                    </div>
                </div>
                <div className='date'>Today</div>
            </div>
            <hr />
        </>
    );
};

export default Chat;
