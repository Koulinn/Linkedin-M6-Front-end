import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import { useState } from 'react'

function ModalProfileImage(props) {
    const [userImage, setUserImage] = useState('')
    const [userImagePath, setUserImagePath] = useState('')

    const replaceUserProfilePic = async (e) => {
        e.preventDefault()
        console.log(userImage)
        try {

            let response = await fetch(
                // 'https://striveschool-api.herokuapp.com/api/profile/' + window.localStorage.getItem('_id') + '/picture'
                `${process.env.REACT_APP_DEV_URL}profile/me/${window.localStorage.getItem('_id')}`
                , {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + window.localStorage.getItem('user_Token'),
                },
                body: userImage

            })
            const test = await response.json()
            console.log(test)
            props.setChangeUserdata(!props.changeUserData)
            props.onHide()
        } catch (error) {
            console.log(error)

        }

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className="upload-img-modal">
                <Modal.Title id="contained-modal-title-vcenter">
                    <p className="profile-photo">Profile photo</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="upload-img-modal">
                <Form>
                    
                        {userImagePath.length > 5 ? <div className="bg-photo-upload">
                            <img src={userImagePath} alt="" />
                        </div> : <div className="bg-photo-upload">
                            <img src='https://keyrecruitment.co.za/wp-content/uploads/2013/10/image.jpg' alt="" />
                        </div> }
                </Form>
            </Modal.Body>
            <Modal.Footer className="upload-img-modal modal-footer-photo">

                <div className="first-three">
                    <Form.Group as={Col} controlId="profile">
                        <span>
                            <label For="post-img">
                                <div className="mouseCursor" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#EDEDEE" class="mercado-match" width="24" height="24" focusable="false">
                                        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                    </svg>
                                </div>

                            </label>
                            <Form.Control type="file" placeholder="Update your profile image" name="post-img" id="post-img" className="test" onChange={(e) => {
                                let newUserImage = new FormData()
                                setUserImagePath(URL.createObjectURL(e.target.files[0]))
                                newUserImage.append('image', e.target.files[0])
                                setUserImage(newUserImage)
                            }} /> </span>

                    </Form.Group>

                    <Form.Group as={Col} controlId="profile">
                        <span>
                            <label For="post-img">
                                <div className="mouseCursor">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#EDEDEE" class="mercado-match" width="24" height="24" focusable="false">
                                        <path d="M16 13a4 4 0 11-4-4 4 4 0 014 4zm6-4v11H2V9a3 3 0 013-3h1.3l1.2-3h9l1.2 3H19a3 3 0 013 3zm-5 4a5 5 0 10-5 5 5 5 0 005-5z"></path>
                                    </svg>

                                </div>

                            </label>
                            <Form.Control type="file" placeholder="Update your profile image" name="post-img" id="post-img" className="test" onChange={(e) => {
                                let newUserImage = new FormData()
                                newUserImage.append('profile', e.target.files[0])
                                setUserImage(newUserImage)
                            }} /> </span>

                    </Form.Group>

                    <Form.Group as={Col} controlId="profile">
                        <span>
                            <label For="post-frames">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#EDEDEE" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                                </svg>

                            </label>
                        </span>

                    </Form.Group>
                </div>

                <div>
                    <Form.Group as={Col} controlId="profile">
                        <span>
                            <label For="post-delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#EDEDEE" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M20 4v1H4V4a1 1 0 011-1h4a1 1 0 011-1h4a1 1 0 011 1h4a1 1 0 011 1zM5 6h14v13a3 3 0 01-3 3H8a3 3 0 01-3-3zm9 12h1V8h-1zm-5 0h1V8H9z"></path>
                                </svg>

                            </label>
                        </span>
                        <Button className="btn-profile-photo"
                            onClick={(e) => replaceUserProfilePic(e)}
                        >Save</Button>
                    </Form.Group>

                </div>



            </Modal.Footer >
        </Modal >

    )
}

export default ModalProfileImage
