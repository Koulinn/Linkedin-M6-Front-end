import React, { useState, useEffect } from 'react';
import '../../Styles/Hasham.css'
import { FaRegEdit, FaSearch } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { GoSettings } from 'react-icons/go'
import Chat from './Chat';



const Messaging = () => {
    const [messaging, setMessaging] = useState(false);
    const [Profiles, setProfiles] = useState([]);
    // console.log(Profiles);
    useEffect(() => {
        fetch(
            // 'https://striveschool-api.herokuapp.com/api/profile/', 
            // `${process.env.REACT_APP_DEV_URL}profile/me/${window.localStorage.getItem('_id')}`, //miss endpoint getAll profile
        {
            method: 'GET',
            headers: {
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWYwNmIzNTgxNzAwMTVjMjI3MDUiLCJpYXQiOjE2MjYyNzAyMjMsImV4cCI6MTYyNzQ3OTgyM30.0IcvG8-Zqf633mRWGCRlzG5yDVI6njZjZGZzJfuGulw",
            },
        })
            .then((response) => response.json())
            .then((data) => setProfiles(data.slice(85, 95)));
    }, []);
    return (
        <div
            className='Messaging d-none d-md-block'
            style={
                messaging
                    ? { transform: 'translateY(0)' }
                    : { transform: 'translateY(93%)' }
            }
        >
            <div className='header_messaging'>
                <div className='messaging_head'>
                    <img
                        src={window.localStorage.getItem('image') ? window.localStorage.getItem('image') : 'https://keyrecruitment.co.za/wp-content/uploads/2013/10/image.jpg'}
                        alt='profile picture'
                    /></div>
                <div className="pr-auto titleSize"> <p>Messaging</p></div>
                <div className='icon1 pt-2'>
                    <BsThreeDots className=' ml-auto' /></div>
                <div> <svg className='icon2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="black" className="mercado-match" width="16" height="16" focusable="false">                         <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>                     </svg>                     <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path></div>
                <div className='icon pt-2' onClick={() => setMessaging(!messaging)}>
                    <MdKeyboardArrowUp />
                </div>
            </div>


            <div className='messagin-body'>

                <input type='text' className='search-message' />
                <span className=' search-bar'><FaSearch className='search-icon' />Search messages <GoSettings className='setting-icon' /></span>
                {Profiles.slice(0, 10).map((person) => (
                    <a href={'/userprofile/' + person.name + '/' + person._id} key={person._id}>
                        <Chat person={person} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Messaging;
